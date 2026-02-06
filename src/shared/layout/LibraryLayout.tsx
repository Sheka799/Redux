import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

export default function LibraryLayout() {
	const [collapsed, setCollapsed] = useState(false)
	const location = useLocation()
	const navigation = [
		{ name: 'Главная', href: '/' },
		{
			name: 'Книги',
			href: '/library/books',
			matchPaths: ['/library/books', '/library/books/', '/library/add-book']
		},
		{
			name: 'Авторы',
			href: '/library/authors',
			matchPaths: ['/library/authors', '/library/authors/']
		}
	]

	const isActiveLink = (href: string, matchPaths?: string[]) => {
		const currentPath = location.pathname
		
		if (matchPaths) {
			return matchPaths.some(path => currentPath.startsWith(path))
		}
		
		return currentPath === href
	}

	return (
		<div className='flex h-screen'>
			{/* Sidebar */}
			<div
				className={`${
					collapsed ? 'w-20' : 'w-64'
				} flex flex-col bg-gray-900 text-white transition-all duration-300 ease-in-out`}
			>
				{/* Заголовок */}
				<div className='flex items-center justify-between border-b border-gray-700 p-4'>
					{!collapsed && <h2 className='truncate text-xl font-bold'>Библиотека</h2>}
					<button
						onClick={() => setCollapsed(!collapsed)}
						className='rounded-lg p-2 transition-colors hover:bg-gray-800'
						aria-label={collapsed ? 'Развернуть меню' : 'Свернуть меню'}
					>
						{collapsed ? (
							<FaChevronRight className='h-5 w-5' />
						) : (
							<FaChevronLeft className='h-5 w-5' />
						)}
					</button>
				</div>

				{/* Основная навигация */}
				<nav className='flex-1 overflow-y-auto py-4'>
					<div className='space-y-1 px-3'>
						{navigation.map(item => {
							const isActive = isActiveLink(item.href, item.matchPaths)

							return (
								<NavLink
									key={item.name}
									to={item.href}
									className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
										isActive
											? 'bg-blue-600 text-white'
											: 'text-gray-300 hover:bg-gray-800 hover:text-white'
									}`}
									title={collapsed ? item.name : ''}
								>
									{!collapsed && <span>{item.name}</span>}
								</NavLink>
							)
						})}
					</div>
				</nav>
			</div>

			{/* Основной контент */}
			<div className='flex-1 overflow-auto bg-gray-100'>
				<div className='p-6'>
					{location.pathname === '/library' && (
						<div>
							<h1 className='text-2xl font-bold text-gray-900'>Добро пожаловать!</h1>
							<p className='mt-2 text-gray-600'>Слева в меню вы можете выбрать нужную категорию.</p>
						</div>
					)}
					<Outlet />
				</div>
			</div>
		</div>
	)
}
