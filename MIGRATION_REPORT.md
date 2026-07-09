# Migration / Rebuild Report

## Source target

- Public reference: `https://www.alphex888.com`

## Runtime structure observed

Crawler-visible homepage content exposed a flat Korean navigation list and a five-block homepage sequence:

1. LIVE SPORTS — 라이브 스포츠의 미래 — 본질적인 가치에 집중합니다.
2. LIVE CASINO — 프리미엄 프라이빗 클럽 — 라이브 카지노를 경험하는 가장 완벽한 공간으로 당신을 초대합니다.
3. MINI GAMES — 가볍고 심플한 게임 플레이 — 가장 트렌디한 경험을 선사합니다.
4. SLOT GAMES — 잭팟을 향한 위대한 여정 — 진정한 슬롯 매니아를 위해 특별한 경험을 제공합니다.
5. PROMOTIONS — 이벤트 — 알파벳 특권과 프리미엄 혜택.

The original remote image files returned 403 Forbidden during extraction, so local replacement assets were created instead of hotlinking broken assets.

## Files changed for closer layout

- `app/components/HomeLanding.vue`
- `app/components/SiteHeader.vue`
- `app/components/NavigationMenu.vue`
- `app/pages/index.vue`
- `app/data/site.ts`
- `app/assets/css/extracted.css`
- `public/assets/alphex/5262-mobilelivesports.svg`
- `public/assets/alphex/5262-mobilelivecasino.svg`
- `public/assets/alphex/5262-mobileminigames.svg`
- `public/assets/alphex/5262-mobileslots.svg`
- `public/assets/alphex/5262-mobilepromos.svg`

## Behavior retained

- Login modal opens from login buttons and PLAY NOW buttons.
- Register modal opens from JOIN buttons.
- Frontend validation is implemented.
- Routes render real placeholder layouts instead of broken pages.
- No gambling/payment/wallet/backend functionality is implemented.
