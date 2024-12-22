import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

/// <reference types="vitest/config" />
export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [
      'test/vitest/setup-file.ts'
    ],
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: ['text', 'json', 'html'],
      // reportsDirectory: './tests/unit/coverage'
    },
  },
})
