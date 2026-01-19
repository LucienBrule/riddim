---
title: TASK.web.001.turborepo-scaffold
epic: EPIC.web.001.frontend-platform
impact: HIGH
effort: MEDIUM
suggestion: OPEN
owner: codex-1
tags: [web, turborepo, tooling]
depends_on: []
blocks: [TASK.web.002.runtime-app, TASK.web.003.compose-integration]
---

## Goal
Create a TurboRepo workspace under `web/` with app and package structure ready for the frontend.

## Deliverables
- Turbo config (`turbo.json`), package manager lock, and base workspace layout (`web/apps`, `web/packages`).
- Scripts for dev/build/test at the root of `web/`.
- Documentation for how to run turbo tasks locally.

## Assets
- New `web/` workspace files and lockfile.
- `ASSETS.md` note if new build artifacts/commands are added.

## Acceptance
- `cd web && npm/yarn/pnpm install` succeeds.
- `cd web && npx turbo run lint?` (or equivalent) resolves without missing pipelines.
- Workspace recognizes apps/packages and is ready for app wiring.

## Recon
- Chose npm workspaces; added `web/package.json`, `turbo.json`, and workspace scripts.
- `npm install` in `web/` generates lockfile; `npm run build` uses turbo.
- Base path considerations handled in app build (`/riddim/app/`).

---

## Closure
- Completed: 2026-01-19 17:25
- Branch: `main`
- Summary:
  - Scaffolded npm/turbo workspace under `web/` with pipelines.
  - Verified workspace install/build via `npm run build` (turbo).
