# Digi-DZ — portfolio site

The site sent with client pitches: who we are, what we've built (AutoDMS, ClinicOS), how we work,
and a WhatsApp-first contact form. Next.js 16 (App Router) · next-intl (fr / en / ar) · Tailwind v4.

See [`docs/REDESIGN.md`](docs/REDESIGN.md) for the audit, design decisions and project structure.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /fr, /en or /ar from the browser language
npm run lint
npm run build
```

## Where things live

| What | Where |
|------|-------|
| All copy (3 languages) | `messages/{fr,en,ar}.json` — `en.json` defines the typed key set |
| Phone, WhatsApp, email, site URL | `src/config/site.ts` |
| Project list (case studies) | `src/content/projects.ts` + `Projects.<slug>` in messages |
| Home page sections | `src/components/sections/*` |
| Product UI previews | `src/components/mockups/*` (replace with real screenshots when available) |

### Adding a case study
1. Add the slug to `projectSlugs` and an entry in `projects` (`src/content/projects.ts`).
2. Add `Projects.<slug>` to all three message files with the same keys as the existing projects.
3. The home card, `/[locale]/work/<slug>` page, footer link and sitemap entry are generated from that.

### Links worth sending to prospects
- Showroom: `/fr/work/autodms`
- Clinic: `/fr/work/clinicos`

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://digi-dz.store`) so link previews and the sitemap use the right domain.

## Deploy (1 GB VM)

The VM is too small to build, so `.next/` is built locally and committed (`output: "standalone"`).
After `npm run build` on Windows, run `python scripts/fix_paths.py` to rewrite absolute paths for the VM.
