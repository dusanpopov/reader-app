import { createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const BookContext = createContext();

export const BookProvider = ({children}) => {


    // Dummy data
    const [book, setBook] = useState([
        {
            id: 1,
            title:"Fight Club",
            author: "Chuck Palahniuk",
            year: 1996,
            text: "Lorem ipsum dolor sit adispicing elit."
        },
        {
            id: 2,
            title: "The Razor's Edge",
            author: "William Somerset Maugham",
            year: 1944,
            text: "Lorem ipsum dolor sit adispicing elit."
        },
        {
            id: 3,
            title: "The Man in the High Castle",
            author: "Philip K. Dick",
            year: 1962,
            text: "Lorem ipsum dolor sit adispicing elit."
        }
    ]);


    // Dummy data favorites
    const [favorite, setFavorite] = useState([
        {
            id: 17,
            title: "On The Road",
            author: "Jack Kerouac",
            year: 1957,
            text: "Lorem ipsum dolor sit adispicing elit."
        }
    ]);


    // Add, edit, update book functions

    // Book edit state
    const [bookEdit, setBookEdit] = useState({
        item: {},
        edit: false
    });

    // Add a new book function
    const addBook = (newBook) => {
        newBook.id = uuidv4();
        setBook([newBook, ...book])
    };

    // Update book function
    const updateBook = (id, updatedItem) => {
        setBook(book.map((item) => item.id === id ? {...item, ...updatedItem}: item));
    };

    // Edit book function
    const editBook = (item) => {
        setBookEdit({
            item,
            edit: true
        })
    }

    // Delete book function
    const deleteBook = (id) => {
        if(window.confirm("Are you sure you want to delete book ?")){
            setBook(book.filter((item) => item.id !== id ));
        }
    }




    // Favorites functions

      // Favorite edit state - nedovrseno
      const [favoriteEdit, setFavoriteEdit] = useState({
        item: {},
        edit: false
    })


    // Add to favorites
    const addFavorite = (newFavorite) => {
        newFavorite.id = uuidv4();
        setFavorite([newFavorite, ...favorite])
    }

    const updateFavorite = (id, updatedItem) => {
        setFavorite(favorite.map((item) => item.id === id ? {...item, ...updatedItem}: item));
    }

    // Delete from favorites
    const deleteFavorite = (id) => {
        if(window.confirm("Are you sure you want to delete book from favorites ?")){
            setFavorite(favorite.filter((item) => item.id !==id));
        }
    }

    // Context values/props
    return <BookContext.Provider value={{
        book,
        favorite,
        deleteBook,
        editBook,
        addBook,
        addFavorite,
        deleteFavorite,
        updateBook,
        bookEdit,
        favoriteEdit,
        updateFavorite
    }}>
        {children}
    </BookContext.Provider>
}

export default BookContext;