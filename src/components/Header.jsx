import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
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

  // Ссылки-якоря работают только с главной. С других страниц ведём на /#anchor.
  const linkTo = (href) => (onHome ? href : `/${href}`)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          {site.brand}
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={linkTo(item.href)}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
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
