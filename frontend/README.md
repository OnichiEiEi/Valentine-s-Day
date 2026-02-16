# Frontend — Valentine's

This folder contains the frontend application for the "Valentine's" project built with Next.js and TypeScript. The app provides user-facing pages for login, creating letters, timelines, and albums.

## High-level flow

- User authenticates using Firebase Authentication (client-side). After sign-in, the client holds an ID token.
- The client uses the ID token for any protected calls to the backend by sending `Authorization: Bearer <ID_TOKEN>` in request headers.
- Local UI state (pages under `app/`) reads/writes user content and uses service modules in `src/services/` for persistence.
- By default the app stores content locally (localStorage). When backend is configured, the service layer can call protected API endpoints to persist per-user data in MongoDB.

## Tech stack

- Next.js (App Router) with TypeScript
- React (client components) and server components where applicable
- Tailwind CSS (utility-first styling) — (if used in project)
- Firebase Authentication (client SDK)
- Fetch / REST calls to backend for authenticated persistence

## Project structure (high level)

- `app/` — Next.js routes and React components for pages
- `public/` — static assets
- `src/services/` — client-side service modules (content, timeline, album, token helpers)
- `src/components/` — presentational components (navbar, footer, etc.)

## Local development

1. Install dependencies

```bash
cd frontend
npm install
```

2. Create `.env` if needed and set environment variables used by the frontend (e.g., Firebase config). Example:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_API_BASE_URL=your_api_url
```

3. Run development server

```bash
npm run dev
```

## Notes

- The frontend currently includes local persistence helpers in `src/services/contentservice.tsx` that use `localStorage`.
- To enable server persistence, ensure the backend is running and the service layer calls protected endpoints with a Firebase ID token.
- Do not commit any Firebase secret keys or private config files to git.

If you want, I can also add a combined project README at the repository root that describes both frontend and backend setup and run steps.
