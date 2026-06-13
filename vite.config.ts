import { defineConfig, transformWithOxc } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // For Qingningiii.github.io (user site), base is '/' (default).
  // Build output goes to docs/ so GitHub Pages can serve from the docs folder
  // on the main branch (Settings → Pages → Branch: main, Folder: /docs).
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [
    // crosshair.jsx uses TypeScript type annotations inside a .jsx file.
    // Vite 8's oxc parser rejects TypeScript in .jsx files, so this pre-plugin
    // strips the TS types (lang: 'tsx') while preserving JSX for the react
    // plugin and vite:oxc to handle normally afterwards.
    {
      name: 'jsx-ts-support',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.endsWith('.jsx')) return null
        return transformWithOxc(code, id, { lang: 'tsx', jsx: 'preserve' } as never)
      },
    },
    react(),
  ],
})
