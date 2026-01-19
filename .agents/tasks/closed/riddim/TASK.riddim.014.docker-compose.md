---
title: TASK.riddim.014.docker-compose
epic: EPIC.riddim.004.docker-deployment
impact: MEDIUM
effort: LOW
suggestion: OPEN
owner: codex-1
tags: [docker, compose]
depends_on: [TASK.riddim.013.docker-images]
blocks: [TASK.riddim.015.make-integration]
---

## Goal
Orchestrate the `riddim` services using Docker Compose.

## Deliverables
- `deployment/compose/docker-compose.yml`

## Assets
- Running Docker Compose stack.

## Acceptance
- `docker-compose -f deployment/compose/docker-compose.yml up -d` starts the services.

## Recon
- Use workspace-root relative paths.
- Configure environment variables for service discovery (e.g. sound engine host).

---

## Closure
- Completed: 
- Branch: 
- Summary:
