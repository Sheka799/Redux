export interface IBook {
	id: string
	title: string
    description: string
    author: string
    year: number
    price: number
}

export interface IBookState {
    books: IBook[]
}
