import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { getProject } from '../data/projects.js'
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <section className={styles.missing}>
        <h1>Проект не найден</h1>
        <Link to="/#projects" className={styles.back}>
          ← Ко всем проектам
        </Link>
      </section>
    )
  }

  return (
    <article className={styles.page}>
      <Seo
        title={project.title}
        description={`${project.title} — ${project.subtitle} от ME Event Agency. ${project.review.text.slice(0, 120)}`}
        path={`/project/${project.slug}`}
        image={project.hero}
      />

      {/* Большое фото в начале */}
      <header
        className={styles.hero}
        style={{ backgroundImage: `url(${project.hero})` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroKicker}>{project.subtitle}</span>
          <h1 className={styles.heroTitle}>{project.title}</h1>
        </div>
      </header>

      {/* Отзыв */}
      <section className={styles.review}>
        <div className="container">
          <p className={styles.quoteMark}>“</p>
          <blockquote className={styles.quote}>{project.review.text}</blockquote>
          <p className={styles.author}>— {project.review.author}</p>
        </div>
      </section>

      {/* Галерея мероприятия */}
      <section className={styles.gallery}>
        {project.gallery.map((src, i) => (
          <div key={i} className={styles.galleryItem}>
            <img src={src} alt={`${project.title} — фото ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </section>

      <div className={styles.backWrap}>
        <Link to="/#projects" className={styles.back}>
          ← Ко всем проектам
        </Link>
      </div>
    </article>
  )
}
