// Готовит корень статики для локального просмотра ПРОД-сборки так, как её
// отдаёт GitHub Pages: сайт живёт под /events/, поэтому создаём папку
// .local-preview с симлинком events → dist. Дальше её раздаёт `serve`
// (обычный статический сервер: чистые URL, отдаёт вложенные .../index.html,
// без SPA-фолбэка — в отличие от `vite preview`, который затеняет
// пререндеренные страницы корневым index.html).
import { rmSync, mkdirSync, symlinkSync } from 'node:fs'

const root = '.local-preview'
rmSync(root, { recursive: true, force: true })
mkdirSync(root, { recursive: true })
symlinkSync('../dist', `${root}/events`, 'dir')

console.log('Прод-сборка слинкована: .local-preview/events → dist')
console.log('Открой http://localhost:4180/events/')
