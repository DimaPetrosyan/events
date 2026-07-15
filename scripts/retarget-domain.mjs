// Пост-обработка прод-сборки для деплоя в КОРЕНЬ произвольного домена
// (например HandyHost), а не на GitHub Pages под /events/.
//
// Зачем нужно: часть абсолютных SEO-ссылок зашита статически и не зависит
// от env-переменных сборки — JSON-LD в шаблоне index.html, sitemap.xml и
// robots.txt (копируются из public/ как есть). Этот скрипт проходит по всей
// папке dist и заменяет старый адрес GitHub Pages на целевой домен.
//
// Запуск (обычно через npm run build:handyhost, домен берётся из env):
//   SITE_URL=https://zapp.handyhost.ru node scripts/retarget-domain.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const DIST = 'dist'
// Что меняем: полный prod-адрес GitHub Pages (со схемой и /events).
const FROM = 'https://dimapetrosyan.github.io/events'
// На что: целевой домен без завершающего слэша.
const TO = (process.env.SITE_URL || '').replace(/\/+$/, '')

if (!TO) {
  console.error('Ошибка: не задан SITE_URL. Пример:')
  console.error('  SITE_URL=https://zapp.handyhost.ru node scripts/retarget-domain.mjs')
  process.exit(1)
}

// Текстовые расширения, внутри которых имеет смысл искать абсолютные ссылки.
const TEXT_EXT = new Set(['.html', '.xml', '.txt', '.json', '.js', '.css', '.webmanifest'])

let filesChanged = 0
let hits = 0

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      walk(full)
      continue
    }
    const dot = entry.lastIndexOf('.')
    const ext = dot === -1 ? '' : entry.slice(dot)
    if (!TEXT_EXT.has(ext)) continue

    const before = readFileSync(full, 'utf8')
    if (!before.includes(FROM)) continue

    const count = before.split(FROM).length - 1
    writeFileSync(full, before.split(FROM).join(TO))
    filesChanged++
    hits += count
  }
}

walk(DIST)
console.log(`Домен переназначен: ${FROM} → ${TO}`)
console.log(`Изменено файлов: ${filesChanged}, замен: ${hits}`)
