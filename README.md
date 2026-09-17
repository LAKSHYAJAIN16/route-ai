# route.ai  
**The future of public transit**

## Overview

**route.ai** is a transit optimization platform designed to improve public transportation for youth in suburban areas, starting with the Greater Toronto Area (GTA). By combining real-time data analysis with user feedback, we help governments and transit agencies make smarter decisions without costly infrastructure changes.

---

## The Problem

Youth living in suburban regions like the GTA often face limited access to public transit. With fewer routes, inflexible schedules, and long wait times, commuting becomes inefficient and unreliable—especially for students and teens without access to a car. Building new routes or stops is expensive and slow.

---

## The Solution

**route.ai** provides a two-part solution:

### 1. Government Platform

- **Dynamic Routing**  
  Routes are updated based on real-time ridership data and demand, reducing dormant lines and improving efficiency.

- **Feedback Filtering**  
  Riders can submit feedback through the app. Our platform filters and analyzes this input to surface trends and actionable suggestions.

- **Insight Generation**  
  Uses large language models to interpret data and feedback at scale, helping transit authorities make informed decisions.

- **Data Visualization**  
  Offers clean, intuitive dashboards to help planners quickly identify performance gaps and opportunities.

### 2. Mobile App

- **Smart Stop Detection**  
  Automatically detects whether a user is walking to, waiting at, or on a bus—no manual check-in required.

- **Quick Feedback Submission**  
  Riders can report issues or make suggestions in a few taps.

- **SafeRide Profiles for Minors**  
  Allows underage users to connect their accounts to a parent or guardian, with options to restrict data collection.

---

## Impact

- Reduced government operating costs through more efficient routing  
- Shorter, smarter trips that reduce emissions  
- Improved rider satisfaction and safety  
- Better civic engagement through real-time feedback  
- A flexible blueprint for suburban transit optimization that scales

---

## Tech Stack

- **Government dashboard (`route-ai-app`):** Next.js 15 + React 19 + TypeScript, Tailwind CSS, Recharts for charts, Mapbox GL / react-map-gl for maps, OpenAI SDK for LLM-based insight generation, Firebase for auth/data
- **Rider mobile app (`route-ai-mobile`):** React Native + Expo
- **Marketing site (`route-ai-frontend`):** Next.js + TypeScript, Tailwind CSS (git submodule, separate repo)
- **Data pipeline (`route-ai-data`):** Node.js scripts for exporting Firebase data to CSV
- **Route optimization (`route-ai-ai`):** Python (pandas/Jupyter notebook) analyzing bus stop and ridership CSVs to suggest optimized stops
- **Database:** Firebase
- **Cloud/DevOps:** Google Cloud

## Repository Structure

This is a monorepo of independent sub-projects (one, `route-ai-frontend`, is a git submodule; the others are plain subdirectories):

```
route.ai/
├── route-ai-app/         # Next.js government/transit-authority dashboard (main product)
├── route-ai-frontend/    # Next.js public marketing site (git submodule)
├── route-ai-mobile/      # React Native / Expo rider app
├── route-ai-data/        # Node.js scripts to export Firebase data to CSV
└── route-ai-ai/          # Python notebook/script for bus stop route optimization
```

## Setup

Clone with submodules so `route-ai-frontend` is populated:

```bash
git clone --recurse-submodules https://github.com/LAKSHYAJAIN16/route.ai
# or, if already cloned:
git submodule update --init --recursive
```

Each sub-project has its own dependencies and is run independently.

### Government dashboard (`route-ai-app`)

```bash
cd route-ai-app
npm install
npm run dev    # http://localhost:3000
```

Requires Firebase and OpenAI credentials (see `route-ai-app/src/lib` for config) via environment variables.

### Marketing site (`route-ai-frontend`)

```bash
cd route-ai-frontend
npm install
npm run dev
```

### Mobile app (`route-ai-mobile`)

```bash
cd route-ai-mobile
npm install
npm start       # Expo dev server; press a/i/w for Android/iOS/web
```

### Data export scripts (`route-ai-data`)

```bash
cd route-ai-data
npm install
node export_to_csv.js
```

### Route optimization (`route-ai-ai`)

```bash
cd route-ai-ai
pip install pandas jupyter
jupyter notebook Route_Optimization.ipynb
# or: python Route_Optimization.py
```

Reads the bundled bus stop/ridership CSVs (`bus_route_stops_map.csv`, `bus_stop_summary_with_coords.csv`, etc.) and outputs suggested new stops to `final_top_stop_suggestions.csv` / `proposed_new_stop_coords.csv`.
