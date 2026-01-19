/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
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
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'Menlo', 'monospace']
      }
    }
  },
  plugins: []
}
