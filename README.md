# School Needs & Budget Alignment

A responsive, editorial-style research prototype built with **React + TypeScript + Vite** for exploring how school needs, illustrative learning indicators, and related budget records might be compared without making unsupported funding-attribution claims.

**Important:** Every school profile and financial amount in the application is **synthetic demonstration data**. This is **not** an official DepEd, E4E, DBM, Project Bukas, STRIDE, or COMPASS service. No live government data is connected.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ (Vite 6 compatible) and npm.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
npm run preview
```

Deploy on Vercel with framework **Vite**, build command `npm run build`, output directory `dist`.

## Features

- Overview with clickable need categories that filter the school directory
- Region/division filters, search, sortable school comparison, and detailed school profiles
- Scope-aware need-to-funding-record exploration
- Transparent synthetic data register and matching methodology
- CSV exports for school comparison, funding alignment, division summary, and source register
- Responsive layout and browser print-to-PDF support

## Data and methodology

Sample datasets are in `src/data.ts`.

A need is flagged in this **demonstration only** when:

- available classrooms are fewer than `requiredClassrooms`
- available teachers are fewer than `requiredTeachers`
- the literacy indicator is below an **illustrative** threshold of 70%
- the numeracy indicator is below an **illustrative** threshold of 65%
- the synthetic `facilityGap` flag is true

These thresholds are **not official DepEd criteria**.

Funding records match by year, need category, and one of these scopes: school ID, division, or region. School-specific matches are distinguished from broader-scope records. A related record does **not** establish need coverage, spending, benefit to the individual school, or completed works. An unmatched record does **not** establish that no funding exists.

## Roadmap to public data

1. Inventory current Project Bukas, DBM COMPASS, and (if available) STRIDE exports or APIs.
2. Confirm source definitions, licensing/permissions, year coverage, budget stage, and geography.
3. Identify stable school identifiers for education records. Never infer individual-school allocations from division or region totals.
4. Build a documented ETL and data validation layer, preserving raw files and provenance.
5. Add real API integrations only after assessing permissions, quality, missingness, and reporting differences.
6. Validate prototype outputs with intended users, then replace synthetic records only when defensible.

## Code layout

- `src/App.tsx` — pages, navigation, filters, drilldowns, CSV exporters
- `src/data.ts` — synthetic dataset, types, funding assessment rules
- `src/styles.css` — minimal white/navy responsive design
