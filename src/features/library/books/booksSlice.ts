import { createSlice } from "@reduxjs/toolkit";
import type { IBook } from "./book.types";

const initialState: IBook[] = [
    {
        id: "1",
        title: "Мастер и Маргарита",
        description: "«Мастер и Маргарита» — это не просто книга, а культурный феномен, который продолжает удивлять читателей спустя почти век после написания. Михаил Булгаков создал произведение, которое ломает границы между реальностью и мистикой, сатирой и философией, любовью и предательством.",
        author: "Михаил Булгаков",
        year: 1967,
        price: 1000
    },
    {
        id: "2",
        title: "Война и мир",
        description: "«Война и мир» — это эпическое произведение Льва Толстого, которое охватывает широкий спектр тем, от войны и мира до любви и судьбы. Роман погружает читателя в сложный мир русской аристократии и крестьянства, исследуя человеческую природу и исторические события.",
        author: "Лев Толстой",
        year: 1869,
        price: 1500
    }
];

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook(state, action) {
            state.push(action.payload);
        },
    },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;