# EPIC: Docs Theming Unification

Namespace: `docs`  
Slug: `theming-unification`  
Status: closed

## Objective
Unify the Antora docs and Vite docs hub under a single aesthetic (Catppuccin-inspired) with coherent typography, callout/code styling, and contrast improvements.

## Scope
### In-scope
- Re-theme Antora callouts, code blocks, TOC/sidebar, and footer to match the hub palette.
- Align fonts (JetBrains Mono for code, shared sans for body) across hub and Antora.
- Apply Catppuccin Mocha/Frappe tokens for dark/light and reuse gradients subtly.
- Tone down button treatments to a consistent style.

### Out-of-scope
- New content authoring.
- Frontend app theming outside of docs surfaces.

## Success criteria
- Antora and the Vite hub share palette, typography, and button styles.
- Callouts/code/TOC have dark-friendly contrast and no “default” white boxes.
- Catppuccin token sets (Mocha/Frappe) drive light/dark variables.
- Docs deploy (`npm run docs:bundle`) stays green and outputs updated styling.

## Guardrails
- Keep accessibility/contrast at AA or better.
- Preserve current navigation structure and URLs.

## Status notes
- Completed via Catppuccin token adoption, callout/code/TOC restyle, and shared fonts/buttons across hub + Antora; bundle build verified.
