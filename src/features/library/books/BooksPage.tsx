import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { IBookState } from "./book.types";

export default function BooksPage() {
    const books = useSelector((state: IBookState) => state.books);

    return (
        <div>
            <h1 className='text-4xl font-bold text-gray-900 text-center'>Книги</h1>
            <h2 className="text-xl text-gray-700 text-center">Здесь вы можете найти все книги в библиотеке</h2>
            <Link to='/library/add-book' className='transition-colors rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500'>
                Добавить книгу
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                {books.map((book) => (
                    <Link to={`/library/books/${book.id}`} key={book.id} className="border rounded-md p-4 mb-4 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900">{book.title}</h3>
                        <p className="text-gray-500">Цена: {book.price} руб.</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}