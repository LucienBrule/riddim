---
title: TASK.riddim.007.engine-config
epic: EPIC.riddim.002.core-engine
impact: LOW
effort: LOW
suggestion: OPEN
owner: junie
tags: [engine, config, quarkus]
depends_on: [TASK.riddim.003.quarkus-app-api]
blocks: []
---

## Goal
Externalize SuperCollider connection settings (host, port) using MicroProfile Config.

## Deliverables
- `SuperColliderSoundEngine` updated with `@ConfigProperty` injections.
- Default configuration values provided.

## Assets
- Updated `modules:engine-supercollider` source.

## Acceptance
- App starts successfully with `make dev`.
- Logs show no injection errors for the engine.

## Recon
- Discovery: Using `@ConfigProperty` with `defaultValue` handles missing properties gracefully.
- Files: `modules/engine-supercollider/src/main/kotlin/com/riddim/sound/supercollider/SuperColliderSoundEngine.kt`.

---

## Closure
- Completed: 2026-01-18 15:10
- Summary:
  - Added MicroProfile Config API dependency.
  - Injected `host` and `port` into `SuperColliderSoundEngine`.
  - Verified with a smoke test script.
