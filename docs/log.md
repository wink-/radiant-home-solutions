# Log

## 2026-10-23

- Rebuilt the site as Astro 7 on `feature/astro-rebuild` (additive; Hugo files untouched).
- Scaffolded Astro with content layer collections (`services`, `pages`) and `src/site.config.ts` as the single source of business facts.
- Migrated Hugo content to YAML frontmatter: about, small jobs, areas served; derived 8 service pages from the Hugo services index.
- Built conversion-focused pages: home, services index + 8 detail pages, small jobs, service areas, about, phone-first contact, 404; plain-CSS design system with sticky mobile call bar.
- Added truthful LocalBusiness JSON-LD (name, url, description, telephone, email, areaServed) and a `/areas-served/` → `/service-areas/` redirect.
- Pointed Astro `publicDir` at `static/` to avoid colliding with the tracked Hugo `public/` output.
- `npm run build` passes cleanly (15 pages, no warnings). Updated architecture, setup, status, and notes docs.

## 2026-07-07

- Refined OKF documentation format and status resume details.

## 2026-07-06

- Added minimal README with project overview and marked docs links.
- Added repo-specific agent instructions.
- Added OKF documentation scaffold for the Hugo site.
- 2026-10-23 — Documented intentional standalone status: not a Streetcats publication destination, not a content-platform theme.
