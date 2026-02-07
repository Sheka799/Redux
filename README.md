# Redux

Учебный проект на базе React + TypeScript + Vite с использованием Redux Toolkit. Цель — показать организацию небольшого библиотеки (книги и авторы) и CRUD-операции.

**Технологии**
- **Фреймворк:** React
- **Язык:** TypeScript
- **Бандлер/ dev server:** Vite
- **Состояние:** @reduxjs/toolkit, react-redux
- **Стили:** Tailwind CSS

**Структура проекта (главное)**
- `src/` — исходники приложения
- `src/library/authors/` — страницы и слайс для авторов
- `src/library/books/` — страницы и слайс для книг
- `src/store/` — конфигурация Redux store
- `src/shared/layout/LibraryLayout.tsx` — общий layout
- `src/home/HomePage.tsx` — главная страница
