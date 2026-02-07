import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import type { IAuthorState } from '../authors/author.types'
import { editBook } from './booksSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { addBookToAuthor, removeBookFromAuthor } from '../authors/authorsSlice'
import type { IBookState } from './book.types'

export default function EditBookPage() {
	const params = useParams()
	const bookId = params.id

	const book = useSelector((state: IBookState) => state.books.find(book => book.id === bookId))

	const [author, setAuthor] = useState({
		name: book ? book.author.name : 'Выберите автора',
		id: book ? book.author.id : '0'
	})
	const [title, setTitle] = useState<string>(book ? book.title : '')
	const [description, setDescription] = useState<string>(book ? book.description : '')
	const [year, setYear] = useState<number | null>(book ? book.year : null)
	const [price, setPrice] = useState<number | null>(book ? book.price : null)

	const authors = useSelector((state: IAuthorState) => state.authors)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	if (!book) {
		return <div>Книга не найдена</div>
	}

	const onSaveBook = () => {
		if (author.id !== '0' && title && description && year && price) {
			dispatch(
				editBook({
					id: bookId!,
					title,
					description,
					year,
					price,
					author: author
				})
			)

			if (book?.author.id !== author.id) {
				dispatch(addBookToAuthor({ authorId: author.id, bookId: bookId! }))
				dispatch(removeBookFromAuthor({ authorId: book!.author.id, bookId: bookId! }))
			}

			navigate(`/library/books/${bookId}`)
		}
	}

	return (
		<div>
			<h1 className='text-center text-4xl font-bold text-gray-900'>Редактировать книгу</h1>
			<form>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
					<div className='sm:col-span-4'>
						<label htmlFor='title' className='block text-sm/6 font-medium text-gray-900'>
							Название книги
						</label>
						<div className='mt-2'>
							<div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600'>
								<input
									id='title'
									name='title'
									type='text'
									value={title}
									onChange={e => setTitle(e.target.value)}
									placeholder='Название книги'
									className='block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
								/>
							</div>
						</div>
					</div>
					<div className='sm:col-span-4'>
						<label htmlFor='description' className='block text-sm/6 font-medium text-gray-900'>
							Аннотация
						</label>
						<div className='mt-2'>
							<textarea
								id='description'
								name='description'
								value={description}
								onChange={e => setDescription(e.target.value)}
								placeholder='Аннотация'
								rows={6}
								className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
							/>
						</div>
					</div>
					<div className='sm:col-span-4'>
						<Listbox value={author} onChange={setAuthor}>
							<Label className='block text-sm/6 font-medium text-gray-900'>Автор</Label>
							<div className='relative mt-2'>
								<ListboxButton className='grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6'>
									<span className='col-start-1 row-start-1 flex items-center gap-3 pr-6'>
										<span className='block truncate'>{author.name}</span>
									</span>
								</ListboxButton>

								<ListboxOptions
									transition
									className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm'
								>
									{authors.map(author => (
										<ListboxOption
											key={author.id}
											value={author}
											className='group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden'
										>
											<div className='flex items-center'>
												<span className='ml-3 block truncate font-normal group-data-selected:font-semibold'>
													{author.name}
												</span>
											</div>

											<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white'>
												<BsCheck aria-hidden='true' className='size-5' />
											</span>
										</ListboxOption>
									))}
								</ListboxOptions>
							</div>
						</Listbox>
					</div>
					<div className='sm:col-span-4'>
						<label htmlFor='year' className='block text-sm/6 font-medium text-gray-900'>
							Год издания
						</label>
						<div className='mt-2'>
							<div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600'>
								<input
									id='year'
									name='year'
									type='number'
									value={year ?? ''}
									onChange={e => setYear(Number(e.target.value))}
									placeholder='Год издания'
									className='block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
								/>
							</div>
						</div>
					</div>
					<div className='sm:col-span-4'>
						<label htmlFor='price' className='block text-sm/6 font-medium text-gray-900'>
							Цена
						</label>
						<div className='mt-2'>
							<div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600'>
								<input
									id='price'
									name='price'
									type='number'
									value={price ?? ''}
									onChange={e => setPrice(Number(e.target.value))}
									placeholder='Цена'
									className='block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-5'>
					<button
						onClick={onSaveBook}
						type='button'
						className='cursor-pointer rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500'
					>
						Сохранить
					</button>
				</div>
			</form>
		</div>
	)
}
