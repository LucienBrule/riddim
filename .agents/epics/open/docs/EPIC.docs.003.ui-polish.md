# EPIC: Docs Visual Polish

Namespace: `docs`  
Slug: `ui-polish`  
Status: open

## Objective
Finalize the docs UI/UX with coherent CTAs, labels, code block styling, header behavior, and background/spacing refinements so the Antora site and hub feel intentionally designed.

## Scope
### In-scope
- CTA/buttons and edit/source link treatments with icons and consistent tones.
- Admonition pill styling/label tweaks, code block framing/labels, and HR sizing.
- Header/TOC/nav contrast and behavior (sticky/blur, hover states), background gradients/tones, and spacing fixes.
- Version picker ghost border investigation/decision.

### Out-of-scope
- New content authoring.
- Non-docs web app styling.

## Success criteria
- CTAs/download/edit links are aligned with theme (no white default buttons; meaningful labels/icons).
- Admonition pills use Catppuccin accents; code blocks have subtle framing/optional language tags; HRs are toned down.
- Header is clearly separated (sticky or static with backdrop), backgrounds use proper Catppuccin base/mantle; TOC/nav lines and hovers are softened; spacing after blocks improved.
- Version picker border is resolved or made intentionally consistent.

## Guardrails
- Maintain AA contrast.
- Keep existing URL structure and build flow (`npm run docs:bundle` green).
