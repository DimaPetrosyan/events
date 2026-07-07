import { site } from '../data/site.js'
import styles from './Footer.module.css'

export default function Footer() {
  const year = 2026
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>{site.brand}</span>
        <div className={styles.socials}>
          {site.contacts.socials.map((s) => (
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
