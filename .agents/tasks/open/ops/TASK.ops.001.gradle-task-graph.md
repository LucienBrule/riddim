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
- <Fill during implementation: command mapping and skip flag decisions.>

---

## Closure
- Completed: YYYY-MM-DD HH:MM (local)
- Branch: `<optional>`
- Summary:
  - <1–3 bullets.>
