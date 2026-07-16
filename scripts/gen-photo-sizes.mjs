// Генерирует src/data/photoSizes.js — размеры всех фото из public/photos.
// Размеры нужны галерее, чтобы резервировать место под картинку (без CLS).
//
// Запуск после добавления/замены фото:
//   npm run photo-sizes
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'

const ROOT = 'public/photos'
const OUT = 'src/data/photoSizes.js'

// sips — системная утилита macOS; читает размеры без внешних зависимостей.
const dimensions = (file) => {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file], {
    encoding: 'utf8',
  })
  const w = out.match(/pixelWidth:\s*(\d+)/)?.[1]
  const h = out.match(/pixelHeight:\s*(\d+)/)?.[1]
  if (!w || !h) throw new Error(`Не удалось прочитать размеры: ${file}`)
  return [Number(w), Number(h)]
}

const entries = []
for (const folder of readdirSync(ROOT)) {
  const dir = join(ROOT, folder)
  if (!statSync(dir).isDirectory()) continue
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.webp')) continue
    const name = file.replace(/\.webp$/, '')
    entries.push([`${folder}/${name}`, dimensions(join(dir, file))])
  }
}

entries.sort(([a], [b]) => a.localeCompare(b))

const body = entries.map(([k, [w, h]]) => `  '${k}': [${w}, ${h}],`).join('\n')
writeFileSync(
  OUT,
  `// Авто-сгенерировано: размеры фото для резервирования места (без CLS).
// Ключ — 'папка/имя', значение — [ширина, высота].
// Не редактировать вручную: npm run photo-sizes
export const photoSizes = {
${body}
}
`
)

console.log(`photoSizes.js обновлён: ${entries.length} фото`)
