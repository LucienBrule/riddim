# ROADMAP: <Project> <Short description>

Doc type: `ROADMAP`

Supersedes: []

## Scope and assumptions
- Tasks are the unit of execution; this roadmap is authoritative ordering.
- Keep the repo green after each task (lint/tests/dryrun as appropriate).
- Assets are first-class: tasks must list build outputs and keep `ASSETS.md` current.
- Two-agent split:
  - `codex-2` authors scope + QA and maintains this roadmap.
  - `codex-1` implements and performs lifecycle close-out.

## Global gates (run after each task)
- `make lint`
- `make test`
- `make dryrun`
- Verify `ASSETS.md` reflects outputs produced in the slice.

## Decision needed
- (when applicable) <Decision>, recommended rule, and rationale.

## Phase 1 — <Name> (EPIC.<namespace>.<nnn>.<slug>)
- [ ] (1) `.agents/tasks/open/<namespace>/TASK.<namespace>.<nnn>.<slug>.md`

## Phase 2 — <Name> (EPIC.<namespace>.<nnn>.<slug>)
- [ ] (2) `.agents/tasks/open/<namespace>/TASK.<namespace>.<nnn>.<slug>.md`

## Notes
- When a TASK is closed, move it to `.agents/tasks/closed/` and update its checkbox here.
- When this ROADMAP is complete, move it to `.agents/roadmaps/closed/` and version the filename.
