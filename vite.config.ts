import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
    __APP_EMAIL__: process.env.PROFILE_EMAIL,
  },
  plugins: [react(), tailwindcss(), tsconfigPaths(),
  // Custom plugin to load markdown files
  {
    name: "markdown-loader",
    transform(code, id) {
      if (id.endsWith(".md")) {
        // For .md files, get the raw content
        return `export default ${JSON.stringify(code)};`;
      }
    },
  },
],
})
