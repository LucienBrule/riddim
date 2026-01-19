# EPIC: Assets, Linkage & Automation

Namespace: riddim
Slug: assets-linkage
Status: open

## Objective
Establish a robust "Artifacts-First" culture by documenting build outputs for every module, defining inter-module linkage clearly, and automating the generation of a build asset dashboard.

## Scope
### In-scope
- Identification of primary build artifacts (JARs, Runner JARs) for all modules.
- Documentation of module dependencies in a dedicated section/file.
- Scripting to aggregate build metadata into `ASSETS_DASHBOARD.md`.
- Validation of artifacts after a full build.

### Out-of-scope
- External CI/CD integration (keeping it local to the repo for now).
- Binary artifact storage (e.g., Artifactory).

## Success criteria
- `ASSETS.md` contains specific output paths for each module.
- `ASSETS_DASHBOARD.md` is automatically generated/updated and reflects current build status.
- Dependency graph is documented and matches `build.gradle.kts` files.
- All artifacts are verified to exist after `./gradlew build`.

## Guardrails
- Maintain green build state.
- Dashboard must be generated from truth (build outputs), not hardcoded.

## Task list
- [ ] `.agents/tasks/open/riddim/TASK.riddim.010.module-outputs.md`
- [ ] `.agents/tasks/open/riddim/TASK.riddim.011.module-linkage.md`
- [ ] `.agents/tasks/open/riddim/TASK.riddim.012.assets-dashboard.md`
