# Radiant Home Solutions Agent Instructions

## Project Shape

- **Astro 7 site (new):** pages in `src/pages/`, content in `src/content/`, design in `src/styles/global.css`, business facts in `src/site.config.ts`. Built with `npm run build` to `dist/`.
- **Hugo site (legacy, frozen):** content in `content/`, Ananke theme, `hugo.toml`. Kept untouched during the Astro rebuild.
- Deployment settings are in `netlify.toml` (still Hugo: publishes `public/`; repoint to `npm run build` + `dist/` at cutover).

## Commands

- Preview (Astro): `npm run dev`.
- Build (Astro): `npm run build` — must pass cleanly; this is the validation source of truth.
- Preview (Hugo, legacy): `hugo server -D`.
- Build (Hugo, legacy): `hugo --gc --minify`.
- Lightweight validation: `git diff --check`.
- Inspect state: `git status --short --branch`.

## Guardrails

- Do not overwrite README content; update only the marked `PROJECT-DOCS` block if needed.
- Do not edit generated output: `public/` (Hugo) or `dist/` (Astro).
- Do not modify Hugo files (`hugo.toml`, `content/`, `layouts/`, `themes/`, `archetypes/`) for Astro work; the Astro content copies live under `src/content/`.
- Change business facts (phone, email, towns, hours) only in `src/site.config.ts` — they must match what exists in the Hugo source; never invent contact details.
- Preserve Hugo frontmatter style used by existing `content/` files (TOML `+++`).

## Validation

- Run `npm run build` and require zero warnings/errors before committing Astro changes.
- If Hugo is needed, prefer `hugo --gc --minify` when Hugo is available; otherwise run `git diff --check` and document that build validation was skipped.

## Docs

- Start with `docs/index.md` for the OKF documentation map.
- Update `docs/status.md` and `docs/log.md` when task state changes.
- Add non-obvious discoveries to `docs/notes.md`.
