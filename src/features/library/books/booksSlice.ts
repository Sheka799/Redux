import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { IBook } from "./book.types";

const initialState: IBook[] = [
    {
        id: "1",
        title: "Мастер и Маргарита",
        description: "«Мастер и Маргарита» — это не просто книга, а культурный феномен, который продолжает удивлять читателей спустя почти век после написания. Михаил Булгаков создал произведение, которое ломает границы между реальностью и мистикой, сатирой и философией, любовью и предательством.",
        author: {
            name: "Михаил Булгаков",
            id: '1'
        },
        year: 1967,
        price: 1000
    },
    {
        id: "2",
        title: "Война и мир",
        description: "«Война и мир» — это эпическое произведение Льва Толстого, которое охватывает широкий спектр тем, от войны и мира до любви и судьбы. Роман погружает читателя в сложный мир русской аристократии и крестьянства, исследуя человеческую природу и исторические события.",
        author: {
            name: "Лев Толстой",
            id: '2'
        },
        year: 1869,
        price: 1500
    }
];

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: {
            reducer(state, action: PayloadAction<IBook>) {
                state.push(action.payload);
            },
            prepare({ title, description, author, year, price }: Omit<IBook, "id">) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        author,
                        year,
                        price
                    }
                };
            }
        }
    },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;