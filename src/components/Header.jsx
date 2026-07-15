import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import logo from '../assets/logo.svg'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Блокируем прокрутку страницы, пока открыто мобильное меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
        open ? styles.menuOpen : ''
      }`}
    >
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)} aria-label={site.brand}>
          {/* Явные размеры (соотношение сторон логотипа 546×240 при высоте 58px)
              резервируют корректный бокс ещё до применения CSS — иначе при
              перезагрузке SSG-страницы SVG на миг показывается в натуральную
              величину и «прыгает», ужимаясь до нужного размера. */}
          <img src={logo} alt={site.brand} width="81" height="58" />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {site.nav.map((item) =>
            onHome ? (
              // На главной — обычный якорь (плавная прокрутка внутри страницы)
              <a
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              // С других страниц — клиентский переход к разделу без анимации
              <Link
                key={item.href}
                to={`/${item.href}`}
                state={{ instant: true }}
                className={styles.navLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          className={styles.burger}
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.barTop : ''} />
          <span className={open ? styles.barMid : ''} />
          <span className={open ? styles.barBot : ''} />
        </button>
      </div>
    </header>
  )
}
