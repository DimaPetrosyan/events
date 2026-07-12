import Layout from './App.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { projects } from './data/projects.js'

// Маршруты в формате data-router (react-router v6) — их использует
// vite-react-ssg, чтобы отрендерить каждую страницу в статический HTML.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'project/:slug',
        element: <ProjectPage />,
        // Какие динамические пути пререндерить: по одной странице на проект.
        getStaticPaths: () => projects.map((p) => `/project/${p.slug}`),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]
