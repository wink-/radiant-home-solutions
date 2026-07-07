# Radiant Home Solutions Agent Instructions

## Project Shape

- Hugo static site using the Ananke theme.
- Content lives in `content/`; custom templates live in `layouts/`.
- Deployment settings are in `netlify.toml` and publish `public/`.

## Commands

- Preview: `hugo server -D`.
- Build: `hugo --gc --minify`.
- Lightweight validation: `git diff --check`.
- Inspect state: `git status --short --branch`.

## Guardrails

- Do not overwrite README content; update only the marked `PROJECT-DOCS` block if needed.
- Do not edit generated `public/` output unless explicitly requested.
- Preserve Hugo frontmatter style used by existing content files.

## Validation

- Prefer `hugo --gc --minify` when Hugo is available.
- If Hugo is unavailable, run `git diff --check` and document that build validation was skipped.

## Docs

- Start with `docs/index.md` for the OKF documentation map.
- Update `docs/status.md` and `docs/log.md` when task state changes.
- Add non-obvious discoveries to `docs/notes.md`.
