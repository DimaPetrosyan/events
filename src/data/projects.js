// Данные проектов для секции «Наши проекты» и отдельных страниц.
//
// ВАЖНО: сейчас используются временные изображения-заглушки (picsum.photos)
// со стабильными seed'ами, чтобы сайт сразу выглядел наполненным.
// Чтобы подставить реальные фото — положите их в /public/images/
// и замените ссылки ниже на пути вида '/images/tanec-1.jpg'.

import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'
import hero4 from '../assets/hero-4.jpg'
import contactsPhoto from '../assets/contacts.jpg'
import aboutPhoto from '../assets/about.jpg'

const ph = (seed, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

// Слайдер первой секции — реальные фотографии.
// focus — точка фокуса (background-position): на узких/мобильных экранах
// пейзажные фото кадрируются по центру, focus держит субъект в кадре.
export const heroSlides = [
  { src: hero1, focus: '50% 50%' },
  { src: hero2, focus: '50% 45%' },
  { src: hero3, focus: '30% 50%' },
  { src: hero4, focus: '45% 50%' },
]

export const aboutImage = aboutPhoto

// Изображения для карточек секции «Почему мы?»
export const whyImages = [
  ph('me-why-1', 800, 1000),
  ph('me-why-2', 800, 1000),
  ph('me-why-3', 800, 1000),
  ph('me-why-4', 800, 1000),
  ph('me-why-5', 800, 1000),
]

export const contactsImage = contactsPhoto

// Путь к реальным фото проектов (лежат в public/photos/<папка>/<номер>.jpg).
// import.meta.env.BASE_URL учитывает базовый путь /events/ на GitHub Pages.
const projectPhoto = (folder, name) =>
  `${import.meta.env.BASE_URL}photos/${folder}/${name}.jpg`

export const projects = [
  {
    slug: 'zimnyaya-skazka',
    title: 'Зимняя сказка',
    // Обложка карточки
    cover: projectPhoto('zima', '48'),
    // Большое горизонтальное фото-превью вверху страницы
    hero: projectPhoto('zima', '1099'),
    // TODO: отзыв — заглушка, заменить реальным текстом клиента
    review: {
      author: '',
      text: 'Здесь будет отзыв о мероприятии.',
    },
    // Все фото в хаотичном порядке (портретные и горизонтальные вперемешку)
    gallery: [
      '1224', '3', '0056', '48', '1769', '12', '0530', '0068', '2206',
      '26', '0811', '14', '0061', '35', '1099', '0786', '47', '4',
      '1257', '0848', '50', '0699', '0845', '1186', '2192', '0052', '38',
      '0829', '0285', '1818', '0050',
    ].map((n) => projectPhoto('zima', n)),
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
