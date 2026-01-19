# EPIC: Dockerization & Deployment

Namespace: riddim
Slug: docker-deployment
Status: open

## Objective
Establish a containerized development environment using Docker and Docker Compose, based on Fedora 43, to ensure consistent deployment and orchestration of riddim services.

## Scope
### In-scope
- Fedora 43 based Dockerfiles for `app-api`.
- Docker Compose configuration for the full stack.
- Makefile integration for easy container management.
- Verification of API endpoints within the containerized environment.

### Out-of-scope
- Production-grade Kubernetes manifests.
- CI/CD pipeline implementation (only local dev setup).

## Success criteria
- `make docker-build` produces valid Docker images.
- `make docker-up` starts the full stack via Docker Compose.
- `curl` verification against the containerized API returns 200 OK.
- Build outputs documented in `ASSETS.md`.

## Guardrails
- Use Fedora 43 as the base image for all custom containers.
- All paths in Compose files must be workspace-root relative.
- Minimal image size where possible (using JRE instead of Full SDK if appropriate).

## Task list
- [ ] .agents/tasks/open/riddim/TASK.riddim.013.docker-images.md
- [ ] .agents/tasks/open/riddim/TASK.riddim.014.docker-compose.md
- [ ] .agents/tasks/open/riddim/TASK.riddim.015.make-integration.md
- [ ] .agents/tasks/open/riddim/TASK.riddim.016.compose-verification.md
