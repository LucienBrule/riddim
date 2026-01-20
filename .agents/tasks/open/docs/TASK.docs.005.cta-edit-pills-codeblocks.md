---
title: TASK.docs.005.cta-edit-pills-codeblocks
epic: EPIC.docs.003.ui-polish
impact: MEDIUM
effort: MEDIUM
suggestion: OPEN
owner: codex-1
tags: [docs, ui, buttons, code]
depends_on: []
blocks: [TASK.docs.006.header-bg-spacing]
---

## Goal
Align docs CTAs and labels with the theme and refine admonition/code visuals.

## Deliverables
- Download button styled with theme secondary tone (no white default).
- Edit/source link relabeled with icon + concise text (e.g., GitHub icon + “Source”).
- Admonition pill restyled with Catppuccin info accent; consider renaming to “note”.
- Code blocks: subtle inner contrast (no white border), optional language tag/label, and consistent framing.
- HRs constrained in width/margins (no full-width cuts).

## Assets
- Antora supplemental CSS updates.
- `npm run docs:bundle` output.

## Acceptance
- CTAs and edit link reflect new styling/text.
- Admonition pill uses updated accent/label.
- Code blocks show adjusted background/shadow/label without white borders.
- HRs have reduced width and centered margins.
- `npm run docs:bundle` succeeds.

## Recon
- Use Catppuccin sapphire/sky for info accents.
- Keep contrasts AA; avoid pure white.
- Updated `docs/ui-supplemental/css/theme-overrides.css` for CTA, admonition pill, code framing, and HR styling.
- Added `docs/ui-supplemental/partials/edit-this-page.hbs` to relabel the edit link without JS.
- Pulled the Antora UI bundle from GitLab to confirm `edit-this-page.hbs` partial naming.
- Ran `npm run docs:bundle` (fs.Stats deprecation warning from Antora).
- Chrome DevTools MCP works; load `docs/site/dist/antora/user/0.1/...` to resolve `_` assets.

---

## Closure
- Completed: YYYY-MM-DD HH:MM (local)
- Branch: `<optional>`
- Summary:
  - <1–3 bullets.>
