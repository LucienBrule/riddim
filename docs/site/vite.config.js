import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
  base: '/riddim/docs/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, '../build/docs-site/**/*'),
          dest: 'antora'
        }
      ]
    })
  ],
  build: {
    outDir: 'dist/docs'
  }
})
