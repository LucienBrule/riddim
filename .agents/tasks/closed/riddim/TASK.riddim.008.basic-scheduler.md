---
title: TASK.riddim.008.basic-scheduler
epic: EPIC.riddim.002.core-engine
impact: HIGH
effort: MEDIUM
suggestion: OPEN
owner: junie
tags: [playback, scheduler, clock]
depends_on: [TASK.riddim.002.modules-skeleton]
blocks: []
---

## Goal
Implement a beat-aware scheduler that can trigger sound events at precise times relative to a master clock.

## Deliverables
- `Clock` class for beat calculation.
- `Scheduler` with priority queue and background processing loop.

## Assets
- New `Clock.kt` and updated `Scheduler.kt` in `modules:playback`.

## Acceptance
- `modules:playback:test` passes.
- Events are played in the correct order according to their beat time.

## Recon
- Discovery: Using `PriorityBlockingQueue` simplifies ordering of events by beat.
- Files: `modules/playback/src/main/kotlin/com/riddim/playback/`.

---

## Closure
- Completed: 2026-01-18 15:10
- Summary:
  - Implemented `Clock` for mapping real time to musical beats.
  - Implemented `Scheduler` with a daemon thread loop.
  - Verified with `SchedulerTest`.
