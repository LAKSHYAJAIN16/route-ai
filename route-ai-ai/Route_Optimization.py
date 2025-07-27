import requests
import pandas as pd
import numpy as np
from geopy.distance import geodesic
from math import radians
from sklearn.metrics.pairwise import haversine_distances
import os

# Firebase config
API_KEY = "AIzaSyDnnCkGiNVg-26FMYuSDmUdxRg6wSXT4YA"
PROJECT_ID = "route-ai-6a51c"

# Change this to whtatever your directory is
BASE_DIR = "C:/Users/laksh/Desktop/Projects/route.ai/route-ai-ai/"

# Helper to fetch a Firestore collection as a DataFrame using REST API
def fetch_firestore_collection(collection, page_token=None):
    print(f"Fetching collection: {collection}")
    url = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents/{collection}"
    params = {"key": API_KEY}
    if page_token:
        params["pageToken"] = page_token
    resp = requests.get(url, params=params)
    resp.raise_for_status()
    data = resp.json()
    docs = data.get("documents", [])
    print(f"Fetched {len(docs)} documents from {collection}")
    # Parse Firestore document fields
    parsed = []
    for doc in docs:
        fields = doc.get("fields", {})
        flat = {}
        for k, v in fields.items():
            if "stringValue" in v:
                flat[k] = v["stringValue"]
            elif "integerValue" in v:
                flat[k] = int(v["integerValue"])
            elif "doubleValue" in v:
                flat[k] = float(v["doubleValue"])
            elif "booleanValue" in v:
                flat[k] = v["booleanValue"]
            elif "timestampValue" in v:
                flat[k] = v["timestampValue"]
            elif "arrayValue" in v:
                flat[k] = v["arrayValue"].get("values", [])
            elif "mapValue" in v:
                flat[k] = v["mapValue"].get("fields", {})
            else:
                flat[k] = v
        parsed.append(flat)
    df = pd.DataFrame(parsed)
    print(f"DataFrame for {collection} shape: {df.shape}")
    return df

# Fetch data from Firestore (mimicking data.ts methods)
df_feedback = fetch_firestore_collection("town-milton/feedback/feedback-collection")
df_trips = fetch_firestore_collection("town-milton/trips/trip-collection")
df_user_positions = fetch_firestore_collection("town-milton/user-positions/user-positions-collection")
df_waiting_users = fetch_firestore_collection("town-milton/waiting-users/waiting-users-collection")
df_routes_raw = fetch_firestore_collection("town-milton/routes/route-collection")

# Flatten stops from routes if present as a mapValue or arrayValue
if 'stops' in df_routes_raw.columns:
    stops = []
    for _, row in df_routes_raw.iterrows():
        stops_field = row['stops']
        # Firestore REST API may return stops as a list of mapValues
        if isinstance(stops_field, list):
            for stop in stops_field:
                if isinstance(stop, dict) and 'mapValue' in stop:
                    stop_fields = stop['mapValue'].get('fields', {})
                    stop_flat = {k: v.get('stringValue', v.get('doubleValue', v.get('integerValue', None))) for k, v in stop_fields.items()}
                    stop_flat['route'] = row.get('id', '')
                    stop_flat['routeName'] = row.get('name', '')
                    stops.append(stop_flat)
        elif isinstance(stops_field, dict) and 'arrayValue' in stops_field:
            for stop in stops_field['arrayValue'].get('values', []):
                if isinstance(stop, dict) and 'mapValue' in stop:
                    stop_fields = stop['mapValue'].get('fields', {})
                    stop_flat = {k: v.get('stringValue', v.get('doubleValue', v.get('integerValue', None))) for k, v in stop_fields.items()}
                    stop_flat['route'] = row.get('id', '')
                    stop_flat['routeName'] = row.get('name', '')
                    stops.append(stop_flat)
    df_routes = pd.DataFrame(stops)
    print(f"Flattened routes DataFrame shape: {df_routes.shape}")
else:
    df_routes = df_routes_raw.copy()
    print(f"Routes DataFrame shape: {df_routes.shape}")

# Step 1: Compute average wait time, ride time, rating, and feedback volume per stop
agg_stats = df_feedback.groupby(['route', 'stop_id']).agg(
    avg_wait_time=('wait_time', 'mean'),
    avg_ride_time=('ride_time', 'mean'),
    avg_rating=('rating', 'mean'),
    feedback_volume=('remarks', 'count')
).reset_index()
print(f"agg_stats shape: {agg_stats.shape}")

# Merge with stop coordinates
agg_with_coords = agg_stats.merge(df_routes, on=['route', 'stop_id'])
print(f"agg_with_coords shape: {agg_with_coords.shape}")

# Step 2: Generate a city grid of candidate coordinates for new bus stops
print("Generating city grid for candidate stops...")
lat_min, lat_max = df_routes['latitude'].astype(float).min(), df_routes['latitude'].astype(float).max()
lon_min, lon_max = df_routes['longitude'].astype(float).min(), df_routes['longitude'].astype(float).max()
print(f"Latitude range: {lat_min} to {lat_max}")
print(f"Longitude range: {lon_min} to {lon_max}")

