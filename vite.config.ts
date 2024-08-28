import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        [`css-with-unmounting`]: resolve(
          __dirname,
          'demos/css-with-unmounting/index.html',
        ),
        [`css-without-unmounting`]: resolve(
          __dirname,
          'demos/css-without-unmounting/index.html',
        ),
        [`framer-motion`]: resolve(__dirname, 'demos/framer-motion/index.html'),
        [`react-transition-group`]: resolve(
          __dirname,
          'demos/react-transition-group/index.html',
        ),
      },
    },
  },
  plugins: [react()],
  // Replace the `{DEMO_NAME}` with the corresponding demo names; `initial-version`, `abstract-version` or `framer-motion`.
  base: '/untitled-case-study-css-animations-with-react/demos/framer-motion/',
  build: {
    outDir: 'docs/demos/framer-motion/'
  }
})
