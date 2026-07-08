import { process } from '../data/site.js'
import styles from './Process.module.css'

export default function Process() {
  // Разбиваем этапы на две линии по 4 — так просторнее
  const rows = []
  for (let i = 0; i < process.steps.length; i += 4) {
    rows.push(process.steps.slice(i, i + 4))
  }

  return (
    <section className={styles.process} id="process">
      <div className="container">
        <h2 className="section-title">{process.title}</h2>

        {/* Два горизонтальных таймлайна: линия по центру, текст сверху/снизу.
            Без горизонтального скролла — на мобильных переходят в вертикальные. */}
        <div className={styles.timelines}>
          {rows.map((row, rowIdx) => (
            <div className={styles.timeline} key={rowIdx}>
              {row.map((step, j) => {
                const globalIdx = rowIdx * 4 + j
                return (
                  <div
                    key={step.num}
                    className={`${styles.item} ${
                      globalIdx % 2 === 0 ? styles.up : styles.down
                    }`}
                  >
                    <span className={styles.node}>{step.num}</span>
                    <div className={styles.content}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepText}>{step.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
