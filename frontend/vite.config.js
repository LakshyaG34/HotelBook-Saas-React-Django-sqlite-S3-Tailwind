// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'], // just strings here
      },
    }),
    tailwindcss(), // tailwind is a Vite plugin, not a babel plugin
  ],
})
