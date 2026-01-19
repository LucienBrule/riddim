---
title: TASK.riddim.017.gitignore
epic: EPIC.riddim.005.governance
impact: LOW
effort: LOW
suggestion: OPEN
owner: junie
tags: [governance, git]
depends_on: []
blocks: []
---

## Goal
Create a comprehensive `.gitignore` file to keep the repository clean of build artifacts and environment-specific files.

## Deliverables
- `.gitignore` in the root directory.

## Assets
- Updated `ASSETS.md` noting the addition of repository hygiene.

## Acceptance
- `git status` should not show `build/` directories or `.gradle/` after running `make build`.

## Recon
- Standard Java/Gradle/Quarkus/IntelliJ/VSCode patterns needed.
- Need to ensure `gradle-wrapper.jar` is NOT ignored if using standard patterns.

---

## Closure
- Completed: 2026-01-18 15:35
- Summary:
  - Created root .gitignore.
  - Included JVM, Gradle, Quarkus, and IDE exclusions.
