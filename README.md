# Tutor Dashboard

Production-oriented React dashboard for tutoring operations with an admin view, per-student profiles, charted progress, assignments, notes, and recommendations.

All student names and identifying details are anonymized.

## Live Deployment

- Production URL: set after deployment
- Health check URL: same as production URL root

## Core Capabilities

- Admin dashboard for all students with status cards, pipeline table, and action items
- Student dashboards with tab-based views
- Subject, skill, assignment, session, trust, and recommendation tracking
- Chart.js visualizations (line, bar, radar, pie, doughnut, polar)
- Responsive layout for desktop and mobile

## Tech Stack

- React 18
- React Router 6 (hash routing)
- Chart.js 4 + react-chartjs-2
- Vite 5
- Vitest + React Testing Library
- GitHub Actions for CI/CD and monitoring

## Architecture

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── data/
│   ├── students.js
│   └── chartHelpers.js
├── components/
│   ├── admin/
│   ├── student/
│   ├── charts/
│   ├── shared/
│   └── layout/
└── test/
```

Design choices:

- Data-first model with structured student records in `src/data/students.js`
- Reusable presentational components in `src/components/shared`
- Centralized chart config helpers in `src/data/chartHelpers.js`
- Routing shell in `src/App.jsx`

## Local Development

```bash
npm ci
npm run dev
```

Default local URL: `http://localhost:5173`

## Quality Checks

```bash
npm run test
npm run build
npm run smoke
```

`npm run smoke` validates:

- required project files are present
- no assistant branding references exist in tracked source/docs
- no em-dash characters are present

## CI/CD

### CI workflow

File: `.github/workflows/ci.yml`

Runs on push and pull request:

1. install dependencies
2. run tests
3. build production bundle
4. run smoke checks

### Deploy workflow

File: `.github/workflows/deploy.yml`

Runs on push to `main` and manual trigger:

1. re-runs full verification
2. deploys to Cloudflare Pages when secrets/vars are configured

Required GitHub secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Required GitHub variable:

- `CF_PAGES_PROJECT` (Cloudflare Pages project name)

## Monitoring

### Scheduled uptime monitor

File: `.github/workflows/uptime-monitor.yml`

Runs every 30 minutes and checks public availability using:

- `monitoring/uptime-check.mjs`

Required GitHub variable:

- `UPTIME_URL` (public app URL)

## Routing

- `/` -> admin dashboard
- `/student/:id` -> student dashboard

Student IDs in dataset:

- `maya`
- `jordan`
- `luna`
- `sofia`
- `carmen`
- `priya`

## Privacy Notes

- Repository is intended for private access.
- Dataset uses fictionalized student identities.
- No personally identifying production student data should be committed.
