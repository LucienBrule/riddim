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
    <div className="app-shell">
      <header className="hero">
        <div className="pill">Under construction</div>
        <h1 className="hero-title">RIDDIM Live Console</h1>
        <p className="hero-subtitle">
          This landing view is a polished mockup of the live-coding workspace. The real controls are still being wired, but
          the layout and navigation are finalizing so you can follow along.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href="/riddim/docs/">Read the docs</a>
          <a className="btn-secondary" href="/riddim/docs/antora/development/0.1/index.html">Developer guide</a>
          <a className="btn-secondary" href="/riddim/docs/antora/user/0.1/index.html">User guide</a>
        </div>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="card p-6">
          <h3 className="panel-title">Runtime config</h3>
          <p className="muted mt-2">
            Loaded from <span className="mono">config.json</span> so environments can change without rebuild.
          </p>
          <div className="config-block mono mt-4">
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
          <h3 className="panel-title">Base path</h3>
          <p className="muted mt-2">
            Built with Vite base <span className="mono">/riddim/</span> for GitHub Pages and served via nginx in Compose.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="panel-title">Theme alignment</h3>
          <p className="muted mt-2">
            Catppuccin palette, Space Grotesk typography, and shared UI tones with the docs platform.
          </p>
        </div>
      </section>

      <section className="mt-10 mock-grid">
        <div className="card mock-panel">
          <div className="transport">
            <button type="button">Play</button>
            <button type="button">Stop</button>
            <button type="button">Record</button>
            <div className="indicator mono">120 BPM · 4/4</div>
          </div>
          <div className="track-list">
            <div className="track">
              <span className="mono">Kick</span>
              <div className="track-bar" />
            </div>
            <div className="track">
              <span className="mono">Snare</span>
              <div className="track-bar" />
            </div>
            <div className="track">
              <span className="mono">Hi-hat</span>
              <div className="track-bar" />
            </div>
          </div>
        </div>
        <div className="card mock-panel">
          <h3 className="panel-title">Session timeline</h3>
          <p className="muted">
            Snapshots, loop markers, and event density will render here. The preview below mirrors the final layout.
          </p>
          <div className="track-list">
            <div className="track">
              <span className="mono">Scene A</span>
              <div className="track-bar" />
            </div>
            <div className="track">
              <span className="mono">Scene B</span>
              <div className="track-bar" />
            </div>
            <div className="track">
              <span className="mono">Scene C</span>
              <div className="track-bar" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
