import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? (process.env.DEPLOY_BASE || '/events/') : '/',
  server: {
    port: 5173,
    open: true,
  },
  // Опции пререндера vite-react-ssg.
  ssgOptions: {
    // nested: /project/slug → /project/slug/index.html.
    // Отдаёт чистые URL на GitHub Pages без опоры на .html-фолбэк.
    dirStyle: 'nested',
    // Инлайнит критический (above-the-fold) CSS прямо в <head> каждой
    // страницы — первый кадр после SSG-пререндера сразу стилизован, без FOUC.
    // Остальной CSS подгружается обычным <link> следом.
    beastiesOptions: {},
  },
}))
