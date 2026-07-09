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

const gallery = (folder, names) => names.map((n) => projectPhoto(folder, n))

// TODO: отзывы — заглушка, заменить реальными текстами клиентов
const REVIEW_PLACEHOLDER = { author: '', text: 'Здесь будет отзыв о мероприятии.' }

// Фото каждого блока — в хаотичном порядке (портретные и горизонтальные вперемешку).
// cover — обложка карточки, hero — большое горизонтальное фото-превью страницы.
export const projects = [
  {
    slug: 'zimnyaya-skazka',
    title: 'Зимняя сказка',
    cover: projectPhoto('zima', '48'),
    hero: projectPhoto('zima', '1099'),
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('zima', [
      '1224', '3', '0056', '48', '1769', '12', '0530', '0068', '2206',
      '26', '0811', '14', '0061', '35', '1099', '0786', '47', '4',
      '1257', '0848', '50', '0699', '0845', '1186', '2192', '0052', '38',
      '0829', '0285', '1818', '0050',
    ]),
  },
  {
    slug: 'evangelina',
    title: 'Евангелине 10 лет',
    cover: projectPhoto('evangelina', '00098'),
    hero: projectPhoto('evangelina', '00019'),
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('evangelina', [
      '00166', '00014', '00002', '00048', '00079', '00054', '00031',
      '00062', '00195', '00091', '00047', '00103', '00003', '00136',
      '00059', '00244', '00013', '00058', '00098', '00019',
    ]),
  },
  {
    slug: 'vypusknoy',
    title: 'Выпускной Школы «Президент»',
    cover: projectPhoto('vypusknoy', '006'),
    hero: projectPhoto('vypusknoy', '057'),
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('vypusknoy', [
      '484', '016', '057', '083', '098', '521', '006', '062', '023',
      '067', '084',
    ]),
  },
  {
    slug: 'alya-rus',
    title: 'Аля рус',
    cover: projectPhoto('alya-rus', '415'),
    hero: projectPhoto('alya-rus', '372'),
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('alya-rus', [
      '372', '326', '1131', '339', '415', '109', '1', '1099', '416',
      '1143', '367', '375', '1201', '409', '3', '446', '447', '451', '650',
    ]),
  },
  {
    slug: 'novyy-god-lkp',
    title: 'Новогодний корпоратив ЛКП',
    cover: projectPhoto('novyy-god-lkp', '1481'),
    hero: projectPhoto('novyy-god-lkp', '1386'),
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('novyy-god-lkp', [
      '1386', '108', '1243', '2', '1454', '383', '430', '403', '1311',
      '827', '1481', '417', '1', '763', '1398',
    ]),
  },
  {
    slug: 'lesnaya-skazka',
    title: 'Лесная сказка',
    cover: projectPhoto('lesnaya-skazka', '135'),
    hero: projectPhoto('lesnaya-skazka', '928'),
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('lesnaya-skazka', [
      '135', '1010', '42', '182', '928', '3', '51', '745', '875', '932',
      '946', '96', '995', '1002',
    ]),
  },
  {
    slug: 'vne-koncepta',
    title: 'Вне концепта',
    cover: projectPhoto('vne-koncepta', '069'),
    hero: projectPhoto('vne-koncepta', '046'),
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('vne-koncepta', [
      '046', '001', '073', '005', '047', '007', '069', '023', '065',
      '076', '169', '174', '195', '204', '209', '243', '248', '244',
    ]),
  },
  {
    slug: 'nasha-svadba',
    title: 'Наша свадьба',
    cover: projectPhoto('nasha-svadba', '4F9A3455-1'),
    hero: projectPhoto('nasha-svadba', '4F9A4025-1'),
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('nasha-svadba', [
      '4F9A4032', '4F9A3292', '4F9A3865', '4F9A3455-1', '4F9A3546-1',
      '4F9A3979-1', '4F9A3615', '4F9A4025-1', '4F9A3930-1', '4F9A3494-2',
      '4F9A3985', '4F9A3803-1', '4F9A3968-1', '4F9A3576-1', '4F9A4054-1',
      '4F9A3909-1', '4F9A3532-1', '4F9A4145-1', '4F9A3963-1', '4F9A3989-1',
      '4F9A4107-1',
    ]),
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
