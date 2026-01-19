import { useEffect, useState } from 'react'
import { loadConfig, type AppConfig } from './config'
import './index.css'

const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`

export function App() {
  const [config, setConfig] = useState<AppConfig | null>(null)

  useEffect(() => {
    loadConfig(base).then(setConfig)
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <header className="flex flex-col gap-4 card p-8">
        <div className="pill w-fit">riddim • app</div>
        <h1 className="text-4xl font-semibold text-[var(--riddim-text)]">Play with the DSL-backed sound engine</h1>
        <p className="text-lg text-[var(--riddim-muted)] max-w-3xl">
          React/Vite frontend with runtime config for the backend RPC. Deployed under <span className="mono">/riddim/app</span>,
          sharing the Catppuccin palette used across docs.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a className="btn-primary" href="/riddim/antora/development/0.1/index.html">Docs</a>
          <a className="btn-primary" href="/riddim/antora/user/0.1/index.html">User Guides</a>
          <a className="btn-primary" href="/riddim/antora/ops/0.1/index.html">Ops Docs</a>
        </div>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-[var(--riddim-text)]">Runtime config</h3>
          <p className="text-[var(--riddim-muted)]">
            Loaded from <span className="mono">config.json</span> at runtime so environments can change without rebuild.
          </p>
          <div className="mt-3 text-sm mono text-[var(--riddim-text)] bg-[var(--riddim-panel)] border border-[var(--riddim-border)] rounded-lg p-3">
            {config ? (
              <>
                <div>apiBase: {config.apiBase}</div>
                <div>rpcPath: {config.rpcPath}</div>
              </>
            ) : (
              'loading...'
            )}
          </div>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-[var(--riddim-text)]">Base path</h3>
          <p className="text-[var(--riddim-muted)]">
            Built with Vite base <span className="mono">/riddim/app/</span> for GitHub Pages and served via nginx in Compose.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-[var(--riddim-text)]">Theme</h3>
          <p className="text-[var(--riddim-muted)]">
            Catppuccin Mocha/Frappe tokens, JetBrains Mono for code, shared palette with docs and hub.
          </p>
        </div>
      </section>
    </div>
  )
}
