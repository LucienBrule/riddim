---
title: TASK.web.002.runtime-app
epic: EPIC.web.001.frontend-platform
impact: HIGH
effort: HIGH
suggestion: OPEN
owner: codex-1
tags: [web, react, vite, config]
depends_on: [TASK.web.001.turborepo-scaffold]
blocks: [TASK.web.003.compose-integration, TASK.web.004.auth-plan]
---

## Goal
Build a React/Vite/TypeScript app (base path `/riddim`) with runtime-loaded config for RPC/backend endpoints and deployability to GitHub Pages.

## Deliverables
- Frontend app under `web/apps/app` (or similar) using Vite + React + TS.
- Runtime config loaded from assets (no rebuild to change endpoints/keys).
- Shared UI tokens aligned with docs theme where practical.
- Build scripts and README for dev/build/serve.

## Assets
- App source in `web/apps/app`.
- Built artifacts via `turbo` or `npm run build` under `web/`.
- `ASSETS.md` update noting new web build output and commands.

## Acceptance
- App builds with `cd web && npm run build` (or turbo equivalent).
- Runtime config can be updated by editing an asset file without rebuilding.
- Base path `/riddim` works for GH Pages deploy (SPA routing).

## Recon
- React/Vite/TS app at `web/apps/app` with Catppuccin tokens and shared fonts.
- Runtime config fetched from `config.json` (modifiable without rebuild); default lives in `public/config.json`.
- Vite base set to `/riddim/app/`; links back to docs hub.

---

## Closure
- Completed: 2026-01-19 17:26
- Branch: `main`
- Summary:
  - Built runtime-configurable app with shared theme and base path for GH Pages.
  - Verified build via `cd web && npm run build`.
