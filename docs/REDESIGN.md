# Digi-DZ site — audit & redesign plan

The site is the link sent with client pitches. Its only job is to make a business owner
(showroom, clinic, SME) understand in under a minute **what Digi-DZ builds, see proof, and
start a conversation**. The previous version failed at all three.

## 1. Audit

### Brand, content & credibility (critical)
| # | Issue | Why it hurts |
|---|-------|--------------|
| C1 | The "product demo" video (`hero_video.mp4`) is Google's Antigravity promo — it literally shows the **Google Antigravity** logo and Google's IDE. `an-ai-ide-core.mp4` is also Google footage. | A prospect watching the "AutoDMS demo" sees another company's product. Destroys trust; copyright exposure. |
| C2 | Whole design is a clone of antigravity.google: "Experience liftoff" headline, "Ready for liftoff?", Google's 4 brand colours on the logo & particles, Google Sans Flex font, code comments naming the source, page `<title>` = "Google Antigravity Style Management Systems". | Reads as a template, not a studio with its own identity. |
| C3 | No actual portfolio: no case studies, no screenshots of the real products, no description of the problem solved, no process, no FAQ. | Nothing to evaluate — the client can't tell what they'd get. |
| C4 | Fabricated metrics presented as live data ("42 Vehicles In Stock", "4,800,000 DZD Held", "94.2% Attendance", "cut no-shows by 75%", "LIVE CORE // ALGIERS"). | Unverifiable claims; a sharp client will notice. |
| C5 | Copy aimed at the wrong audience ("Built for developers & teams", "runtime://algeria-enterprise", "DMS // AUTO", "AUTOMATION // API"). | Business owners don't speak this jargon. |
| C6 | The value proposition is vague ("custom management systems" + buzzwords) — the hero never says *who* it's for or *what* it does. | |

### UI / UX
| # | Issue |
|---|-------|
| U1 | ~600px of empty space between hero and the video box (`min-h-[900px]` hero + `py-32` + scroll-driven scale/offset). |
| U2 | Body copy is mostly `text-xs` (12px) and `#80868b` grey on white (≈3.5:1) — fails WCAG AA, hard to read on phones. |
| U3 | 7+ competing WhatsApp CTAs with different labels ("WhatsApp Desk", "Dispatch Request", "Connect on WhatsApp for this workflow"…). 🚀 emoji in nav. "Schedule Demo" button uses a *Download* icon. |
| U4 | Content hidden behind tabs/toggles (showroom/clinic, 4 features, 4 roles) — a pitch reader skims, they don't click. Role cards are one sentence each. |
| U5 | Infinite marquee of jargon pills, confetti particle canvas, custom cursor — decorative noise, no information, GPU/battery drain, ignores `prefers-reduced-motion`. |
| U6 | No mobile navigation (nav is `hidden md:flex`, no menu button). Floating pill overlaps content on mobile. |
| U7 | Contact form: no labels (placeholders only), no validation, no message field, no email fallback (the old version had one). |
| U8 | Footer "Platforms" items look like links but aren't; no way to send a prospect to a single product page. |

### Code & i18n
| # | Issue |
|---|-------|
| K1 | **Translations are dead**: every string is hard-coded English in `page.tsx`; `messages/*.json` are not used (`t` is never called). `/fr` and `/ar` show English; `/ar` flips to RTL with English text. |
| K2 | Entire page is one 790-line `"use client"` component — everything ships as client JS, nothing is composable. |
| K3 | `export const dynamic = "force-dynamic"` on the root layout (added by `force_dynamic.py`) — a static marketing page is server-rendered on every request on a 1GB VM. No `generateStaticParams` / `setRequestLocale`. |
| K4 | `src/middleware.ts` — deprecated in Next 16 (renamed `proxy.ts`). Matcher also skips locale-less paths like `/work`. |
| K5 | Unused imports (Car, Stethoscope, Play, Pause…), unused `TypedHeader`, unused message keys, unused `public/*.svg`, `useState` for `isPlaying` never used. |
| K6 | Language switcher is an uncontrolled `<select>` whose `defaultValue` doesn't update on navigation. |
| K7 | No metadata per locale, no `hreflang`, no OG image (link previews on WhatsApp — the main distribution channel — show nothing), no sitemap/robots, default Next favicon. |
| K8 | Phone number / WhatsApp URL duplicated 8+ times. |
| K9 | Repo hygiene: one-off codemod scripts (`add_desktop.py`, `force_dynamic.py`), probe scripts, verification screenshots in the root. `.next/` is tracked despite being in `.gitignore` (deploy workaround). |

