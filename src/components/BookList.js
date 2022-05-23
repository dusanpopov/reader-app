import React, {useContext} from 'react'
import BookItem from './BookItem'
import BookContext from '../context/BookContext'

const BookList = () => {

  const {book} = useContext(BookContext);

  if(!book || book.length === 0){
    return <p>No books yet</p>
  }

  return (
    <div>
        {book.map((item) => (
            <BookItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default BookList