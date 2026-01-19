---
title: TASK.web.003.compose-integration
epic: EPIC.web.001.frontend-platform
impact: MEDIUM
effort: MEDIUM
suggestion: OPEN
owner: codex-1
tags: [docker, compose, web]
depends_on: [TASK.web.001.turborepo-scaffold, TASK.web.002.runtime-app]
blocks: []
---

## Goal
Integrate the frontend app into Docker Compose for local dev alongside the Quarkus backend, honoring base paths.

## Deliverables
- Compose service for the web app (dev image or static server) wired to the backend service.
- Environment/config wiring in Compose that feeds the frontend runtime config.
- README notes for running the full stack with `make docker-up` or similar.

## Assets
- Updated `deployment/compose/docker-compose.yml` (or new web compose file).
- `ASSETS.md` update noting new compose target and any images.

## Acceptance
- `make docker-up` (or documented command) starts frontend + backend.
- Frontend served at `/riddim` and talking to backend via configured RPC endpoint.
- Compose down/up cycle is documented and works.

## Recon
- Added nginx-based image (`deployment/images/web-frontend`) serving `/riddim/app` with SPA fallback.
- Compose includes `web` service exposing 4173 with config override volume `deployment/config/web-config.compose.json`.
- `make docker-build` now builds both app-api and web images.

---

## Closure
- Completed: 2026-01-19 17:28
- Branch: `main`
- Summary:
  - Added web service to Compose with nginx static hosting and runtime config volume.
  - Updated Makefile to build both images; documented artifact in ASSETS.md.
