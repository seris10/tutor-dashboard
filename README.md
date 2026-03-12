# Tutor Dashboard

A React-based student progress dashboard for tracking tutoring outcomes across multiple learners. Built for a private tutoring practice managing 6 students simultaneously, with per-student analytics, assignment tracking, skill progression charts, and session-level notes.

All student data is anonymized. Names, quotes, and identifying details have been replaced with fictional equivalents.

## What It Does

**Admin view** - Overview of all students at a glance: status cards with key metrics, a pipeline table showing where each student is in their learning journey, and prioritized action items.

**Student views** - Each student has a dedicated dashboard with tabbed navigation. Tabs vary per student based on what's relevant to their profile:

| Tab | Purpose |
|-----|---------|
| Overview | Key stats, session count, current goals, at-a-glance status |
| Academic Profile | Subject-level performance breakdowns with bar/radar charts |
| Skills | Skill bars with percentage progress + detailed chart tooltips containing actual student work examples |
| Assignments | Full assignment log with grades, dates, status badges, and notes |
| Sessions | Session-by-session timeline with debrief notes |
| Trust Trajectory | Behavioral/engagement tracking over time (line charts) |
| Interests | Student interests mapped for engagement strategy |
| Insights | Qualitative analysis cards with tutor observations |
| Recommendations | Next-step suggestions based on current progress |
| Notes | Free-form tutor notes and session reflections |
| Subjects | Per-subject deep dives with pie/doughnut breakdowns |

Not every student has every tab - the dashboard adapts based on available data. A student with 2 sessions gets a lighter dashboard than one with 30.

## Tech Stack

- **React 18** with functional components and hooks
- **React Router 6** - hash routing (`/#/student/maya`)
- **Chart.js 4 + react-chartjs-2** - 6 chart types (line, bar, radar, pie, doughnut, polar)
- **Vite 5** - build tooling, HMR
- **Vitest + React Testing Library** - 25 tests across 7 test files
- **No CSS framework** - custom design system (parchment/sage/earth-tone palette)

## Project Structure

```
src/
├── App.jsx                    # Router setup
├── index.css                  # Full design system (colors, typography, components)
├── main.jsx                   # Entry point
├── data/
│   ├── students.js            # All 6 students: stats, tabs, charts, assignments, quotes
│   └── chartHelpers.js        # Shared chart config, color palettes, tooltip factories
├── components/
│   ├── admin/                 # Admin dashboard (4 components)
│   ├── charts/                # Chart wrappers (6 components)
│   ├── layout/                # Header, Footer, TabNav (3 components)
│   ├── shared/                # Reusable UI (11 components)
│   └── student/               # Student dashboard + tabs (12 components)
└── test/                      # Unit tests (7 files, 25 tests)
```

**48 source files, 36 components, 862-line data module.**

## Running Locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Building

```bash
npm run build      # Output in dist/ (~143KB gzipped)
npm run preview    # Serve the production build locally
```

## Testing

```bash
npm test           # Run all 25 tests
npm run test:watch # Watch mode
```

## Routes

| Route | View |
|-------|------|
| `/` | Admin dashboard - all students |
| `/student/:id` | Individual student dashboard |

Student IDs: `maya`, `jordan`, `luna`, `sofia`, `carmen`, `priya`

## Data Architecture

All student data lives in `src/data/students.js` as structured objects. Each student record contains:

- **meta** - name, status, avatar initial, color theme
- **stats** - key metrics displayed as stat cards
- **tabs** - array of tab configs (label + component key)
- **charts** - per-tab chart datasets with full Chart.js config
- **assignments** - table rows with grade, date, status, notes
- **skills** - labeled skill bars with percentages
- **tooltipExamples** - actual student work quotes embedded in chart tooltips
- **timeline** - session entries with dates and debrief notes
- **recommendations** - next-step cards with priority levels

Chart configuration helpers (`chartHelpers.js`) provide consistent color palettes, tooltip formatting, and responsive defaults across all chart types.

## Design System

The CSS is a custom parchment/earth-tone system - no Tailwind, no Bootstrap. Key tokens:

- **Background**: warm parchment (`#faf6f0`) with sage accents (`#7c956b`)
- **Typography**: system font stack, scaled heading hierarchy
- **Cards**: soft shadows, rounded corners, cream backgrounds
- **Charts**: muted earth-tone palette (sage, terracotta, gold, slate)
- **Badges**: color-coded status indicators (green/amber/red)
- **Responsive**: fluid grid, stacks to single column on mobile

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push and PR:
1. Install dependencies
2. Run full test suite
3. Production build

## License

Private project. All student data is fictional.
