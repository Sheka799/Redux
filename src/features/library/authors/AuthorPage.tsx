import { Link, useParams } from 'react-router-dom'
import type { RootState } from '../../../store'
import { selectAuthorById, selectBooksByAuthorId } from './authorSelectors'
import { useSelector } from 'react-redux'

export default function AuthorPage() {
	const params = useParams()
	const authorId = params.id

	const author = useSelector((state: RootState) =>
		authorId ? selectAuthorById(state, authorId) : null
	)

	const books = useSelector((state: RootState) =>
		authorId ? selectBooksByAuthorId(state, authorId) : null
	)

	if (!author) {
		return <div className='p-4 text-gray-600'>Автор не найден</div>
	}

	return (
		<div className='flex flex-col gap-3'>
			<h1 className='text-4xl font-bold text-gray-900'>{author?.name}</h1>
			<p className='text-gray-700'>{author?.description}</p>
			{books && books.length > 0 ? (
				<div>
					<h2 className='mt-4 mb-2 text-2xl font-semibold text-gray-800'>Книги автора:</h2>
					<ul className='list-inside list-disc'>
						{books.map(book => (
							<li key={book.id} className='text-gray-700'>
								<Link to={`/library/books/${book.id}`} className='text-blue-600 hover:underline'>
									{book.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			) : (
				<p className='mt-4 text-gray-600'>У этого автора нет книг в нашей библиотеке</p>
			)}
		</div>
	)
}
