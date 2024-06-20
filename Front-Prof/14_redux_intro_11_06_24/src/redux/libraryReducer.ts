import { uid } from "uid";
import { Book, libraryAction } from "./libraryAction";

interface ILibraryState {
    books: Book[];
}
const initialState = {
    books: [
        { isbn: '1', title: 'The Night in Lisbon', author: 'Erich Maria Remarque', year: 1962 }
    ]
};

export default function libraryReducer(state: ILibraryState = initialState, action: libraryAction): ILibraryState {
    switch (action.type) {
        case "library/add":
            return { ...state, books: [...state.books, { isbn: uid(), ...action.payload }] };
            case "library/edit":
                return{...state, books: state.books.map(book => {
                    if(book.isbn === action.payload.isbn){
                        return{
                            ...book,
                            title: action.payload.title,
                            author: action.payload.author,
                            year: action.payload.year,
                        }
                        return book;
                    }
                })}
            case "library/delete":
        default:
            return state;
    }

}

// npm i uid - библиотека устанавликает уникальные id-шники