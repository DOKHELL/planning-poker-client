import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssRTL from 'postcss-rtlcss'
import autoprefixer from 'autoprefixer'
import { checker } from 'vite-plugin-checker'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
      },
    }),
    eslint({})
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    postcss: {
      plugins: [ postcssRTL(), autoprefixer ]
    }
  }
})
