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
- Scaffolder `buildSrc` with Kotlin DSL support.
- Implemented orchestration as a precompiled script plugin (`riddim.ci-orchestration.gradle.kts`).
- Configured JVM toolchain (17) in `buildSrc` to match the rest of the project and avoid compatibility issues with the environment's Java 24.
- Verified task discoverability and execution via `./gradlew tasks`.

---

## Closure
- Completed: 2026-01-21 20:42 (local)
- Branch: `epic/gradle-ci-orchestration`
- Summary:
  - CI orchestration logic is now encapsulated in a reusable Gradle plugin.
  - Root `build.gradle.kts` is kept clean, only applying the plugin.
  - `ci` task added as a developer-friendly alias for full verification.
