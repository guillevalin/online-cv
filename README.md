# Guillermo Valin — guillermovalin.com

Personal website for Guillermo Valin. Static, bilingual (EN/ES), deployed to Cloudflare Pages.

## Stack

- [Astro](https://astro.build) — static output, zero client JS by default
- Inter + Fraunces (via Google Fonts)
- Plain CSS with design tokens (`src/styles/global.css`)

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build

```bash
npm run build     # → ./dist
npm run preview
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output dir: `dist`
- Custom domains configured in `wrangler.toml`

## Structure

```
src/
├── layouts/Base.astro          # html/head, meta, OG, JSON-LD
├── components/                 # Nav, Hero, Now, Experience, Skills, Education, Footer
├── i18n/content.ts             # EN + ES copy
├── pages/index.astro           # EN (/)
└── pages/es/index.astro        # ES (/es/)
```

## i18n

Two statically generated routes: `/` (EN) and `/es/` (ES). Toggle in the nav is a plain link. Add languages by extending `src/i18n/content.ts` and adding a page under `src/pages/`.
