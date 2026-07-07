# ME Event — сайт event-агентства

Одностраничный сайт агентства (по мотивам me-event.ru) в минималистичном стиле,
собранный на **React + Vite** с **CSS Modules** и настроенным SEO.

## Запуск

```bash
npm install       # установка зависимостей (уже выполнена)
npm run dev       # локальный дев-сервер http://localhost:5173
npm run build     # продакшн-сборка в /dist
npm run preview   # предпросмотр собранной версии
```

## Структура

```
src/
  components/     # Header, Hero (авто-слайдер), About, WhyUs, Process,
                  # Projects, Contacts, Footer, Seo — каждый со своим *.module.css
  pages/          # Home, ProjectPage (страница мероприятия), NotFound
  data/
    site.js       # тексты секций, навигация, контакты
    projects.js   # проекты, отзывы, ссылки на изображения
  styles/global.css  # переменные палитры, шрифты, базовые стили
public/
  robots.txt, sitemap.xml, favicon.svg
```

## Секции главной страницы

1. Шапка (фиксированная, прозрачная поверх фото → белая при скролле)
2. Hero — фото почти на всю ширину, автопереключение слайдов
3. О нас — фото на половину экрана + текст
4. Почему мы? — карточки с фотографиями
5. Как мы работаем — горизонтальная лента этапов
6. Наши проекты — карточки-плитки, клик → отдельная страница мероприятия
7. Контакты — контактные данные + место для фото

Страница мероприятия (`/project/:slug`): большое фото → отзыв → галерея.

## Как подставить реальные фотографии

Сейчас используются временные заглушки с `picsum.photos`.
Чтобы поставить свои фото:

1. Положите изображения в `public/images/`.
2. В `src/data/projects.js` замените ссылки вида
   `https://picsum.photos/seed/...` на пути `/images/имя-файла.jpg`
   (массивы `heroSlides`, `aboutImage`, `whyImages`, `contactsImage`
   и поля `cover` / `hero` / `gallery` у проектов).

## SEO

- Мета-теги на каждую страницу через `react-helmet-async` (`src/components/Seo.jsx`).
- `title`, `description`, `canonical`, Open Graph, Twitter Card, JSON-LD Organization.
- `public/robots.txt` и `public/sitemap.xml` (обновите домены при деплое).

> При смене домена замените `https://me-event.ru` в `Seo.jsx`, `index.html`,
> `robots.txt` и `sitemap.xml` на реальный адрес.
