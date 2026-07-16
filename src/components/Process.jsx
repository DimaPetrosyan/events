import { useRef, useState, useEffect, useCallback } from 'react'
import { process } from '../data/site.js'
import styles from './Process.module.css'

export default function Process() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // Куда ещё можно листать. Запас в 1px — браузер отдаёт scrollLeft дробным
  // и до конца не дотягивает.
  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 1)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  // Листаем на один этап штатной прокруткой браузера
  const slide = (dir) => {
    const el = trackRef.current
    if (!el) return
    const item = el.querySelector('article')
    const step = item ? item.getBoundingClientRect().width : el.clientWidth
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className={styles.process} id="process">
      <div className="container">
        <p className="section-kicker">Этапы работы</p>
        <h2 className="section-title">{process.title}</h2>

        {/* Тень у края показывает, что этапы продолжаются за рамкой экрана */}
        <div
          className={[
            styles.slider,
            atStart ? '' : styles.fadeLeft,
            atEnd ? '' : styles.fadeRight,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {/* Стрелку прячем совсем, когда листать в эту сторону нечего */}
          {!atStart && (
            <button
              type="button"
              className={`${styles.arrow} ${styles.prev}`}
              onClick={() => slide(-1)}
              aria-label="Предыдущий этап"
            >
              ←
            </button>
          )}

          <div className={styles.track} ref={trackRef}>
            {process.steps.map((step) => (
              <article key={step.num} className={styles.item}>
                <span className={styles.node}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </article>
            ))}
          </div>

          {!atEnd && (
            <button
              type="button"
              className={`${styles.arrow} ${styles.next}`}
              onClick={() => slide(1)}
              aria-label="Следующий этап"
            >
              →
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
