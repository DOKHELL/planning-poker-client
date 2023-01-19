import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssRTL from 'postcss-rtlcss'
import autoprefixer from 'autoprefixer'
import { checker } from 'vite-plugin-checker'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
      },
    })
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
