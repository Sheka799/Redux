import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { IBookState } from "./book.types";

export default function BookPage() {
    const params = useParams();
    const bookId = params.id;
    const book = useSelector((state: IBookState) => state.books.find(book => book.id === bookId))

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-gray-900">{book?.title}</h1>
            <p className="text-gray-700">{book?.description}</p>
            <p className="text-gray-700">{book?.author}, {book?.year}</p>
            <p className="text-gray-500">Цена: <strong>{book?.price} руб.</strong></p>
        </div>
    );
}