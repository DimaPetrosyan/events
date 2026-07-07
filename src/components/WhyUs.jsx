import { whyUs } from '../data/site.js'
import { whyImages } from '../data/projects.js'
import styles from './WhyUs.module.css'

export default function WhyUs() {
  return (
    <section className={styles.why} id="why">
      <div className="container">
        <p className="section-kicker">Наши принципы</p>
        <h2 className="section-title">{whyUs.title}</h2>

        <div className={styles.grid}>
          {whyUs.cards.map((card, i) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.media}>
                <img
                  src={whyImages[i % whyImages.length]}
                  alt={card.title}
                  loading="lazy"
                />
              </div>
              <div className={styles.caption}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
