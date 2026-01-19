const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.{ts,tsx,css}')
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--riddim-bg)',
        panel: 'var(--riddim-panel)',
        accent: 'var(--riddim-accent)',
        accent2: 'var(--riddim-accent-2)',
        text: 'var(--riddim-text)',
        muted: 'var(--riddim-muted)',
        border: 'var(--riddim-border)'
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
