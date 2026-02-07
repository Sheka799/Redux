import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import HomePage from './features/home/HomePage';
import LibraryLayout from './shared/layout/LibraryLayout';
import BooksPage from './features/library/books/BooksPage';
import AuthorsPage from './features/library/authors/AuthorsPage';
import NotFound from './features/errors/NotFound';
import AddBookPage from './features/library/books/AddBookPage';
import BookPage from './features/library/books/BookPage';
import AuthorPage from './features/library/authors/AuthorPage';
import EditBookPage from './features/library/books/EditBookPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
	index: true
  },
  {
	path: "/library",
	element: <LibraryLayout />,
	children: [
		{
			path: "books",
			element: <BooksPage />
		},
		{
			path: "books/:id",
			element: <BookPage />
		},
		{
			path: "add-book",
			element: <AddBookPage />
		},
		{
			path: "add-book",
			element: <AddBookPage />
		},
		{
			path: "edit-book/:id",
			element: <EditBookPage />
		},
		{
			path: "authors",
			element: <AuthorsPage />
		},
		{
			path: "authors/:id",
			element: <AuthorPage />
		}
	]
  },
  {
	path: "*",
	element: <NotFound />
  }
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App
