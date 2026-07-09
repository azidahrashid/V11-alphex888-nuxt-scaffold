# Migration Report

## Source checked

- `https://www.alphex888.com`
- Visible public content included Korean navigation, homepage game sections, language selector images, LiveChat references and a footer notice.

## Rendering classification

The crawler-visible response exposes meaningful page content, navigation labels, homepage sections and image references. The scaffold therefore treats the public landing page as a rendered/public front-end that can be decomposed into Nuxt components.

For full certainty on JavaScript-generated runtime DOM/CSS, run the Playwright extraction script locally:

```bash
TARGET_URL=https://www.alphex888.com npm run migrate:extract
npm run migrate:clean-css
npm run migrate:convert
```

## What was migrated into the scaffold

- Header/navigation
- Language selector placeholder
- Login/join placeholders
- Homepage hero scaffold
- Five main homepage game cards
- Mini-games feature preview
- Footer notice
- Catch-all placeholder pages for public routes

## What was intentionally not migrated

- Login/session backend
- Payment or wallet flows
- Betting execution logic
- Private provider/API calls
- LiveChat account credentials
- Tokens, cookies, API keys or private headers

## Notes

The included CSS is component-friendly recreated CSS plus cleanup-ready pipeline. It does not claim to be a byte-for-byte copy of all runtime styles until the Playwright script is run from a network-enabled local machine.
