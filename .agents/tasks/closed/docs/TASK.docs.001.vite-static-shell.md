---
title: TASK.docs.001.vite-static-shell
epic: EPIC.docs.001.docs-platform
impact: HIGH
effort: HIGH
suggestion: OPEN
owner: codex-1
tags: [docs, vite, site]
depends_on: []
blocks: []
---

## Goal
Create a Vite-based static shell that can host Antora-generated docs and apply shared styling.

## Deliverables
- A Vite app scaffold under a dedicated docs site directory (e.g., `docs/site/`).
- Build pipeline that outputs a static site and bundles Antora artifacts as assets.
- Base path configuration for GitHub Pages (e.g., `/riddim/`).

## Assets
- Vite build output (e.g., `docs/site/dist/`).
- Updates to `ASSETS.md` describing the new docs artifacts.

## Acceptance
- `npm install` in the Vite docs site directory succeeds.
- `npm run build` produces a static site output directory.
- Antora output is reachable from the Vite shell (via asset copy or fetch strategy).

## Recon
- Verified Vite docs shell under `docs/site/` with base `/riddim/` and static copy integration.
- Confirmed `docs/site/dist` and Antora bundle outputs listed in `ASSETS.md`.
- `npm run docs:bundle` produces the Vite shell with Antora assets.

---

## Closure
- Completed: 2026-01-20 19:03 (local)
- Branch: `main`
- Summary:
  - Audited the existing Vite shell and Antora asset bundling for the docs hub.
  - Verified build outputs and base path configuration already in place.
