import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/library/books/booksSlice";

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});