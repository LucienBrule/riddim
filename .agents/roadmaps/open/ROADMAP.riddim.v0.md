# ROADMAP - Riddim v0

Bootstrap the `riddim/` workspace as a clean, build-green Kotlin/Quarkus multi-module monorepo.

## Phase 1 — Bootstrap Build + Modules

- [x] TASK.riddim.001.root-gradle: Root Gradle setup and wrapper ✓
- [x] TASK.riddim.002.modules-skeleton: Multi-module structure and stubs ✓
- [x] TASK.riddim.003.quarkus-app-api: Quarkus application with REST endpoint ✓
- [x] TASK.riddim.004.supercollider-engine-stub: Sound engine interfaces and SuperCollider stub ✓
- [x] TASK.riddim.005.smoke-tests: Verification of the wired build ✓

## Phase 2 — Core Engine & DSL Refinement

- [x] TASK.riddim.006.osc-encoding: Implement real OSC message encoding ✓
- [x] TASK.riddim.007.engine-config: Externalized configuration for SuperCollider ✓
- [x] TASK.riddim.008.basic-scheduler: Tick-based clock and scheduling logic ✓
- [x] TASK.riddim.009.dsl-sequences: Multi-event sequences in DSL ✓

## Phase 3 — Assets, Linkage & Automation

- [x] TASK.riddim.010.module-outputs: Identify and document build artifacts for all modules ✓
- [x] TASK.riddim.011.module-linkage: Document inter-module dependencies and boundaries ✓
- [x] TASK.riddim.012.assets-dashboard: Automate build aggregation into ASSETS_DASHBOARD.md ✓

## Phase 4 — Dockerization & Deployment

- [x] TASK.riddim.013.docker-images: Create Fedora-based Dockerfiles for app services ✓
- [x] TASK.riddim.014.docker-compose: Orchestrate services with Docker Compose ✓
- [x] TASK.riddim.015.make-integration: Wire Docker commands into Makefile ✓
- [x] TASK.riddim.016.compose-verification: Verify system integrity in containerized environment ✓

## Phase 5 — Governance & Maintenance

- [x] TASK.riddim.017.gitignore: Implement comprehensive .gitignore ✓

## Phase 6 — Docs Platform (EPIC.docs.001.docs-platform)

- [ ] TASK.docs.001.vite-static-shell: Vite shell for docs + Antora integration
- [ ] TASK.docs.002.multi-audience-structure: Development/User/Ops doc sets
