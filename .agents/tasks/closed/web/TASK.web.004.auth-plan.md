---
title: TASK.web.004.auth-plan
epic: EPIC.web.001.frontend-platform
impact: MEDIUM
effort: MEDIUM
suggestion: OPEN
owner: codex-1
tags: [auth, oauth, rbac]
depends_on: [TASK.web.002.runtime-app]
blocks: []
---

## Goal
Define the OAuth/RBAC approach for the frontend + backend, covering GH Pages-hosted SPA and Fly-deployed backend.

## Deliverables
- Auth plan documenting provider choice (GitHub/other OIDC), token flow for SPA on GH Pages, and backend validation strategy.
- RBAC rules outline (lockdown mode, open enrollment) and config points.
- Frontend stubs/hooks to integrate auth later (no full implementation yet).

## Assets
- Auth/RBAC design doc (add under `docs/` or `web/`).
- `ASSETS.md` note if a new design asset is added.

## Acceptance
- Written plan exists with flows, endpoints, and config knobs.
- Frontend has placeholder hooks/types ready for auth integration.
- Backend expectations (headers/claims/scopes) are documented.

## Recon
- Auth plan documented in `docs/web/auth-plan.md` covering PKCE, GH Pages constraints, and backend validation.
- Added placeholder auth types/stub in `web/apps/app/src/auth.ts` for future integration.
- Runtime config can carry auth knobs later without rebuild.

---

## Closure
- Completed: 2026-01-19 17:29
- Branch: `main`
- Summary:
  - Auth/RBAC approach captured with PKCE + backend validation and modes (lockdown/open).
  - Frontend stub added for future OAuth integration.
