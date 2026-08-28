# The Lazy Bear Club — Studio Website

Production-ready studio landing page for **The Lazy Bear Club**, an indie Android app & game studio.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scroll. Deploy-ready for **Vercel**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If images look stale after you replace files:

```bash
npm run dev:fresh
```

Then hard-refresh the browser (`Cmd+Shift+R`).

## Add a new app

1. Append one object to the `apps` array in `lib/apps.ts`
2. Add assets under `public/apps/{slug}/`

```
public/apps/{slug}/
├── icon.png              # 512×512 squircle-friendly
├── screenshot-1.png      # 16:9 or phone captures
├── screenshot-2.png
└── screenshot-3.png
```

3. Set `playStoreUrl` only when the listing is live
4. Privacy stub is generated automatically at `/privacy/{slug}`

Regenerate missing colored placeholders:

```bash
npm run placeholders
```

Existing files are not overwritten.

## Project structure

```
app/                  Landing, /privacy, /terms, /apps/[slug]
components/layout/    Header, Footer, SmoothScroll, LegalPageLayout, JsonLd
components/ui/        Button, AppCard, Logo, SectionHeading, AnimatedCounter
components/sections/  StudioHero, AppsGrid, AppSpotlight, About, Contact, FinalCTA
lib/apps.ts           Single source of truth for the catalog
lib/animations.ts     fadeUp, staggerContainer, slideInLeft/Right, viewportOnce
public/apps/          Icons and screenshots per slug
```

## Deploy (Vercel)

```bash
npm run build
```

Connect the repo to Vercel, or:

```bash
npx vercel
```

## Legal

- Studio policy: `/privacy`
- Website terms: `/terms` (India / Bangalore)
- Per-app stubs: `/privacy/{slug}`
- Footer copyright and Google Play trademark notice are included
