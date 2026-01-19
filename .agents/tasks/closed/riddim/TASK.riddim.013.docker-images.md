---
title: TASK.riddim.013.docker-images
epic: EPIC.riddim.004.docker-deployment
impact: MEDIUM
effort: MEDIUM
suggestion: OPEN
owner: codex-1
tags: [docker, fedora]
depends_on: []
blocks: [TASK.riddim.014.docker-compose]
---

## Goal
Create a Fedora 43 based Dockerfile for the `app-api` module.

## Deliverables
- `deployment/images/app-api/Dockerfile`

## Assets
- `app-api` Docker image.

## Acceptance
- `docker build -t riddim-app-api -f deployment/images/app-api/Dockerfile .` completes successfully.

## Recon
- Base image: `fedora:43`
- Must include OpenJDK 17+.
- Should use the `quarkus-app` directory produced by `./gradlew build`.

---

## Closure
- Completed: 
- Branch: 
- Summary:
