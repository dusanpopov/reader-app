import React, {useContext} from 'react'
import {FaEdit, FaTrash} from "react-icons/fa"
import Card from "./shared/Card";
import BookContext from "../context/BookContext";

const FavoriteItem = ({item}) => {

    const {deleteFavorite} = useContext(BookContext);

    return(
      <Card>
          <button className='edit'>
              <FaEdit color='green' />
          </button>
          <button className='trash' onClick={() => deleteFavorite(item.id)}>
            <FaTrash color="purple" />
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


export default FavoriteItem