import { Link } from 'react-router-dom'

export default function HomePage() {
	return (
		<div className='flex h-screen items-center justify-center'>
			<div className='d-flex flex-col items-center gap-6'>
				<h1 className='text-center text-4xl font-bold mb-4'>Redux</h1>
				<nav>
					<Link to='/library' className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
						Перейти в библиотеку
					</Link>
				</nav>
			</div>
		</div>
	)
}
