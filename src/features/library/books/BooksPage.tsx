import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { IBookState } from './book.types'

export default function BooksPage() {
	const books = useSelector((state: IBookState) => state.books)

	return (
		<div>
			<h1 className='text-center text-4xl font-bold text-gray-900'>Книги</h1>
			<h2 className='mb-4 text-center text-xl text-gray-700'>
				Здесь вы можете найти все книги в библиотеке
			</h2>
			<Link
				to='/library/add-book'
				className='rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500'
			>
				Добавить книгу
			</Link>
			{books && books.length > 0 ? (
				<div className='mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
					{books.map(book => (
						<Link
							to={`/library/books/${book.id}`}
							key={book.id}
							className='rounded-md border p-4 transition-shadow hover:shadow-lg'
						>
							<h3 className='text-2xl font-bold text-gray-900'>{book.title}</h3>
							<p className='text-gray-500'>Цена: {book.price} руб.</p>
						</Link>
					))}
				</div>
			) : (
				<p className='mt-4 text-center text-gray-600'>Нет книг в библиотеке</p>
			)}
		</div>
	)
}
