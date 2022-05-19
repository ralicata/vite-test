/// <reference types="vitest" />
/// <reference types="vite/client" />
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  test: {
    globals: true,
    watch: false,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  }
})
