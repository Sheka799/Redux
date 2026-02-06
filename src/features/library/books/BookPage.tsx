import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import type { IBookState } from './book.types'

export default function BookPage() {
	const params = useParams()
	const bookId = params.id
	const book = useSelector((state: IBookState) => state.books.find(book => book.id === bookId))

	if (!book) {
		return <div className='p-4 text-gray-600'>Книга не найдена</div>
	}

	return (
		<div className='flex flex-col gap-3'>
			<h1 className='text-4xl font-bold text-gray-900'>{book?.title}</h1>
			<p className='text-gray-700'>{book?.description}</p>
			<p className='text-gray-700'>Год: {book?.year}</p>
			<p className='text-gray-700'>
				<Link to={`/library/authors/${book?.author.id}`} className='text-blue-600 hover:underline'>
					{book?.author.name}
				</Link>
			</p>
			<p className='text-gray-500'>
				Цена: <strong>{book?.price} руб.</strong>
			</p>
		</div>
	)
}
