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
		<div className='flex flex-col gap-7'>
			<div className='flex flex-col gap-3'>
				<h1 className='text-4xl font-bold text-gray-900'>{book?.title}</h1>
				<p className='text-gray-700'>{book?.description}</p>
				<p className='text-gray-700'>Год: {book?.year}</p>
				<p className='text-gray-700'>
					<Link
						to={`/library/authors/${book?.author.id}`}
						className='text-blue-600 hover:underline'
					>
						{book?.author.name}
					</Link>
				</p>
				<p className='text-gray-500'>
					Цена: <strong>{book?.price} руб.</strong>
				</p>
			</div>
			<div>
				<Link
					to={`/library/edit-book/${book?.id}`}
					className='cursor-pointer rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500'
				>
					Редактировать книгу
				</Link>
			</div>
		</div>
	)
}
