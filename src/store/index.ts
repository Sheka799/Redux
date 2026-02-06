import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../features/library/books/booksSlice'
import authorsReducer from '../features/library/authors/authorsSlice'

const store = configureStore({
	reducer: {
		books: booksReducer,
		authors: authorsReducer
	}
})

export default store
export type RootState = ReturnType<typeof store.getState>
