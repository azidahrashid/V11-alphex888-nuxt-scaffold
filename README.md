# ALPHEX888 Nuxt Frontend Recreation

This is a GitHub-ready Nuxt 3 frontend recreation of the public ALPHABET / alphex888 landing page structure. It focuses on matching the visible dark-gold layout, Korean navigation, homepage cards, category pages, modal interactions, and responsive behavior.

This is not a backend clone. It does not include real gambling, betting, wallet, payment, provider API, session, account, LiveChat, token, cookie, or private integration logic.

## What is included

- Nuxt 3 project with `srcDir: app/`
- Rebuilt header with desktop dropdown navigation and mobile menu
- Korean navigation routes mapped to Nuxt pages
- Homepage with five primary original-style visual cards:
  - LIVE SPORTS
  - LIVE CASINO
  - MINI GAMES
  - SLOT GAMES
  - PROMOTIONS
- Login and join/register modal interactions
- Basic frontend form validation
- Category/menu cards with valid page routing
- Mini-games section with demo-only play buttons
- Catch-all route layout for valid-looking subpages
- Local SVG assets in `public/assets/alphex/`
- No broken hotlinked image dependency
- Static-deployment-friendly configuration for GitHub Pages

## Install and run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

For static output, use:

```bash
npm run generate
```

The generated static site will be created in `.output/public`.

## GitHub Pages note

For a GitHub Pages project site, set the base URL to your repository name before generating:

```bash
NUXT_APP_BASE_URL=/your-repo-name/ npm run generate
```

For a user/organization site deployed at the domain root, keep the default `/` base URL.

## Main structure

```text
app/
  app.vue
  assets/css/extracted.css
  components/
    AuthModal.vue
    GameCard.vue
    GameGrid.vue
    HomeLanding.vue
    LanguageSwitcher.vue
    NavigationMenu.vue
    SiteFooter.vue
    SiteHeader.vue
  composables/useAuthModal.ts
  data/site.ts
  pages/index.vue
  pages/[...slug].vue
public/assets/alphex/
  local SVG visual assets
nuxt.config.ts
package.json
```

The root `app.vue` file is kept only as a compatibility file. The active entry is `app/app.vue` because `nuxt.config.ts` uses `srcDir: 'app/'`.

## Interaction behavior

Login and register are frontend-only demo modals. The forms validate basic fields and show success messages locally. They do not create accounts, sessions, wallets, payments, game access, betting tickets, or backend requests.

Game and category play buttons open the login modal. Navigation links use Nuxt routes and render safe static layouts instead of broken or blank pages.

## Asset strategy

The original website image references were not embedded as remote hotlinks. The project uses local SVG replacements designed to match the same dark, gold, casino/sports promotional art direction. Replace these with approved owned assets if exact brand assets are available.

## Limitations

This is a visual/frontend recreation, not a byte-for-byte runtime clone. Exact proprietary images, private JavaScript, protected APIs, session behavior, and backend flows are intentionally excluded. Some styling is recreated from the publicly visible structure and visual direction rather than copied from blocked runtime assets.
