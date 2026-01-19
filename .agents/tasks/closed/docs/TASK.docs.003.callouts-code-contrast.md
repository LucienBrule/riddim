---
title: TASK.docs.003.callouts-code-contrast
epic: EPIC.docs.002.theming-unification
impact: MEDIUM
effort: MEDIUM
suggestion: OPEN
owner: codex-1
tags: [docs, antora, css]
depends_on: []
blocks: []
---

## Goal
Restyle Antora callouts, code blocks, and TOC/sidebar to match the dark theme with readable contrast and non-default aesthetics.

## Deliverables
- Custom callout backgrounds/borders per variant (note/info/warn/success) with dark-friendly hues.
- Code block background aligned to site theme and matching syntax highlight palette.
- TOC/sidebar text contrast and hover/active states improved.
- Footer message updated to remove default Antora branding (already overridden or reaffirmed).

## Assets
- Updated Antora supplemental CSS (e.g., `docs/ui-supplemental/css/theme-overrides.css`).
- Verification via `npm run docs:bundle` output in `docs/site/dist`.

## Acceptance
- `npm run docs:bundle` succeeds.
- Callouts render with dark backgrounds and colored accents (no white boxes).
- Code blocks use a dark background and readable mono font.
- TOC text is legible (not ghosted) with hover/active accent.
- Footer shows custom text (no default Antora footer).

## Recon
- Applied Catppuccin-style palette in `docs/ui-supplemental/css/theme-overrides.css` with gradients, borders, and accent colors.
- Callouts restyled per variant with left-accent bars; code blocks use JetBrains Mono and dark background; TOC/sidebar colors lifted.
- Footer remains custom; used `npm run docs:bundle` to verify output.

---

## Closure
- Completed: 2026-01-19 17:20
- Branch: `main`
- Summary:
  - Restyled callouts, code, TOC/sidebar to match dark theme and removed default-looking white boxes.
  - Verified docs bundle build succeeded.
