---
title: TASK.riddim.012.assets-dashboard
epic: EPIC.riddim.003.assets-linkage
impact: HIGH
effort: MEDIUM
suggestion: OPEN
owner: junie
tags: [automation, build]
depends_on: [TASK.riddim.010]
blocks: []
---

## Goal
Automate the aggregation of build information into an `ASSETS_DASHBOARD.md`.

## Deliverables
- A script or Gradle task that scans module build directories and generates `ASSETS_DASHBOARD.md`.
- `ASSETS_DASHBOARD.md` containing a matrix of modules, their build status (last run), and links to artifacts.

## Assets
- `scripts/generate_dashboard.sh` (or similar)
- `ASSETS_DASHBOARD.md`

## Acceptance
- Running the automation produces a valid Markdown file.
- The dashboard correctly reports the existence/absence of artifacts.
- The dashboard is updated based on the actual state of the `build/` directories.

## Recon
- Consider using a simple shell script first.
- Matrix columns: Module, Status, Artifact Path, Size, Last Modified.

---

## Closure
- Completed: 2026-01-18 15:18
- Branch: main
- Summary:
  - Implemented scripts/generate_dashboard.sh to scan artifacts.
  - Generated ASSETS_DASHBOARD.md with build matrix.
  - Integrated dashboard generation into Makefile.
