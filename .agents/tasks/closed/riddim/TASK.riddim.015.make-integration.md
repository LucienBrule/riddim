---
title: TASK.riddim.015.make-integration
epic: EPIC.riddim.004.docker-deployment
impact: LOW
effort: LOW
suggestion: OPEN
owner: codex-1
tags: [makefile, automation]
depends_on: [TASK.riddim.014.docker-compose]
blocks: [TASK.riddim.016.compose-verification]
---

## Goal
Wire Docker Compose commands into the root `Makefile`.

## Deliverables
- Updated `Makefile` with `docker-build`, `docker-up`, `docker-down`, `docker-ps`.

## Assets
- Improved developer workflow.

## Acceptance
- `make docker-up` starts the stack.
- `make docker-ps` shows running containers.

## Recon
- Ensure `docker-compose` commands use the correct path to the yaml file.
- Use `$PWD` for path resolution if necessary.

---

## Closure
- Completed: 
- Branch: 
- Summary:
