import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function getBasePath() {
  // GitHub Pages project site: https://Saichandu02.github.io/Portfolio/
  // Keep this as /Portfolio/ for the Portfolio repository.
  // For a custom domain, change VITE_BASE_PATH in .github/workflows/deploy.yml to '/'.
  return process.env.VITE_BASE_PATH || '/Portfolio/'
}

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: getBasePath(),
  plugins: [figmaAssetResolver(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
