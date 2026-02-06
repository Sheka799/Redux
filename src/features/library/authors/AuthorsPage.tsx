import { useSelector } from 'react-redux'
import type { IAuthorState } from './author.types'
import { Link } from 'react-router-dom'

export default function AuthorsPage() {
	const authors = useSelector((state: IAuthorState) => state.authors)

	return (
		<div>
			<h1 className='text-center text-4xl font-bold text-gray-900'>Авторы</h1>
			<h2 className='text-center text-xl text-gray-700'>
				Здесь вы можете найти всех авторов библиотеки
			</h2>
			{authors && authors.length > 0 ? (
				<div className='mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
					{authors.map(author => (
						<Link
							to={`/library/authors/${author.id}`}
							key={author.id}
							className='rounded-md border p-4 transition-shadow hover:shadow-lg'
						>
							<h3 className='text-2xl font-bold text-gray-900'>{author.name}</h3>
							<p className='text-gray-500'>Количество книг: {author.books.length}</p>
						</Link>
					))}
				</div>
			) : (
				<p className='mt-4 text-center text-gray-600'>Нет авторов в библиотеке</p>
			)}
		</div>
	)
}
