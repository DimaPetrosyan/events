// Данные проектов для секции «Наши проекты» и отдельных страниц.

import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'
import hero4 from '../assets/hero-4.jpg'
import contactsPhoto from '../assets/contacts.jpg'
import aboutPhoto from '../assets/about.jpg'

// Слайдер первой секции — реальные фотографии.
// focus — точка фокуса (background-position): на узких/мобильных экранах
// пейзажные фото кадрируются по центру, focus держит субъект в кадре.
export const heroSlides = [
  { src: hero1, focus: '50% 50%' },
  { src: hero2, focus: '50% 45%' },
  { src: hero3, focus: '30% 50%' },
  { src: hero4, focus: '40% 62%' },
]

export const aboutImage = aboutPhoto

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
    // Головы пары высоко в кадре — смещаем к верху, чтобы не срезались
    heroFocus: 'center 8%',
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
    title: 'Русская сказка',
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
    title: 'Магия в лесу',
    cover: projectPhoto('lesnaya-skazka', 'photo_16_2026-07-10_11-32-32'),
    hero: projectPhoto('lesnaya-skazka', '928'),
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('lesnaya-skazka', [
      // новые фото (Telegram) — идут раньше существующих
      'photo_2_2026-07-10_11-32-32', 'photo_5_2026-07-10_11-32-32',
      'photo_14_2026-07-10_11-32-32', 'photo_9_2026-07-10_11-32-32',
      'photo_24_2026-07-10_11-32-32', 'photo_1_2026-07-10_11-32-32',
      'photo_18_2026-07-10_11-32-32', 'photo_25_2026-07-10_11-32-32',
      'photo_11_2026-07-10_11-32-32', 'photo_7_2026-07-10_11-32-32',
      'photo_20_2026-07-10_11-32-32', 'photo_3_2026-07-10_11-32-32',
      'photo_16_2026-07-10_11-32-32', 'photo_23_2026-07-10_11-32-32',
      'photo_6_2026-07-10_11-32-32', 'photo_12_2026-07-10_11-32-32',
      'photo_26_2026-07-10_11-32-32', 'photo_8_2026-07-10_11-32-32',
      'photo_19_2026-07-10_11-32-32', 'photo_4_2026-07-10_11-32-32',
      'photo_15_2026-07-10_11-32-32', 'photo_22_2026-07-10_11-32-32',
      'photo_10_2026-07-10_11-32-32', 'photo_21_2026-07-10_11-32-32',
      'photo_13_2026-07-10_11-32-32', 'photo_17_2026-07-10_11-32-32',
      // существующие
      '135', '1010', '42', '182', '928', '3', '51', '745', '875', '932',
      '946', '96', '995', '1002',
    ]),
  },
  {
    slug: 'vne-koncepta',
    title: 'Корпоратив «Вне концепта»',
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
    title: 'Свадебная прогулка',
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
  {
    slug: 'ogni-sudby',
    title: 'Огни судьбы',
    cover: projectPhoto('ogni-sudby', '636'),
    // Пара стоит высоко в кадре — сдвигаем обложку вниз, чтобы головы не резались
    coverFocus: 'center 25%',
    // Все фото блока — портретные, поэтому превью держим со смещением к верху
    hero: projectPhoto('ogni-sudby', '640'),
    heroFocus: 'center 33%',
    review: REVIEW_PLACEHOLDER,
    gallery: gallery('ogni-sudby', [
      '154', '437', '119', '640', '39', '567', '176', '446', '75', '261',
      '466', '194', '765', '67', '429', '718', '630', '711', '408-2',
    ]),
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
