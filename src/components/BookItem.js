import React, {useContext} from 'react'
import {FaTimes, FaEdit, FaHeart} from "react-icons/fa"
import Card from "./shared/Card";
import BookContext from "../context/BookContext";

const BookItem = ({item}) => {

  const {deleteBook, editBook, addFavorite} = useContext(BookContext);

  return(
    <Card>
        <button className='close' onClick={() => deleteBook(item.id)}>
          <FaTimes color="black" />
        </button>
        <button className='edit' onClick={() => editBook(item)}>
          <FaEdit color="green"/>
        </button>
        <button className='favorite' onClick={() => addFavorite(item)}>
          <FaHeart color="red"/ >
        </button>
        <div className='text-display'>
          <h2>{item.title}</h2>
          <h4>{item.author}</h4>
          <h4>{item.year}</h4>
          <p>{item.text}</p>
        </div>
    </Card>
  )
}



export default BookItem