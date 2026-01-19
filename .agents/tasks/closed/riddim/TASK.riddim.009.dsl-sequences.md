---
title: TASK.riddim.009.dsl-sequences
epic: EPIC.riddim.002.core-engine
impact: MEDIUM
effort: LOW
suggestion: OPEN
owner: junie
tags: [dsl, composition]
depends_on: [TASK.riddim.002.modules-skeleton]
blocks: []
---

## Goal
Expand the Kotlin DSL to support sequences of events with timing information.

## Deliverables
- `Song` data class.
- `SongBuilder` updated with `pause` and timed `sound` placement.

## Assets
- Updated `Builders.kt` in `modules:dsl`.

## Acceptance
- DSL code `song { sound("kick"); pause(1.0); sound("snare") }` compiles and produces correct `Song` object.

## Recon
- Discovery: Storing events as `Pair<BeatTime, SoundEvent>` allows easy integration with the scheduler.
- Files: `modules/dsl/src/main/kotlin/com/riddim/dsl/Builders.kt`.

---

## Closure
- Completed: 2026-01-18 15:10
- Summary:
  - Refined `SongBuilder` to track `currentBeat`.
  - Added `pause` method for advancing the timeline.
  - Verified with manual build.
