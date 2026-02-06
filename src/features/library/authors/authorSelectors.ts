import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../store';

// Базовые селекторы
const selectAllBooks = (state: RootState) => state.books;
const selectAllAuthors = (state: RootState) => state.authors;

// Мемоизированный селектор для поиска автора по ID
export const selectAuthorById = createSelector(
  [selectAllAuthors, (_: RootState, authorId: string) => authorId],
  (authors, authorId) => authors.find(author => author.id === authorId)
);

// Мемоизированный селектор для поиска книг автора
export const selectBooksByAuthorId = createSelector(
  [selectAllBooks, selectAuthorById, (_: RootState, authorId: string) => authorId],
  (books, author) => {
    if (!author) return [];
    return books.filter(book => author.books.includes(book.id));
  }
);