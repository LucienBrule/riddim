---
title: TASK.riddim.006.osc-encoding
epic: EPIC.riddim.002.core-engine
impact: MEDIUM
effort: LOW
suggestion: OPEN
owner: junie
tags: [engine, supercollider, osc]
depends_on: [TASK.riddim.004.supercollider-engine-stub]
blocks: []
---

## Goal
Implement real OSC message encoding for the SuperCollider engine to enable actual sound synthesis via SuperDirt compatibility.

## Deliverables
- Functional `OscEncoder` that can encode string, int, and float arguments into standard OSC format.
- `SuperColliderSoundEngine` updated to send real OSC packets over UDP.

## Assets
- Updated `modules:engine-supercollider` source.
- ASSETS.md entry showing a captured OSC message (mocked or real).

## Acceptance
- `./gradlew :modules:engine-supercollider:test` passes.
- A manual test (or unit test) demonstrates that a `SoundEvent` is correctly converted to a byte array matching the OSC spec.

## Recon
- Discovery: SuperDirt expects `/dirt/play` messages.
- Files: `modules/engine-supercollider/src/main/kotlin/com/riddim/sound/supercollider/Osc.kt`.

---

## Closure
- Completed: 2026-01-18 15:10
- Summary:
  - Implemented real OSC encoding according to the spec.
  - Verified with `OscEncoderTest`.
  - Updated `SuperColliderSoundEngine` to use the new encoder.
