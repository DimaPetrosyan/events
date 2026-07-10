import { useState, useEffect } from 'react'
import { heroSlides } from '../data/projects.js'
import { site } from '../data/site.js'
import styles from './Hero.module.css'

const INTERVAL = 3500

export default function Hero() {
  const [index, setIndex] = useState(0)
  // Грузим фоны слайдов лениво: на старте только первый, остальные — когда
  // становятся активными. Экономит ~1 МБ трафика при открытии главной.
  const [loaded, setLoaded] = useState(() => new Set([0]))

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setLoaded((prev) => (prev.has(index) ? prev : new Set(prev).add(index)))
  }, [index])

  return (
    <section className={styles.hero} id="top">
      <div className={styles.slides}>
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${i === index ? styles.active : ''}`}
            style={{
              backgroundImage: loaded.has(i) ? `url(${slide.src})` : undefined,
              backgroundPosition: slide.focus,
            }}
            aria-hidden={i !== index}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.kicker}>Event Agency</p>
        <h1 className={styles.title}>{site.tagline}</h1>
        <a href="#projects" className={styles.cta}>
          Смотреть проекты
        </a>
      </div>

      <div className={styles.dots}>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            aria-label={`Слайд ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
