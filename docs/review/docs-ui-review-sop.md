# Docs UI Review SOP

## Purpose
Keep a repeatable, visual check on the Antora docs UI and capture evidence of styling or layout regressions.

## Screenshot storage
- Directory: `docs/screenshots/docs-ui/YYYYMMDD/` (gitignored).
- Naming: `<area>-<page>--<viewport>.png`.
  - `area`: `user`, `dev`, `ops`.
  - `page`: short slug (e.g., `welcome`, `getting-started`, `build-and-run`).
  - `viewport`: `desktop-1440x900` or `mobile-390x844`.
- Example: `docs/screenshots/docs-ui/20260119/user-welcome--desktop-1440x900.png`.

## Manual review procedure
1. Build docs: `npm run docs:bundle` from `docs/`.
2. Serve the static output via Docker Compose (nginx + volume mounts):
   - `docker compose -f deployment/compose/docker-compose.yml up -d docs`
3. Open pages under `http://localhost:4174/riddim/docs/` (hub) and `http://localhost:4174/riddim/docs/antora/<component>/<version>/...`.
   - Example: `http://localhost:4174/riddim/docs/antora/development/0.1/onboarding.html`.
4. For each target page:
   - Set viewport (desktop and mobile).
   - Capture full-page screenshots to the dated folder.
   - Use `view_image` to inspect each screenshot and note regressions.
5. Write a review log in `docs/screenshots/docs-ui/YYYYMMDD/review-log.md`.
6. Optional sanity checks:
   - `curl -I http://localhost:4174/riddim/docs/`
   - `curl -I http://localhost:4174/riddim/docs/antora/user/0.1/index.html`

## Tooling (automation)
A lightweight capture script is available:

```
cd docs
npm run docs:ui:screens
```

Config lives in `docs/review/docs-ui-sweep.json`. Update `pages`, `viewports`, or `baseUrl` as needed.

## Review log

### 2026-01-19
- Scope: user, dev, ops docs (desktop + mobile).
- Notes: see `docs/screenshots/docs-ui/20260119/review-log.md`.

## Follow-up (automation ideas)
- Standalone capture script uses the MCP SDK to spawn `chrome-devtools-mcp` and save screenshots.
- Optional: add a review script that loads screenshots and emits a checklist or passes them into a visual diff workflow.
