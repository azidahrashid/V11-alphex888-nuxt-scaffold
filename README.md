# ALPHABET / alphex888 Nuxt Frontend Recreation

This project is a static Nuxt 3 frontend recreation for development/testing. It does not implement real gambling, betting, wallet, payment, account, or casino-provider backend functions.

## What was rebuilt in this version

- Homepage changed to a closer original-style five-section landing layout:
  - LIVE SPORTS
  - LIVE CASINO
  - MINI GAMES
  - SLOT GAMES
  - PROMOTIONS
- Removed the previous extra homepage category/grid sections from `/` so the homepage follows the live page sequence more closely.
- Reworked header into a flat Korean navigation row matching the public page structure.
- Added fixed dark translucent header, right-side section dots, full-screen hero panels, gold CTA buttons, responsive stacked mobile layout, and footer/legal block.
- Added local replacement visuals using original-style names under `public/assets/alphex/`.
- Kept login/register as frontend-only demo modals with basic validation.
- Kept all menu links mapped to valid Nuxt routes so clicks do not produce empty/broken pages.
- No external hotlinked assets are required.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Nuxt, usually `http://localhost:3000/`.

For port 3001:

```bash
npm run dev:3001
```

## Build

```bash
npm run build
```

## Static generation / GitHub Pages

```bash
npm run generate
```

For a GitHub Pages repository subpath, set `NUXT_APP_BASE_URL` before generating, for example:

```bash
NUXT_APP_BASE_URL=/your-repo-name/ npm run generate
```

On Windows PowerShell:

```powershell
$env:NUXT_APP_BASE_URL="/your-repo-name/"; npm run generate
```

## Important limitations

The public website's original image files were blocked during extraction, so the project uses local replacement SVG assets designed to match the dark-gold visual direction. Because of that, this is a close frontend recreation, not a guaranteed pixel-identical clone.

No private keys, credentials, backend integrations, payment logic, wallet logic, betting logic, odds engines, casino providers, or real authentication sessions are included.
