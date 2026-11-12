# TESTING44

A small Next.js (App Router) + TypeScript + Tailwind CSS app used to test the platform end to end.

## Prerequisites

- Node.js 20.9 or newer
- npm

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

## Build and run for production

```bash
npm run build    # production build (includes TypeScript checking)
npm start        # serve the production build at http://localhost:3000
```

Lint with `npm run lint`.

## Pages

- `/` — landing page with a hero section and a button to the counter.
- `/counter` — counter page with a link back to the landing page.

## Counter rules

- Starts at 0 on every page load (the value is not persisted).
- `+1` adds 1, `-1` subtracts 1, `Reset` sets it back to 0.
- The value stays between -1000 and 1000: `+1` is disabled at 1000 and `-1` is disabled at -1000. Each one re-enables as soon as the value moves away from the limit.
