import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes.jsx'
import './styles/global.css'

// SSG-точка входа: vite-react-ssg сам оборачивает дерево в HelmetProvider
// и RouterProvider, поэтому здесь только маршруты и базовый путь.
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
})
