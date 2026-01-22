---
title: TASK.ops.002.gradle-plugin-ci
epic: EPIC.ops.001.gradle-ci-orchestration
impact: MEDIUM
effort: MEDIUM
suggestion: OPEN
owner: junie
tags: [gradle, plugin, ci]
depends_on: [TASK.ops.001.gradle-task-graph]
blocks: []
---

## Goal
Create a lightweight internal Gradle plugin to register and configure CI orchestration tasks.

## Deliverables
- `buildSrc` (or included build) plugin that:
  - Registers task types for exec-based workflows (docs, web, docker, compose).
  - Centralizes command definitions and paths (repo root, `docs/`, `web/`).
  - Exposes a single `ci` (or `verifyAll`) task to run the full graph.
- Documentation or task group labels so tasks are easy to discover.

## Assets
- `buildSrc` plugin sources and wiring in root build.

## Acceptance
- `./gradlew ci` runs the full orchestration flow from root.
- Tasks are grouped and discoverable in `./gradlew tasks`.
- Plugin is applied only at root and does not alter module build logic.

## Recon
- <Fill during implementation: plugin package, task wiring, skip flags.>

---

## Closure
- Completed: YYYY-MM-DD HH:MM (local)
- Branch: `<optional>`
- Summary:
  - <1–3 bullets.>
