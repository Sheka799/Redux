import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IAuthor } from './author.types'

const initialState: IAuthor[] = [
	{
		id: '1',
		name: 'Михаил Булгаков',
		description:
			'Михаил Афанасьевич Булгаков — выдающийся русский писатель, драматург и врач, чьи произведения стали классикой мировой литературы. Родился 15 мая 1891 года в Киеве, он получил медицинское образование и работал врачом во время Первой мировой войны и Гражданской войны в России. Однако его литературный талант проявился в полной мере, когда он начал писать художественные произведения.',
		books: ['1']
	},
	{
		id: '2',
		name: 'Лев Толстой',
		description:
			'Лев Николаевич Толстой — один из величайших русских писателей, философ и общественный деятель. Родился 9 сентября 1828 года в Ясной Поляне, он стал известным благодаря своим эпическим романам, таким как "Война и мир" и "Анна Каренина". Толстой был не только мастером слова, но и глубоким мыслителем, который исследовал вопросы морали, религии и человеческой природы в своих произведениях.',
		books: ['2']
	}
]

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		addBookToAuthor(state, action: PayloadAction<{ authorId: string; bookId: string }>) {
			const { authorId, bookId } = action.payload
			const author = state.find(author => author.id === authorId)
			if (author && !author.books.includes(bookId)) {
				author.books.push(bookId)
			}
		},
		removeBookFromAuthor(state, action: PayloadAction<{ authorId: string; bookId: string }>) {
			const { authorId, bookId } = action.payload
			const author = state.find(author => author.id === authorId)
			if (author) {
				author.books = author.books.filter(id => id !== bookId)
			}
		}
	}
})

export const { addBookToAuthor, removeBookFromAuthor } = authorsSlice.actions
export default authorsSlice.reducer
