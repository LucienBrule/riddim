---
title: TASK.docs.006.header-bg-spacing
epic: EPIC.docs.003.ui-polish
impact: MEDIUM
effort: MEDIUM
suggestion: OPEN
owner: codex-1
tags: [docs, layout, header, spacing]
depends_on: []
blocks: [TASK.docs.007.version-picker-border]
---

## Goal
Fix header/background behavior, TOC/nav contrast, and spacing issues for the docs pages.

## Deliverables
- Header made sticky/fixed with backdrop blur or solid separation (no ghost overlap on scroll).
- Background gradient/tone adjusted to Catppuccin base/mantle (no unintended green cast or gradient drop-off).
- TOC vertical line softened; nav hovers/focus states added; spacing after code blocks improved.
- Partial-width HRs with centered margins.

## Assets
- Antora supplemental CSS updates.
- `npm run docs:bundle` output.

## Acceptance
- Header separation is clear on scroll (sticky/backdrop as chosen).
- Background matches target base/mantle without odd tint.
- TOC/nav lines and hovers are subdued but legible.
- Spacing after code blocks improved; HRs no longer full-width.
- `npm run docs:bundle` succeeds.

## Recon
- Consider `position: sticky` + `backdrop-filter` with semi-opaque background.
- Keep Catppuccin base colors consistent across scroll depth.
- Updated header/background styling in `docs/ui-supplemental/css/theme-overrides.css` with solid separation.
- Adjusted TOC/nav colors and hover states for contrast.
- Added spacing after listing/literal blocks and refined HRs.
- Ran `npm run docs:bundle`; installed docs deps with `npm install` when Antora was missing.

---

## Closure
- Completed: 2026-01-20 19:03 (local)
- Branch: `main`
- Summary:
  - Stabilized header/background separation and TOC/nav contrast with Catppuccin tones.
  - Improved code block spacing and HR styling across docs pages.
  - Verified `npm run docs:bundle` output after dependency install.
