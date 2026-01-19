import './style.css'

const app = document.querySelector('#app')
const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL

app.innerHTML = `
  <main class="wrap">
    <header class="hero">
      <p class="eyebrow">riddim</p>
      <h1>Docs Hub</h1>
      <p class="lede">Explore development, user, and ops guides. Antora outputs are bundled below.</p>
      <div class="actions">
        <a class="btn" href="${base}/antora/development/0.1/index.html">Development</a>
        <a class="btn" href="${base}/antora/user/0.1/index.html">User</a>
        <a class="btn" href="${base}/antora/ops/0.1/index.html">Ops</a>
      </div>
    </header>
    <section class="section">
      <h2>What's inside</h2>
      <ul class="cards">
        <li>
          <h3>Development</h3>
          <p>Architecture, DSL, scheduler, build/run instructions.</p>
          <a href="${base}/antora/development/0.1/index.html">Open Development docs →</a>
        </li>
        <li>
          <h3>User</h3>
          <p>How to trigger sounds and run the API without deep internals.</p>
          <a href="${base}/antora/user/0.1/index.html">Open User docs →</a>
        </li>
        <li>
          <h3>Ops</h3>
          <p>Deployment, env config, and monitoring entry points.</p>
          <a href="${base}/antora/ops/0.1/index.html">Open Ops docs →</a>
        </li>
      </ul>
    </section>
  </main>
`
