---
title: TASK.docs.007.version-picker-border
epic: EPIC.docs.003.ui-polish
impact: LOW
effort: LOW
suggestion: OPEN
owner: codex-1
tags: [docs, ui]
depends_on: []
blocks: []
---

## Goal
Resolve the phantom border on the version picker: either remove it or make it an intentional bar.

## Deliverables
- Investigation of border source (`:before`, box-shadow, adjacent elements).
- Implemented fix: removed border or added matching top/bottom border for intent.

## Assets
- CSS tweak in Antora supplemental files.
- `npm run docs:bundle` output.

## Acceptance
- Version picker shows no unwanted ghost border; if present, it matches intentional styling.
- `npm run docs:bundle` succeeds.

## Recon
- Check version selector container and siblings for shadows/borders.

---

## Closure
- Completed: YYYY-MM-DD HH:MM (local)
- Branch: `<optional>`
- Summary:
  - <1–3 bullets.>
