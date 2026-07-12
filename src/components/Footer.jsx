import { site } from '../data/site.js'
import logo from '../assets/logo.svg'
import styles from './Footer.module.css'

export default function Footer() {
  const year = 2026
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Явные размеры (соотношение сторон логотипа при высоте 64px) —
            резервируют бокс до применения CSS, чтобы SVG не «прыгал». */}
        <img className={styles.brand} src={logo} alt={site.brand} width="146" height="64" />
        <div className={styles.socials}>
          {site.contacts.socials
            .filter((s) => s.href)
            .map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
        </div>
        <span className={styles.copy}>
          © {year} {site.brand}. Все права защищены.
        </span>
      </div>
    </footer>
  )
}
