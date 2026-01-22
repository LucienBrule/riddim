---
title: TASK.ops.001.gradle-task-graph
epic: EPIC.ops.001.gradle-ci-orchestration
impact: HIGH
effort: MEDIUM
suggestion: OPEN
owner: junie
tags: [gradle, ci, orchestration]
depends_on: []
blocks: [TASK.ops.002.gradle-plugin-ci]
---

## Goal
Expose all onboarding, build, test, and deployment workflows through root Gradle tasks.

## Deliverables
- Root-level tasks that wrap existing scripts and Make targets:
  - `docsBundle` -> `npm run docs:bundle` in `docs/`.
  - `docsBuild` -> `npm run docs:build` in `docs/`.
  - `webBuild` -> `npm run build` (or `npm run build -w web`) in `web/`.
  - `webTest` -> `npm test` (or `npm run test`) if defined.
  - `dockerBuild` -> `make docker-build` (or equivalent).
  - `dockerUp`, `dockerDown`, `dockerPs` -> Compose lifecycle.
  - `assetsDashboard` -> `./scripts/generate_dashboard.sh`.
- Aggregator task (e.g., `verifyAll`) that runs the common flow in order.
- Skip flags via Gradle properties (e.g., `-PskipDocker`, `-PskipDocs`, `-PskipWeb`).

## Assets
- Root Gradle task graph updates (build scripts or plugin wiring).

## Acceptance
- `./gradlew tasks` lists the new orchestration tasks.
- `./gradlew verifyAll` runs docs, web, and backend verification from repo root.
- Each wrapped command still succeeds when run via Gradle (no path regressions).
- Optional tool-dependent steps can be skipped via flags.

## Recon
- Mapped NPM and Makefile commands to Gradle `Exec` tasks.
- Applied `base` plugin to root project to enable standard lifecycle tasks (`build`, `check`).
- Implemented `verifyAll` as a root aggregator task.
- Property-based skip flags (`skipDocker`, `skipDocs`, `skipWeb`) implemented using `project.hasProperty`.

---

## Closure
- Completed: 2026-01-21 20:35 (local)
- Branch: `epic/gradle-ci-orchestration`
- Summary:
  - Root Gradle tasks now wrap all onboarding and deployment workflows.
  - `verifyAll` provides a single entry point for full repo verification.
  - Skip flags allow CI to bypass heavy toolchains when needed.
