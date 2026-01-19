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
- <Fill during implementation: directory structure decisions, base path setup, asset integration approach.>

---

## Closure
- Completed: YYYY-MM-DD HH:MM (local)
- Branch: `<optional>`
- Summary:
  - <1–3 bullets.>
