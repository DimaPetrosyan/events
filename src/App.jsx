import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollManager() {
  const { pathname, hash, state } = useLocation()
  useEffect(() => {
    if (hash) {
      // Прокрутка к нужному разделу (#projects, #why, ...).
      // Элемент может ещё не отрендериться после смены маршрута/при прямом
      // заходе по ссылке — поэтому пробуем несколько кадров подряд.
      // state.instant задаётся ссылкой «Ко всем проектам» → прыжок без анимации.
      const id = decodeURIComponent(hash.slice(1))
      const behavior = state?.instant ? 'instant' : 'smooth'
      let tries = 0
      let raf
      const scroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior, block: 'start' })
        } else if (tries++ < 30) {
          raf = requestAnimationFrame(scroll)
        }
      }
      raf = requestAnimationFrame(scroll)
      return () => cancelAnimationFrame(raf)
    }
    // Без хеша — мгновенно наверх при смене страницы
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, state])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
