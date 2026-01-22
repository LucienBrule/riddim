# EPIC: Gradle CI Orchestration

Namespace: `ops`  
Slug: `gradle-ci-orchestration`  
Status: open

## Objective
Centralize all repo workflows under the Gradle task graph so CI and developers can execute every build, test, and deploy action from the root.

## Scope
### In-scope
- Root Gradle tasks that wrap all existing scripts, Make targets, and npm flows.
- A lightweight internal Gradle plugin to register and configure CI tasks.
- Consistent task naming and skip flags for tool-dependent actions (Docker, npm).

### Out-of-scope
- Rewriting npm or Makefile scripts.
- Adding new build artifacts or release packaging.

## Success criteria
- `./gradlew tasks` shows a clear set of root tasks for docs, web, Docker, Compose, and verification.
- `./gradlew ci` or `./gradlew verifyAll` executes the full flow with sensible defaults.
- Every onboarding command is reachable from Gradle.

## Guardrails
- Keep commands idempotent and safe (no destructive operations by default).
- Use Gradle properties to skip optional toolchains (e.g., Docker).

## Task list
- [ ] .agents/tasks/open/ops/TASK.ops.001.gradle-task-graph.md
- [ ] .agents/tasks/open/ops/TASK.ops.002.gradle-plugin-ci.md
