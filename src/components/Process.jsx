import { process } from '../data/site.js'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className="container">
        <p className="section-kicker">Этапы работы</p>
        <h2 className="section-title">{process.title}</h2>

        {/* Горизонтальный таймлайн: линия по центру, текст сверху/снизу.
            Без горизонтального скролла — на мобильных переходит в вертикальный. */}
        <div className={styles.timeline}>
          {process.steps.map((step, i) => (
            <div
              key={step.num}
              className={`${styles.item} ${i % 2 === 0 ? styles.up : styles.down}`}
            >
              <span className={styles.node}>{step.num}</span>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
