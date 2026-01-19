export type AuthMode = 'none' | 'pkce'

export type AuthConfig = {
  enabled: boolean
  mode: AuthMode
  issuer?: string
  clientId?: string
  redirectUri?: string
  allowedUsers?: string[]
  allowedOrgs?: string[]
}

export type AuthState = {
  authenticated: boolean
  user?: { login: string }
  token?: string
}

// Placeholder stub to be replaced with real OAuth/PKCE wiring.
export function createAuthClient(config: AuthConfig) {
  return {
    config,
    async login() {
      throw new Error('Auth not implemented yet')
    },
    async logout() {
      return
    }
  }
}
