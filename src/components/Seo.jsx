import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://dimapetrosyan.github.io/events'

export default function Seo({
  title,
  description,
  path = '/',
  image = `${SITE_URL}/og-image.png`,
}) {
  const fullTitle = title
    ? `${title} — Студия МЕ`
    : 'Студия МЕ — организация свадеб и праздников под ключ'
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