## 2. Approach

1. **Remove what's not ours** — Google videos, clone styling, particles, cursor, marquee, fake telemetry.
2. **New identity** — "Digi-DZ" wordmark with a "D." mark; warm paper background, ink text, a single emerald accent (#0D7354); Geist for Latin and IBM Plex Sans Arabic for Arabic via `next/font`.
3. **Proof instead of claims** — real-looking product UIs built in code (AutoDMS stock screen, ClinicOS waiting room + prescription, WhatsApp phone), clearly captioned *"Interface preview · sample data"*. Replace with real screenshots when available.
4. **Pitch-first information architecture**
   - Home: Hero → Work (AutoDMS, ClinicOS, "your project") → Services → Made for Algeria → Process → FAQ → Contact.
   - **Case study pages** `/{locale}/work/autodms` and `/{locale}/work/clinicos` — a single link to send to a showroom or a clinic.
   - One WhatsApp vocabulary; one primary CTA per section.
5. **Real i18n** — every string in `messages/{fr,en,ar}.json`, typed via `AppConfig`; logical CSS properties for RTL; French as fallback locale (Algerian business clients), browser language still detected.
6. **Server-first** — sections are Server Components; only header, form, FAB and reveal wrapper are client. Static generation for all locales × pages.
7. **SEO / sharing** — per-locale metadata + `hreflang`, generated OG image, `sitemap.ts`, `robots.ts`, SVG icon.
8. **Accessibility** — 16px+ body text, AA contrast, labelled form, skip link, keyboard-accessible menu, `<details>` FAQ, reduced-motion respected.

## 3. Project structure

```
src/
├─ app/
│  ├─ [locale]/
│  │  ├─ layout.tsx               html/body, fonts, dir, provider, metadata, static params
│  │  ├─ page.tsx                 home — composes sections
│  │  ├─ not-found.tsx
│  │  ├─ opengraph-image.tsx      generated share card
│  │  ├─ [...rest]/page.tsx       unknown paths → localized 404
│  │  └─ work/[slug]/page.tsx     case study (autodms, clinicos)
│  ├─ globals.css                 Tailwind v4 theme tokens
│  ├─ icon.svg
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ layout/    SiteHeader, SiteFooter, LanguageSwitcher, WhatsAppFab, Logo
│  ├─ sections/  Hero, Work, Services, MadeForAlgeria, Process, Faq, Contact, ContactForm, CtaBand
│  ├─ mockups/   WindowFrame, AutoDmsMockup, ClinicOsMockup, PhoneMockup
│  └─ ui/        Container, SectionHeading, ButtonLink, Reveal
├─ config/site.ts                 contact details + whatsappUrl()
├─ content/projects.ts            project registry (slug, icon, mockup, keys)
├─ i18n/         routing.ts, navigation.ts, request.ts
├─ global.d.ts                    typed messages & locales for next-intl
└─ proxy.ts                       locale negotiation (Next 16)
messages/ fr.json en.json ar.json
scripts/fix_paths.py              deploy helper (kept, moved)
```

## 4. To do by the owner
- Replace mockups with real screenshots / a short screen recording of AutoDMS & ClinicOS.
- Review FAQ answers and process steps — they describe commitments (timelines, support, data ownership).
- Add 1–2 client logos or a short testimonial once available.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
