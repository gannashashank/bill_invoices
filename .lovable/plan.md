# Invoice IQ Pro — Landing Page

A single-page dark marketing site for an AI invoice automation product, built to spec.

## Design System (src/styles.css)
- Background `#0D1117`, foreground white, muted gray for body text
- Primary electric blue `#2563EB`, accent orange `#F97316`
- Gradient token `--gradient-cta: linear-gradient(90deg, #2563EB, #F97316)`
- Card surface slightly lighter than background with subtle border
- Focus ring in blue with glow shadow
- Update `:root` to the dark palette (no light mode), keep `@theme inline` mappings
- Add `fade-in-up` keyframe + utility for scroll-reveal

## Route
- Replace `src/routes/index.tsx` placeholder with the full landing page
- Update `head()` metadata: title "Invoice IQ Pro — AI Invoice Automation for SAP", matching description, og/twitter tags

## Components (under `src/components/landing/`)
1. `Navbar.tsx` — sticky, lightning bolt (lucide `Zap`) + wordmark, anchor links to `#how`, `#features`, `#results`, `#faq`, gradient demo button
2. `Hero.tsx` — label, h1, italic subhead, description, two CTAs, 3-stat row
3. `HowItWorks.tsx` — 3 numbered step cards with lucide icons (`Upload`, `Sparkles`, `Database`)
4. `Features.tsx` — 6-card grid (2x3 desktop, 1col mobile) with icons
5. `Results.tsx` — 3 large metric cards + footnote
6. `FAQ.tsx` — shadcn `Accordion` with 5 items
7. `ContactForm.tsx` — controlled form, fields per spec, gradient submit, blue focus glow; on submit show toast (no backend wired)
8. `Footer.tsx` — logo, tagline, link row, copyright
9. `GradientButton.tsx` — small wrapper for the blue→orange CTA

Use `useInView` via simple IntersectionObserver hook `src/hooks/use-in-view.ts` to trigger fade-in-up on sections.

## Smooth scroll
- Add `html { scroll-behavior: smooth; }` in styles.css
- Anchor IDs on each section

## Accessibility & responsiveness
- Semantic `<section>`, single `<h1>` in Hero
- Mobile nav: collapse links behind a `Menu` icon (Sheet) on `<md`
- Tailwind responsive utilities throughout

## Out of scope
- No backend / email sending for the form (toast-only confirmation)
- No routing for additional pages
