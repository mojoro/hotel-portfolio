# Hotel Online Marketing — U.S. Landing Page

A polished, conversion-focused single-page site selling freelance direct-booking services to independent U.S. hotels and small hotel groups.

It is the U.S.-market counterpart to the existing brand site at [hotel-online-marketing.com](https://hotel-online-marketing.com/) and is built to convert hoteliers into "Free hotel audit" calls.

## Stack

- **Vite 6** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS v4** via `@tailwindcss/vite` (CSS-first theme tokens)
- **Inter** (UI) + **Fraunces** (display serif) self-hosted via CDN
- No UI/component library — every section is hand-built React + Tailwind
- ESLint (typescript-eslint + react hooks/refresh)

Plain static output. Hostable anywhere — Vercel, Netlify, Cloudflare Pages, S3, or any static server.

## Scripts

```bash
pnpm install        # or npm install / yarn / bun install
pnpm dev            # local dev server (http://localhost:5173)
pnpm build          # type-check + production build to ./dist
pnpm preview        # serve the production build locally
pnpm typecheck      # tsc --noEmit
pnpm lint           # eslint
```

## Structure

```
src/
  App.tsx                   # page composition
  main.tsx                  # entry
  styles/index.css          # Tailwind + theme tokens + base styles
  components/
    Nav.tsx                 # sticky nav + mobile menu
    Wordmark.tsx            # logo / wordmark
    Hero.tsx                # outcome promise + booking-confirmation visual
    LogoStrip.tsx           # European portfolio strip
    CommissionMath.tsx      # interactive commission calculator
    DirectVsOTA.tsx         # OTA vs direct comparison
    Services.tsx            # six service cards
    Process.tsx             # 14-day timeline
    Portfolio.tsx           # live EU hotel sites
    BestFit.tsx             # qualification: good fit / probably not
    Approach.tsx            # philosophy + founder pull quote
    FAQ.tsx                 # accessible accordion
    FinalCTA.tsx            # audit request form (mailto fallback)
    Footer.tsx              # links, social, legal
public/
  favicon.svg
  og-image.svg              # Open Graph / Twitter card image
index.html                  # SEO/OG meta tags
```

## Content assumptions & caveats

- **No fabricated metrics.** Numbers in `CommissionMath.tsx` are computed from
  user-input sliders against industry-typical **15–25%** OTA commission bands.
  We never claim specific client ROI. The "we typically help you recover" range
  is positioned as a conservative directional estimate, not a contractual
  promise — the footer carries the same disclaimer.
- **Portfolio properties** are pulled from the user-supplied list of real EU
  hotel sites (Michel-hotels, Franziskushöhe, etc.). Cards link to the live
  sites. The illustrations are abstract SVG art, not photos of the properties,
  so there's no risk of misusing property imagery before we have proper assets.
- **U.S. localization.** Strings use U.S. English ("Legal" / "Privacy" rather
  than "Imprint"), reference *AI search platforms like ChatGPT, Gemini, and
  Perplexity*, dollar formatting, U.S. hours phrasing, and a "Schedule a Call"
  CTA. Property descriptions still reflect their European locations.
- **Form.** The audit form is honest about its transport. By default (static
  hosting, no env config) it opens the user's email client pre-populated for
  `hello@hotel-online-marketing.com` — the UI explicitly says "opens your
  email client" and never claims the message was sent. A "Copy email address"
  fallback is offered alongside a plain `mailto:` link.

  To wire a real intake endpoint without touching code, set
  `VITE_FORM_ENDPOINT=https://your-endpoint` at build time (e.g. Formspree,
  Resend, a Vercel Function, or your own API). The form will POST the fields
  as JSON and show real success/error states; the mailto fallback is preserved
  for anyone whose request fails. No secrets are bundled.
- **OG/Twitter card** is rendered as SVG (`public/og-image.svg`) and the meta
  tags use absolute URLs (`https://hotel-online-marketing.com/us/og-image.svg`)
  so social previews work when the page is shared. **Recommended before final
  launch:** flatten the SVG to a 1200×630 PNG (Twitter and several enterprise
  email clients don't render SVG OG images) and update the meta tags.
- **Email address** `hello@hotel-online-marketing.com` is used as the
  contact target. Replace if the team prefers a different mailbox before launch.
- **Mews / SiteMinder / Cloudbeds** mentions are based on the client portfolio
  (the EU sites use Mews booking-engine scripts) and the U.S. market reality
  — verified PMS integrations should still be confirmed before signing.

## Deployment notes

- Static build: `dist/` is fully static. No SSR / functions required.
- For Vercel: drop in `vercel.ts` (or none — Vite is detected automatically).
- **Canonical URL** is set intentionally to `https://hotel-online-marketing.com/us`,
  namespacing this U.S. landing page alongside the existing brand site at the
  root domain. If the U.S. page later gets a dedicated apex (e.g.
  `us.hotel-online-marketing.com`), update the `<link rel="canonical">` and
  the absolute OG/Twitter image URLs in `index.html` together.
- **Form endpoint:** set `VITE_FORM_ENDPOINT` in your build environment to a
  POST-accepting URL (Formspree, Resend, Vercel Function) to enable the
  endpoint path; leave unset for the mailto fallback.
