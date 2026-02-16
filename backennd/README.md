# Backend — Valentine's

This folder contains the backend server for the "Valentine's" project. It is built with Node.js and Express, uses Firebase Admin SDK for authentication verification, and stores user content in MongoDB.

## High-level flow

- Client authenticates users with Firebase Authentication (client-side SDK).
- After sign-in, the client obtains an ID token and includes it in requests using the header `Authorization: Bearer <ID_TOKEN>`.
- Backend middleware (`configs/middlewareConfig.js`) verifies the token with the Firebase Admin SDK (`configs/firebaseAdmin.js`).
- If the user does not yet exist in MongoDB, the middleware creates a `User` document keyed by `firebaseUid`.
- Authenticated requests proceed to route handlers which read/update user data in MongoDB (story, timeline, album, etc.).

## Tech stack

- Node.js + Express
- Firebase Admin SDK (server-side token verification)
- MongoDB (Mongoose)
- CORS middleware
- dotenv for environment variables

## Setup

1. Install dependencies

```bash
cd backennd
npm install
```

2. Create a `.env` file in the `backennd` folder with at least:

```
MONGO_URI=your_mongo_connection_string
PORT=your_port
```

3. Place your Firebase service account JSON file in the `backennd` folder as `serviceAccountKey.json`.

## Run (development)

```bash
npm run dev
# or
node server.js
```

## Important endpoints (examples)

- `GET /api/secret` — protected route that demonstrates token verification and user lookup (requires `Authorization` header).

The project may also expose REST endpoints for managing user `story`, `timeline`, and `album` under corresponding routes.

## Notes & security

- Never commit `serviceAccountKey.json` or `.env` to source control.
- Restrict the Firebase service account permissions to the minimum necessary.

## Troubleshooting

- MongoDB connection errors: double-check `MONGO_URI` and network access (firewall/Atlas IP whitelist).
- Firebase token verification issues: ensure `serviceAccountKey.json` belongs to the same Firebase project used by your client app.

If you want, I can also add a project-level `README.md` that documents frontend and backend together.
