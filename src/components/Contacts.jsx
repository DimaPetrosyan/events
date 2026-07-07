import { site } from '../data/site.js'
import { contactsImage } from '../data/projects.js'
import styles from './Contacts.module.css'

export default function Contacts() {
  const { contacts } = site
  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.image}>
        <img src={contactsImage} alt="ME Event" loading="lazy" />
      </div>

      <div className={styles.body}>
        <div className={styles.inner}>
          <p className="section-kicker" style={{ textAlign: 'left' }}>
            Свяжитесь с нами
          </p>
          <h2 className={styles.title}>Контакты</h2>
          <p className={styles.lead}>
            Расскажите о вашем событии — мы поможем воплотить его со вкусом.
          </p>

          <div className={styles.rows}>
            <a href={contacts.phoneHref} className={styles.row}>
              <span className={styles.label}>Телефон</span>
              <span className={styles.value}>{contacts.phone}</span>
            </a>
            <a href={contacts.emailHref} className={styles.row}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>{contacts.email}</span>
            </a>
            {contacts.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={styles.row}
              >
                <span className={styles.label}>{s.label}</span>
                <span className={styles.value}>{s.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
