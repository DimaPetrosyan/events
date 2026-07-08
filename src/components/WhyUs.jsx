import { whyUs } from '../data/site.js'
import styles from './WhyUs.module.css'

export default function WhyUs() {
  return (
    <section className={styles.why} id="why">
      <div className="container">
        <p className="section-kicker">Наши принципы</p>
        <h2 className="section-title">{whyUs.title}</h2>

        <div className={styles.grid}>
          {whyUs.cards.map((card) => (
            <article key={card.num} className={styles.card}>
              <span className={styles.num}>{card.num}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
