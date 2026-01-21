# EPIC: Docs Platform Evolution

Namespace: `docs`  
Slug: `docs-platform`  
Status: closed

## Objective
Evolve the documentation platform to support multi-audience docs and a Vite-based shell that can host and style Antora outputs.

## Scope
### In-scope
- Vite static site scaffolding to serve as a wrapper for Antora docs.
- Strategy for embedding or serving Antora outputs as assets.
- Multi-audience doc sets for development, user, and ops paths.

### Out-of-scope
- Rewriting existing content for production polish.
- Full design system or marketing site.

## Success criteria
- A repeatable Vite static build coexists with Antora outputs.
- Docs are organized by audience (development/user/ops).
- Build artifacts are tracked in `ASSETS.md`.

## Guardrails
- Preserve Antora as the source of truth for AsciiDoc content.
- Avoid breaking the current docs build until the Vite shell is ready.

## Task list (optional)
- [ ] `.agents/tasks/open/docs/TASK.docs.001.vite-static-shell.md`
- [ ] `.agents/tasks/open/docs/TASK.docs.002.multi-audience-structure.md`
