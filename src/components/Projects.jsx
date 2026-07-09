import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import styles from './Projects.module.css'

export default function Projects() {
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
                <img src={project.cover} alt={project.title} loading="lazy" />
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
