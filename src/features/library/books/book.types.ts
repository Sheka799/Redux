import type { IAuthor } from "../authors/author.types"

export interface IBook {
	id: string
	title: string
    description: string
    author: Pick<IAuthor, 'id' | 'name'>
    year: number
    price: number
}

export interface IBookState {
    books: IBook[]
}
