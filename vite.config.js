import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // На GitHub Pages сайт живёт по адресу https://<user>.github.io/events/,
  // поэтому в продакшн-сборке базовый путь — /events/. В dev остаётся /.
  base: command === 'build' ? '/events/' : '/',
  server: {
    port: 5173,
    open: true,
  },
}))
