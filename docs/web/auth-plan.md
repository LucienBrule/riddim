# Web Auth / RBAC Plan

[NOTE]
====
AUDIT_ME: Implementation stub for future OAuth/RBAC work.
====

## Goals
- Allow the SPA hosted on GitHub Pages (`/riddim/`) to authenticate via OAuth/OIDC (GitHub primary).
- Backend (Quarkus) validates tokens and enforces RBAC (lockdown vs open enrollment).
- Keep secrets out of the SPA; rely on PKCE and backend validation.

## Flows
- SPA -> OAuth provider with PKCE (authorization code).
- Token exchange handled via backend callback endpoint (recommended) or a lightweight edge function; SPA receives access token via backend-issued session token (cookie or signed JWT).
- Backend validates issuer, audience, and scopes; maps to roles.

## Modes
- **Lockdown**: allowlist of usernames; deny others.
- **Open enrollment**: any authenticated user; optional org/team filter.

## Backend expectations
- Add an auth filter that checks `Authorization: Bearer <token>` or session cookie.
- Validate scopes/claims (login, orgs). Reject if missing.
- Configurable via environment: issuer URL, client id, allowed users/orgs, audience.

## Frontend hooks
- Add auth context/hooks to trigger login/logout and to store tokens in memory (avoid localStorage when possible).
- Runtime config should carry `auth.enabled`, `clientId`, `issuer`, `redirectUri`.
- Graceful fallback to unauthenticated read-only mode.

## Deployment notes
- GH Pages SPA cannot keep client secret; rely on backend for token exchange or a public client with PKCE and backend validation.
- Fly.io backend stores secrets (client secret) and callback URL; compose stacks can wire env vars.

## Next steps
- Add auth config shape to runtime config JSON.
- Implement backend OAuth filter and token verification.
- Wire SPA login button and protected routes.
