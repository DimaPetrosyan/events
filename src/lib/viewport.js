// Мин. ширина, с которой считаем экран «ноутбучным». Клавиатурная навигация
// по слайдерам включается только от неё — на тач-устройствах не нужна.
const LAPTOP_MIN_WIDTH = 1024

export const isLaptop = () => window.innerWidth >= LAPTOP_MIN_WIDTH

// Элемент сейчас занимает вертикальный центр экрана?
export const isElAtViewportCenter = (el) => {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  const mid = window.innerHeight / 2
  return rect.top <= mid && rect.bottom >= mid
}

// То же по id секции. По этому признаку решаем, какой слайдер слушает стрелки:
// hero вверху или этапы «Как мы работаем». Секции по вертикали не пересекаются,
// поэтому «в центре» окажется максимум одна.
export const isSectionAtViewportCenter = (id) =>
  isElAtViewportCenter(document.getElementById(id))
