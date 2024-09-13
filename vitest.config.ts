import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [Vue(), vueJsx()],
  test: {
    globals: true,
    clearMocks: true,
    environment: 'jsdom',
    reporters: ['default'],
    testTransformMode: {
      web: ['*.{ts,tsx}'],
    },
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      exclude: [
        'play/**',
        'packages/locale/lang/**',
        'packages/components/*/style/**',
      ],
    },
  },
})
