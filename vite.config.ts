import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace the `{DEMO_NAME}` with the corresponding demo names; `initial-version`, `abstract-version` or `framer-motion`.
  base: '/untitled-case-study-css-animations-with-react/demos/abstract-version/',
})
