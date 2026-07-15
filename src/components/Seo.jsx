import { Head } from 'vite-react-ssg'

// Полный адрес сайта для SEO-мета (canonical, og:url, og:image).
// По умолчанию — GitHub Pages. Для другого домена задай при сборке:
//   VITE_SITE_URL=https://zapp.handyhost.ru
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://dimapetrosyan.github.io/events'

export default function Seo({
  title,
  description,
  path = '/',
  image = `${SITE_URL}/og-image.png`,
  // URL главного изображения страницы (hero). Если задан — предзагружаем его
  // с высоким приоритетом, чтобы фон-картинка начинала грузиться сразу, а не
  // после отрисовки элемента. Фоновые картинки не бывают lazy, но и не
  // приоритетны — preload делает их «нелениво» загружаемыми.
  preloadImage,
}) {
  const fullTitle = title
    ? `${title} — Студия МЕ`
    : 'Студия МЕ — организация свадеб и праздников под ключ'
  const url = `${SITE_URL}${path}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {preloadImage && (
        <link rel="preload" as="image" href={preloadImage} fetchpriority="high" />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
