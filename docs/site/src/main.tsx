import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../theme/theme.css'
import './style.css'

const links = [
  { title: 'App', href: '/app/index.html', blurb: 'React/Vite runtime-configurable frontend deployed under /riddim/app.' },
  { title: 'Development', href: '/antora/development/0.1/index.html', blurb: 'Architecture, DSL, scheduler, build/run instructions.' },
  { title: 'User', href: '/antora/user/0.1/index.html', blurb: 'How to trigger sounds and run the API without deep internals.' },
  { title: 'Ops', href: '/antora/ops/0.1/index.html', blurb: 'Deployment, env config, and monitoring entry points.' }
]

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL

function App() {
  return (
    <main className="wrap">
      <header className="hero">
        <p className="eyebrow">riddim</p>
        <h1>Docs Hub</h1>
        <p className="lede">Explore development, user, and ops guides. Antora outputs are bundled below.</p>
        <div className="actions">
          {links.map((link) => (
            <a key={link.title} className="btn" href={`${base}${link.href}`}>
              {link.title}
            </a>
          ))}
        </div>
      </header>
      <section className="section">
        <h2>What's inside</h2>
        <ul className="cards">
          {links.map((link) => (
            <li key={link.title}>
              <h3>{link.title}</h3>
              <p>{link.blurb}</p>
              <a href={`${base}${link.href}`}>Open {link.title} docs →</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
