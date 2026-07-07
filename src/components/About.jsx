import { about } from '../data/site.js'
import { aboutImage } from '../data/projects.js'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.image}>
        <img src={aboutImage} alt="Основатель ME Event" loading="lazy" />
      </div>

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          <p className="section-kicker" style={{ textAlign: 'left' }}>
            ME Event Agency
          </p>
          <h2 className={styles.title}>{about.title}</h2>
          {about.paragraphs.map((text, i) => (
            <p key={i} className={styles.text}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
