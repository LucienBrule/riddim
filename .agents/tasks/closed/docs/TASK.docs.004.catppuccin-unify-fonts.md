---
title: TASK.docs.004.catppuccin-unify-fonts
epic: EPIC.docs.002.theming-unification
impact: HIGH
effort: MEDIUM
suggestion: OPEN
owner: codex-1
tags: [docs, theming, typography]
depends_on: []
blocks: []
---

## Goal
Apply Catppuccin Mocha/Frappe token sets and align typography/button styles across Antora and the docs hub.

## Deliverables
- Shared CSS variables for Catppuccin palettes (Mocha dark, Frappe light) with `prefers-color-scheme` or toggle support.
- JetBrains Mono (or equivalent) as the code font across hub and Antora.
- Harmonized sans-serif stack across hub and Antora.
- Buttons toned to a consistent style (reuse hub aesthetic) and gradients subtly reused in Antora (e.g., header/welcome).

## Assets
- Palette/token CSS (e.g., `docs/theme/theme.css` or similar).
- Updated Antora supplemental CSS + hub styles consuming the same tokens.
- `ASSETS.md` note if new theme assets or build outputs change meaningfully.

## Acceptance
- `npm run docs:bundle` succeeds.
- Dark/light modes reflect Catppuccin tokens.
- Hub and Antora share code font and base sans stack.
- Buttons/look are consistent (no default Antora Bootstrap look).
- Gradients subtly present in docs (e.g., welcome header) without clashing.

## Recon
- Added Catppuccin Mocha/Frappe tokens in `docs/theme/theme.css` and Antora overrides; shared Google font imports for Space Grotesk + JetBrains Mono.
- Buttons/gradients aligned with hub aesthetic; docs hub updated to include app link while using same variables.
- `npm run docs:bundle` verified after theme updates.

---

## Closure
- Completed: 2026-01-19 17:20
- Branch: `main`
- Summary:
  - Unified typography and palette across hub + Antora using Catppuccin tokens and JetBrains Mono.
  - Added consistent button/gradient styling and confirmed bundle build.
