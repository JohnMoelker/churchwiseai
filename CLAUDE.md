# CLAUDE.md — ChurchWiseAI Web App

This file provides guidance to Claude Code when working in `C:\dev\churchwiseai-web\`.

## Commands

```bash
pnpm install       # Install dependencies
pnpm dev           # Dev server at http://localhost:3002
pnpm build         # Production build
pnpm start         # Production server (port 3002)
pnpm lint          # ESLint
```

## Architecture

**ChurchWiseAI Web** — the official marketing + platform site for ChurchWiseAI.com. Next.js 16 App Router, TypeScript strict, Tailwind CSS 4, pnpm.

This app is also the **template for all future WiseAI verticals** (FuneralWiseAI, ShopWiseAI, etc.). Fork + swap `src/lib/brand.ts` and `src/lib/pricing.ts` to create a new vertical.

## Key Directories

- `src/app/` — App Router pages (server components by default)
- `src/components/` — Shared UI
  - `layout/` — Header (mega-dropdown), Footer
  - `shared/` — ProductCard, PricingCard, FeatureBlock, HeroSection
- `src/lib/brand.ts` — **Brand config** (name, colors, tagline, ecosystem links)
- `src/lib/pricing.ts` — **Pricing tiers** (all products, features, CTAs)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage (hero, products, trust, CTA) |
| `/voice` | Voice Agent product page |
| `/chatbot` | Chatbot product page |
| `/pricing` | Unified pricing (all tiers) |
| `/care` | Care Messaging feature |
| `/demo` | Live demo + book-a-call |
| `/integrations` | Integration partners grid |
| `/integrations/[slug]` | Individual integration detail |
| `/compare/[slug]` | Competitor comparison |
| `/ai-for/[denomination]` | Denomination SEO pages |
| `/apps` | App marketplace (Coming Soon cards) |
| `/contact` | Contact + Cal.com embed |
| `/blog` | Blog index |
| `/about` | Company about page |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/admin/[token]` | Dashboard shell (UI only, no auth yet) |

## Design System

- **Colors**: Sacred Gold `#D4AF37`, Navy `#1B365D`, Cream `#FEFCF8`, stone scale
- **Fonts**: Playfair Display (headings, `font-serif`) + Inter (body, `font-sans`)
- **CSS classes**: `.btn-gold`, `.btn-navy`, `.card-hover`, `.card-accent`
- **Hero pattern**: dark `bg-gradient-to-b from-stone-900 to-stone-800` with `radial-gradient` gold glow
- **Sections**: alternate cream bg / `bg-stone-50`
- **Cards**: `bg-white rounded-xl border border-stone-200 shadow-sm`
- **Card hover**: `card-hover` class (translateY -4px + gold glow shadow)
- **Card accent bar**: `card-accent::before` = 3px gradient top bar on hover

## Vertical Template Pattern

To create a new WiseAI vertical:
1. Fork this repo
2. Replace `src/lib/brand.ts` with new brand (name, colors, tagline, contact)
3. Replace `src/lib/pricing.ts` with new pricing tiers
4. Swap logo/favicon
5. Update copy in individual pages

## What This App Is NOT (yet)

- No Supabase queries (UI only)
- No Stripe checkout
- No auth (admin dashboard is hardcoded)
- No voice agent API calls
- No chatbot backend

Backend wiring happens in a later phase.

## Port

Runs on port 3002. ITW=3000, PewSearch=3001, ChurchWiseAI=3002.

## Parent CLAUDE.md

See `C:\dev\CLAUDE.md` for cross-project rules, shared infrastructure, and brand architecture.
