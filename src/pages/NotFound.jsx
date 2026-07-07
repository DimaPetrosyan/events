import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Страница не найдена" description="Страница не найдена" path="/404" />
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          textAlign: 'center',
          padding: '120px 24px',
        }}
      >
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 90px)' }}>404</h1>
        <p style={{ color: 'var(--color-muted)' }}>
          К сожалению, такой страницы не существует.
        </p>
        <Link
          to="/"
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            fontSize: 13,
            padding: '14px 34px',
            border: '1px solid var(--color-line)',
          }}
        >
          На главную
        </Link>
      </section>
    </>
  )
}
