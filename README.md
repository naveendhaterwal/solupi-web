# SolUPI website

The landing page for SolUPI. It follows the layout and motion of the Framer template "Finetech AI" (mapping in `../docs/research/fintechai.framer.website/PAGE_TOPOLOGY.md`) and uses SolUPI's own brand.

Stack: Next.js 16 (static export) · Tailwind v4 · GSAP + ScrollTrigger · lucide-react.

```bash
npm run dev            # http://localhost:3000
npm run build          # static site in out/, deploy that folder anywhere (Vercel, Netlify, Pages)
NEXT_PUBLIC_SITE_URL=https://your.domain npm run build   # absolute Open Graph URLs
```

## Where things live

| What | Where |
|---|---|
| Tokens (a mirror of `frontend/src/theme/`) | `src/app/globals.css` `@theme` |
| Links, proof values, team | `src/lib/site.ts` (an empty value renders as an `[ADD …]` placeholder) |
| Sections | `src/components/sections/*` (in page order in `src/app/page.tsx`) |
| Primitives (Badge, ButtonLink, Phone, ArtPanel…) | `src/components/ui.tsx` |
| Motion (`data-float`, `data-float-group`, `data-parallax`, `data-words`, `data-rise`) | `src/components/Motion.tsx` |
| Real app screenshots / app art / brand | `public/screens`, `public/art`, `public/brand` |

## Rules

- **Brand comes from the app.** Fonts are Inter + Newsreader, and colours are the forest/sage tokens. Don't add template colours, photos or copy.
- **Motion animates transform and opacity only, and switches off under `prefers-reduced-motion`.** Content is visible without JS.
- **Don't invent anything.** No users, metrics, testimonials or partners. The Proof section only shows numbers from the repo's tests.

## Before publishing

- [ ] `src/lib/site.ts`: `links.app`, `links.github`, `txSignature` + `links.tx`, `demoVideo`, socials, `team`
- [ ] Optional: replace `public/screens/home.webp` and `wallet.webp` with funded-wallet captures (they currently show ₹0)
- [ ] Regenerate `public/og.png` from the new hero (it's still the v1 hero)

The previous static version is in `../website-v1/`.
