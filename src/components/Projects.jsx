import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import styles from './Projects.module.css'

export default function Projects() {
  // Предзагружаем hero-картинки проектов заранее, пока пользователь на главной:
  // при клике на карточку страница проекта покажет свой hero сразу из кэша.
  // Низкий приоритет + requestIdleCallback — чтобы не отнимать канал у самой
  // главной (слайдер, обложки грузятся первыми).
  useEffect(() => {
    const preload = () => {
      projects.forEach((p) => {
        const img = new Image()
        img.fetchPriority = 'low'
        img.src = p.hero
      })
    }
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(preload, { timeout: 3000 })
      return () => window.cancelIdleCallback?.(id)
    }
    const t = setTimeout(preload, 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <p className="section-kicker">Портфолио</p>
        <h2 className="section-title">Наши проекты</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className={styles.card}
            >
              <div className={styles.media}>
                <img
                  src={project.cover}
                  alt={project.title}
                  loading="lazy"
                  style={project.coverFocus ? { objectPosition: project.coverFocus } : undefined}
                />
                <span className={styles.view}>Смотреть</span>
              </div>
              <div className={styles.meta}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                {project.subtitle && (
                  <span className={styles.subtitle}>{project.subtitle}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
