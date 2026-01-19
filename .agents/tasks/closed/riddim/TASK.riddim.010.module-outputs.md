---
title: TASK.riddim.010.module-outputs
epic: EPIC.riddim.003.assets-linkage
impact: MEDIUM
effort: LOW
suggestion: OPEN
owner: junie
tags: [build, documentation]
depends_on: []
blocks: [TASK.riddim.012]
---

## Goal
Identify and document the specific build artifacts produced by each module after a full build.

## Deliverables
- Updated `ASSETS.md` with a "Module Artifacts" section listing paths to JARs/outputs for each module.
- Verification that all listed artifacts actually exist after `./gradlew build`.

## Assets
- `ASSETS.md`

## Acceptance
- `./gradlew build` completes successfully.
- Every module has at least one entry in the "Module Artifacts" section of `ASSETS.md`.
- All paths listed in `ASSETS.md` are valid (files exist).

## Recon
- Modules: core, model, engine-supercollider, playback, dsl, app-api.
- Expected outputs: `build/libs/*.jar` for library modules, Quarkus specific outputs for `app-api`.

---

## Closure
- Completed: 2026-01-18 15:18
- Branch: main
- Summary:
  - Identified primary JAR artifacts for all 6 modules.
  - Updated ASSETS.md with a Module Artifacts section.
  - Verified artifact existence after full build.
