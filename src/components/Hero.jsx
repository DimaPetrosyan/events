import { useState, useEffect } from 'react'
import { heroSlides } from '../data/projects.js'
import { site } from '../data/site.js'
import { isSectionAtViewportCenter, isLaptop } from '../lib/viewport.js'
import styles from './Hero.module.css'

const INTERVAL = 3500

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  // Грузим все 4 фото слайдера сразу, чтобы переключения/анимация не лагали.
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image()
      img.src = slide.src
    })
  }, [])

  // Стрелки клавиатуры листают слайды — только на ноутбуках и только когда
  // hero сейчас по центру экрана (иначе стрелками управляет другая секция).
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      if (!isLaptop() || !isSectionAtViewportCenter('top')) return
      e.preventDefault()
      setIndex((i) =>
        e.key === 'ArrowLeft'
          ? (i - 1 + heroSlides.length) % heroSlides.length
          : (i + 1) % heroSlides.length
      )
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className={styles.hero} id="top">
      <div className={styles.slides}>
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${i === index ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundPosition: slide.focus,
            }}
            aria-hidden={i !== index}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.kicker}>События со смыслом</p>
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