# Create a grid of lat/lon points (~200m apart)
grid_points = []
step = 0.002  # ≈200 meters
lat_vals = np.arange(lat_min, lat_max, step)
lon_vals = np.arange(lon_min, lon_max, step)
print(f"Grid size: {len(lat_vals)} x {len(lon_vals)}")

for lat in lat_vals:
    for lon in lon_vals:
        grid_points.append((lat, lon))
print(f"Total grid points: {len(grid_points)}")

# Step 3: Filter candidate locations that are far from all existing stops
print("Filtering candidate locations...")
min_distance_km = 0.25  # New stops must be at least 250m away from all current ones
new_stop_suggestions = []

for lat, lon in grid_points:
    distances = df_routes.apply(
        lambda row: geodesic((lat, lon), (float(row['latitude']), float(row['longitude']))).km, axis=1
    )
    if distances.min() > min_distance_km:
        new_stop_suggestions.append({'latitude': lat, 'longitude': lon})
print(f"Suggested new stops: {len(new_stop_suggestions)}")

df_suggested_stops = pd.DataFrame(new_stop_suggestions)

# Step 4: Annotate each stop with active time buckets from feedback data
print("Annotating stops with active time buckets...")
df_feedback['timestamp'] = pd.to_datetime(df_feedback['timestamp'])
df_feedback['hour'] = df_feedback['timestamp'].dt.hour
df_feedback['time_bucket'] = pd.cut(
    df_feedback['hour'],
    bins=[0, 6, 9, 12, 15, 18, 21, 24],
    labels=['Late Night', 'Morning Rush', 'Late Morning', 'Afternoon', 'Evening Rush', 'Evening', 'Night'],
    right=False
)

# Aggregate by stop and time_bucket
stop_time_activity = df_feedback.groupby(['stop_id', 'time_bucket'], observed=True).size().reset_index(name='feedback_count')
print(f"stop_time_activity shape: {stop_time_activity.shape}")

# Only keep high-activity periods (more than 3 feedbacks)
high_activity_periods = stop_time_activity[stop_time_activity['feedback_count'] > 3]
print(f"High activity periods: {high_activity_periods.shape[0]}")

# Save outputs (optional, can comment out if not needed)
print("Saving output CSVs...")
agg_with_coords.to_csv(os.path.join(BASE_DIR, "bus_stop_summary_with_coords.csv"), index=False)
df_suggested_stops.to_csv(os.path.join(BASE_DIR, "proposed_new_stop_coords.csv"), index=False)
high_activity_periods.to_csv(os.path.join(BASE_DIR, "stop_active_periods.csv"), index=False)

print("✅ Analysis complete. Files saved:")
print("- bus_stop_summary_with_coords.csv")
print("- proposed_new_stop_coords.csv")
print("- stop_active_periods.csv")

# --- Improved stop suggestion logic ---
print("Computing improved stop suggestions...")
# Convert coordinates to radians
coords_existing = df_routes[['latitude', 'longitude']].astype(float).applymap(radians).to_numpy()
coords_candidates = df_suggested_stops[['latitude', 'longitude']].astype(float).applymap(radians).to_numpy()

# Compute Haversine distances (km)
distance_matrix = haversine_distances(coords_existing, coords_candidates) * 6371
print(f"Distance matrix shape: {distance_matrix.shape}")

# Parameters
min_improvement_distance = 0.25  # km
top_suggestions = []

# Match each stop to a better new suggestion
for i, stop_row in df_routes.iterrows():
    stop_id = stop_row['stop_id']
    route = stop_row['route']
    original_lat = float(stop_row['latitude'])
    original_lon = float(stop_row['longitude'])

    distances = distance_matrix[i]
    candidate_idxs = np.where(distances > min_improvement_distance)[0]

    if len(candidate_idxs) > 0:
        best_idx = candidate_idxs[np.argmin(distances[candidate_idxs])]
        new_stop = df_suggested_stops.iloc[best_idx]

        # Get most active time for this stop
        times = high_activity_periods[high_activity_periods['stop_id'] == stop_id]
        active_periods = times.sort_values('feedback_count', ascending=False)['time_bucket'].tolist()
        active_time = active_periods[0] if active_periods else 'General'

        top_suggestions.append({
            'original_stop_id': stop_id,
            'route': route,
            'original_lat': original_lat,
            'original_lon': original_lon,
            'suggested_lat': new_stop['latitude'],
            'suggested_lon': new_stop['longitude'],
            'active_time': active_time
        })
print(f"Total improved stop suggestions: {len(top_suggestions)}")

# Save final suggestions
df_top_suggestions = pd.DataFrame(top_suggestions)
df_top_suggestions.to_csv(os.path.join(BASE_DIR, "final_top_stop_suggestions.csv"), index=False)
print("✅ Saved: final_top_stop_suggestions.csv")
schedule = []
routes = []
stops = []
    
def calculate(inputs):
    # blah blah blah blah code
    return [schedule,routes,stops]