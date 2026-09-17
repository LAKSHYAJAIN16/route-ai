# route.ai

> Getting more out of the transit routes that already exist, using data instead of concrete.

Suburban transit is bad for anyone without a car, especially teens — sparse routes, inflexible schedules, long waits, and new infrastructure is slow and expensive to build. route.ai tries to fix that with software instead: a dashboard that helps agencies flex existing routes based on real data, and a rider app that makes giving feedback effortless.

## Two pieces

- **Agency dashboard** — real-time ridership data suggests where routes should flex, rider feedback gets filtered so the signal doesn't get buried, and an LLM turns data + feedback into something a planner can act on.
- **Rider app** — detects walking/waiting/on-bus automatically (no manual check-in), quick-tap feedback, and a "SafeRide" mode linking younger riders' accounts to a parent/guardian with restricted data collection.

## Layout

```
route.ai/
├── route-ai-app/         # Next.js dashboard for transit authorities (the main product)
├── route-ai-frontend/    # Next.js marketing site (git submodule, separate repo)
├── route-ai-mobile/      # React Native / Expo rider app
├── route-ai-data/        # Node scripts that export Firebase data to CSV
└── route-ai-ai/          # Python notebook that crunches ridership CSVs into stop suggestions
```

Stack: Next.js 15 + React 19 + TypeScript + Tailwind, Recharts, Mapbox GL, OpenAI SDK, Firebase for data/auth, Google Cloud for hosting. Mobile is React Native/Expo.

## Running it

Clone with submodules so `route-ai-frontend` shows up:

```bash
git clone --recurse-submodules https://github.com/LAKSHYAJAIN16/route.ai
git submodule update --init --recursive   # already cloned without them?
```

**Dashboard** (needs Firebase + OpenAI env vars — check `route-ai-app/src/lib`)
```bash
cd route-ai-app && npm install && npm run dev    # localhost:3000
```

**Marketing site**
```bash
cd route-ai-frontend && npm install && npm run dev
```

**Mobile app**
```bash
cd route-ai-mobile && npm install && npm start   # then a/i/w
```

**Data export**
```bash
cd route-ai-data && npm install && node export_to_csv.js
```

**Route optimization notebook**
```bash
cd route-ai-ai
pip install pandas jupyter
jupyter notebook Route_Optimization.ipynb   # or: python Route_Optimization.py
```
Reads the bundled ridership CSVs and outputs suggested new stops to `final_top_stop_suggestions.csv` / `proposed_new_stop_coords.csv`.
