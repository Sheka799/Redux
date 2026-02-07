import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { addAuthor } from '../authors/authorsSlice'

export default function AddAuthorPage() {
	const [name, setName] = useState<string>('')
	const [description, setDescription] = useState<string>('')

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onSaveAuthor = () => {
		if (name && description) {
			const authorId: string = nanoid()

			dispatch(
				addAuthor({
					id: authorId,
					name,
					description,
					books: []
				})
			)

			setName('')
			setDescription('')
			navigate('/library/authors')
		}
	}

	return (
		<div>
			<h1 className='text-center text-4xl font-bold text-gray-900'>Добавить автора</h1>
			<form>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
					<div className='sm:col-span-4'>
						<label htmlFor='title' className='block text-sm/6 font-medium text-gray-900'>
							ФИО автора
						</label>
						<div className='mt-2'>
							<div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600'>
								<input
									id='title'
									name='title'
									type='text'
									value={name}
									onChange={e => setName(e.target.value)}
									placeholder='ФИО автора'
									className='block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
								/>
							</div>
						</div>
					</div>
					<div className='sm:col-span-4'>
						<label htmlFor='description' className='block text-sm/6 font-medium text-gray-900'>
							История жизни автора
						</label>
						<div className='mt-2'>
							<textarea
								id='description'
								name='description'
								value={description}
								onChange={e => setDescription(e.target.value)}
								placeholder='История жизни автора'
								rows={6}
								className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
							/>
						</div>
					</div>
				</div>
				<div className='mt-5'>
					<button
						onClick={onSaveAuthor}
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
