# EPIC: Core Engine & DSL Refinement

Namespace: riddim
Slug: core-engine
Status: closed

## Objective
Transform the bootstrapped skeleton into a functional music engine by implementing real OSC communication, externalized configuration, and a deterministic scheduler.

## Scope
### In-scope
- Real OSC message encoding for SuperCollider (SuperDirt compatibility).
- Quarkus configuration for SuperCollider host and port.
- Tick-based scheduler for timed event delivery.
- DSL expansion to support sequences of sound events.

### Out-of-scope
- Real-time audio processing in Kotlin (delegated to SuperCollider).
- Complex UI or Web Interface beyond REST.
- Support for multiple engines beyond SuperCollider (in this epic).

## Success criteria
- SuperCollider receives valid OSC messages (verified via logs or loopback).
- Configurable SC connection without code changes.
- Scheduler accurately triggers events at specified beat offsets.
- ASSETS.md updated with OSC verification output.

## Guardrails
- Maintain 100% build greenness.
- No breaking changes to existing `ISoundEngine` interface without justification.

## Task list
- [x] .agents/tasks/open/riddim/TASK.riddim.006.osc-encoding.md ✓
- [x] .agents/tasks/open/riddim/TASK.riddim.007.engine-config.md ✓
- [x] .agents/tasks/open/riddim/TASK.riddim.008.basic-scheduler.md ✓
- [x] .agents/tasks/open/riddim/TASK.riddim.009.dsl-sequences.md ✓
