import { process } from '../data/site.js'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className="container">
        <p className="section-kicker">Этапы</p>
        <h2 className="section-title">{process.title}</h2>
      </div>

      {/* Горизонтальная лента шагов */}
      <div className={styles.track}>
        {process.steps.map((step) => (
          <div key={step.num} className={styles.step}>
            <span className={styles.num}>{step.num}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
