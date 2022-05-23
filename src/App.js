import React from 'react';
import "./index.css";
import BookList from "./components/BookList";
import BookForm from './components/BookForm';
import { BookProvider } from './context/BookContext';
import FavoriteList from './components/FavoriteList';

const App = () => {

  return (
   <BookProvider>
     <div className='container'>
        <BookForm />
        <BookList />
        <FavoriteList />
     </div>
   </BookProvider>
  )
}

export default App