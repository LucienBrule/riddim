(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=document.querySelector("#app"),r="/riddim/".endsWith("/")?"/riddim/".slice(0,-1):"/riddim/";a.innerHTML=`
  <main class="wrap">
    <header class="hero">
      <p class="eyebrow">riddim</p>
      <h1>Docs Hub</h1>
      <p class="lede">Explore development, user, and ops guides. Antora outputs are bundled below.</p>
      <div class="actions">
        <a class="btn" href="${r}/antora/development/0.1/index.html">Development</a>
        <a class="btn" href="${r}/antora/user/0.1/index.html">User</a>
        <a class="btn" href="${r}/antora/ops/0.1/index.html">Ops</a>
      </div>
    </header>
    <section class="section">
      <h2>What's inside</h2>
      <ul class="cards">
        <li>
          <h3>Development</h3>
          <p>Architecture, DSL, scheduler, build/run instructions.</p>
          <a href="${r}/antora/development/0.1/index.html">Open Development docs →</a>
        </li>
        <li>
          <h3>User</h3>
          <p>How to trigger sounds and run the API without deep internals.</p>
          <a href="${r}/antora/user/0.1/index.html">Open User docs →</a>
        </li>
        <li>
          <h3>Ops</h3>
          <p>Deployment, env config, and monitoring entry points.</p>
          <a href="${r}/antora/ops/0.1/index.html">Open Ops docs →</a>
        </li>
      </ul>
    </section>
  </main>
`;
