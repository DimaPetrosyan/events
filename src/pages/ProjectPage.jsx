import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import Seo from '../components/Seo.jsx'
import { getProject, projects } from '../data/projects.js'
import { photoSizes } from '../data/photoSizes.js'
import styles from './ProjectPage.module.css'

// Ключ 'папка/имя' из URL фото — для поиска его размеров (резервируем место, без CLS)
const sizeOf = (src) => photoSizes[src.split('/photos/')[1]?.replace('.webp', '')]

// В галерее все кадры одной ориентации должны быть одной высоты, иначе сетка
// выглядит неровной: у исходников пропорции гуляют (2000×1331…2000×1360,
// 1333×2000…1500×2000), и «выпадающие» кадры выше соседей на десятки пикселей.
// Поэтому подставляем единый бокс — 3:2 для горизонтальных, 2:3 для вертикальных;
// лишнее подрезает object-fit: cover (в лайтбоксе фото открывается целиком).
const GALLERY_BOX = { landscape: [1500, 1000], portrait: [1000, 1500] }
const isPortrait = (src) => {
  const size = sizeOf(src)
  return !!size && size[1] > size[0]
}
const boxOf = (src) =>
  sizeOf(src) ? GALLERY_BOX[isPortrait(src) ? 'portrait' : 'landscape'] : [undefined, undefined]

// Количество колонок галереи в зависимости от ширины экрана
function useColumnCount() {
  const [cols, setCols] = useState(3)
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      setCols(w <= 560 ? 1 : w <= 900 ? 2 : 3)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])
  return cols
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  const columnCount = useColumnCount()

  // Лайтбокс: индекс открытого фото или null
  const [lightbox, setLightbox] = useState(null)
  const gallery = project?.gallery || []
  const total = gallery.length

  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(
    () => setLightbox((i) => (i - 1 + total) % total),
    [total]
  )
  const next = useCallback(() => setLightbox((i) => (i + 1) % total), [total])

  // Свайп по фото на мобильных: запоминаем точку касания и по её сдвигу
  // листаем. Влево — следующее фото, вправо — предыдущее.
  const touchStart = useRef(null)
  const onTouchStart = (e) => {
    const t = e.changedTouches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    // Реагируем только на заметный горизонтальный жест (не на вертикальный/тап)
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next()
      else prev()
    }
  }

  // Клавиатура + блокировка прокрутки, пока открыт лайтбокс
  useEffect(() => {
    if (lightbox === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, prev, next])

  if (!project) {
    return (
      <section className={styles.missing}>
        <h1>Проект не найден</h1>
        <Link to="/#projects" state={{ instant: true }} className={styles.back}>
          ← Ко всем проектам
        </Link>
      </section>
    )
  }

  // Соседние проекты (без цикла: у первого нет «назад», у последнего — «вперёд»)
  const idx = projects.findIndex((p) => p.slug === slug)
  const prevProject = idx > 0 ? projects[idx - 1] : null
  const nextProject = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <article className={styles.page}>
      <Seo
        title={project.title}
        description={`${project.title}${project.subtitle ? ` — ${project.subtitle}` : ''} от ME Event Agency.`}
        path={`/project/${project.slug}`}
        image={project.hero}
        preloadImage={project.hero}
      />

      {/* Большое фото в начале */}
      <header
        className={styles.hero}
        style={{
          backgroundImage: `url(${project.hero})`,
          backgroundPosition: project.heroFocus || 'center 25%',
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          {project.subtitle && (
            <span className={styles.heroKicker}>{project.subtitle}</span>
          )}
          <h1 className={styles.heroTitle}>{project.title}</h1>
        </div>
      </header>

      {/* Переключение между проектами */}
      <nav className={styles.projectNav}>
        {prevProject && (
          <Link to={`/project/${prevProject.slug}`} className={styles.navPrev}>
            <span className={styles.navArrow}>←</span>
            <span>{prevProject.title}</span>
          </Link>
        )}
        {nextProject && (
          <Link to={`/project/${nextProject.slug}`} className={styles.navNext}>
            <span>{nextProject.title}</span>
            <span className={styles.navArrow}>→</span>
          </Link>
        )}
      </nav>

      {/* Описание проекта */}
      {project.description && (
        <section className={styles.description}>
          <div className="container">
            <p className={styles.descriptionText}>{project.description}</p>
          </div>
        </section>
      )}

      {/* Галерея — masonry на flex-колонках, клик открывает лайтбокс */}
      <section className={styles.gallery}>
        {Array.from({ length: columnCount }, (_, col) => (
          <div key={col} className={styles.galleryCol}>
            {gallery
              .map((src, i) => ({ src, i }))
              .filter(({ i }) => i % columnCount === col)
              .map(({ src, i }) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.galleryItem} ${
                    isPortrait(src) ? styles.portrait : ''
                  }`}
                  onClick={() => setLightbox(i)}
                  aria-label={`Открыть фото ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`${project.title} — фото ${i + 1}`}
                    width={boxOf(src)[0]}
                    height={boxOf(src)[1]}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
          </div>
        ))}
      </section>

      <div className={styles.backWrap}>
        <Link to="/#projects" state={{ instant: true }} className={styles.back}>
          ← Ко всем проектам
        </Link>
      </div>

      {/* Лайтбокс-слайдер */}
      {lightbox !== null && (
        <div
          className={styles.lightbox}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className={styles.lbClose} onClick={close} aria-label="Закрыть">
            ×
          </button>
          <button
            className={`${styles.lbArrow} ${styles.lbPrev}`}
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Предыдущее фото"
          >
            ‹
          </button>
          <img
            className={styles.lbImg}
            src={gallery[lightbox]}
            alt={`${project.title} — фото ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={`${styles.lbArrow} ${styles.lbNext}`}
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Следующее фото"
          >
            ›
          </button>
          <span className={styles.lbCounter}>
            {lightbox + 1} / {total}
          </span>
        </div>
      )}
    </article>
  )
}
