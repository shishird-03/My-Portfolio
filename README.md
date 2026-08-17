# 3D Portfolio (Vite + React + Three.js)

This is a static Vite app and is compatible with Vercel deployment.

## Local setup

1. Install dependencies:
   `npm install`
2. Create your env file from the example:
   `copy .env.example .env`
3. Fill your EmailJS values in `.env`.
4. Start development server:
   `npm run dev`

## Environment variables

The contact form uses:

- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

Add the same keys in Vercel:
Project Settings -> Environment Variables.

## Build check

Run:

`npm run build`

Current status: production build succeeds.

## Deploy on Vercel

1. Push this project to GitHub (without `node_modules` and without secrets in `.env`).
2. In Vercel, click **Add New Project** and import the repository.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variables from the list above.
7. Deploy.

`vercel.json` includes SPA rewrite support so direct routes like `/about` and `/projects` work in production.

## Notes

- If your `.env` credentials were ever committed publicly, rotate your EmailJS keys.
- `npm run lint` script exists, but there is currently no ESLint config file in this project.
