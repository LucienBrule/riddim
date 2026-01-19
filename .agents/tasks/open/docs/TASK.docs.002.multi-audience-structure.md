---
title: TASK.docs.002.multi-audience-structure
epic: EPIC.docs.001.docs-platform
impact: MEDIUM
effort: MEDIUM
suggestion: OPEN
owner: codex-1
tags: [docs, antora, information-architecture]
depends_on: []
blocks: []
---

## Goal
Expand the Antora docs structure to include development, user, and ops doc sets under a single published site.

## Deliverables
- New Antora components for `user` and `ops` under `docs/`.
- Updated playbook to aggregate multiple doc sources.
- Landing page(s) that link to each audience track.

## Assets
- Updated Antora sources under `docs/`.
- Updated `ASSETS.md` to note additional doc sets if needed.

## Acceptance
- `npm run docs:build` succeeds from `docs/`.
- The published site shows distinct entry points for development, user, and ops docs.

## Recon
- <Fill during implementation: chosen component layout, nav structure, and entry points.>

---

## Closure
- Completed: YYYY-MM-DD HH:MM (local)
- Branch: `<optional>`
- Summary:
  - <1–3 bullets.>
