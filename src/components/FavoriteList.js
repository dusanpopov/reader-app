import React, {useContext} from 'react'
import BookContext from '../context/BookContext'
import FavoriteItem from './FavoriteItem';

const FavoriteList = () => {

  const {favorite} = useContext(BookContext);

  if(!favorite || favorite.length === 0){
   
    return (
      <>
      <h2>Favorites</h2>
      <p>Favorites list is empty</p>
      </>
      
    )
  }

  return (
    <div>
        <h2>Favorites</h2>
        {favorite.map((item) => (
            <FavoriteItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default FavoriteList