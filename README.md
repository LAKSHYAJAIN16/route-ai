# route.ai

I started this because I kept noticing how bad suburban transit is for anyone without a car — especially teens. Growing up in the GTA, buses out here have sparse routes, inflexible schedules, and long waits, and building new infrastructure to fix that is slow and expensive. route.ai is my attempt at getting more out of the routes that already exist, using data instead of concrete.

## The idea

Two pieces:

**A dashboard for transit agencies.** It looks at real-time ridership data to suggest where routes should flex, collects and filters rider feedback so the useful signal doesn't get buried, and uses an LLM to turn all of that (data + feedback) into something a planner can actually act on, with dashboards to visualize where things are working and where they aren't.

**A rider-facing app.** It detects whether you're walking to a stop, waiting, or already on a bus without you having to check in manually, lets you fire off quick feedback in a couple taps, and has a "SafeRide" mode for younger riders to link their account to a parent/guardian with restricted data collection.

The goal is basically: cheaper for agencies to operate, shorter/smarter trips for riders, and enough real feedback flowing back that route decisions aren't just guesses.

## How it's put together

It's a monorepo of mostly-independent sub-projects:

```
route.ai/
├── route-ai-app/         # Next.js dashboard for transit authorities (the main product)
├── route-ai-frontend/    # Next.js marketing site (git submodule, separate repo)
├── route-ai-mobile/      # React Native / Expo rider app
├── route-ai-data/        # Node scripts that export Firebase data to CSV
└── route-ai-ai/          # Python notebook that crunches ridership CSVs into stop suggestions
```

Stack-wise: the dashboard is Next.js 15 + React 19 + TypeScript with Tailwind, Recharts for charts, Mapbox GL for maps, the OpenAI SDK for the insight generation, and Firebase underneath. The mobile app is React Native/Expo. The marketing site is Next.js. Everything's on Firebase for data/auth and Google Cloud for hosting.

## Running it

Clone with submodules so `route-ai-frontend` actually shows up:

```bash
git clone --recurse-submodules https://github.com/LAKSHYAJAIN16/route.ai
# already cloned without them?
git submodule update --init --recursive
```

Each piece runs on its own:

**Dashboard**
```bash
cd route-ai-app
npm install
npm run dev    # localhost:3000
```
Needs Firebase + OpenAI credentials as env vars — check `route-ai-app/src/lib` for what it expects.

**Marketing site**
```bash
cd route-ai-frontend
npm install
npm run dev
```

**Mobile app**
```bash
cd route-ai-mobile
npm install
npm start   # then a/i/w for Android/iOS/web
```

**Data export scripts**
```bash
cd route-ai-data
npm install
node export_to_csv.js
```

**Route optimization notebook**
```bash
cd route-ai-ai
pip install pandas jupyter
jupyter notebook Route_Optimization.ipynb
# or: python Route_Optimization.py
```
It reads the bundled bus stop/ridership CSVs (`bus_route_stops_map.csv`, `bus_stop_summary_with_coords.csv`, etc.) and spits out suggested new stops in `final_top_stop_suggestions.csv` / `proposed_new_stop_coords.csv`.
