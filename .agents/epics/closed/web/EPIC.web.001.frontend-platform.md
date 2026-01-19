# EPIC: Web Frontend Platform

Namespace: `web`  
Slug: `frontend-platform`  
Status: closed

## Objective
Stand up a TurboRepo-based web workspace with a React/Vite/TypeScript “app app,” runtime-configurable frontend, and Docker Compose integration for local + Fly.io deployment alongside the backend.

## Scope
### In-scope
- TurboRepo scaffolding under `web/` with apps and shared packages.
- React/Vite/TS app configured for `/riddim` base path and runtime config (assets-driven) for RPC/backend endpoints.
- Docker Compose integration to run the frontend with the Quarkus backend locally.
- Plan for auth/OAuth + RBAC (spec + hooks), not full implementation yet.

### Out-of-scope
- Full production auth implementation.
- Non-web clients.

## Success criteria
- Turbo workspace builds and runs the frontend app.
- Runtime config can be adjusted without rebuild (asset/config file).
- Docker Compose starts frontend + backend together.
- Base paths align with GitHub Pages `/riddim` and `/riddim/docs` expectations.
- Auth/RBAC approach documented for future implementation.

## Guardrails
- Keep deployments compatible with GitHub Pages for the SPA.
- Preserve existing docs build/deploy flows.

## Status notes
- Turbo workspace, runtime-configurable app, Compose integration, and auth plan completed; GH Pages workflow updated to include app bundle.
