export interface IAuthor {
    id: string;
    name: string;
    description: string;
    books: string[];
}

export interface IAuthorState {
    authors: IAuthor[];
}