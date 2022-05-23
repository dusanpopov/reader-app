import React, {useState, useContext, useEffect} from 'react'
import Button from './shared/Button';
import Card from './shared/Card';
import BookContext from '../context/BookContext';

const BookForm = () => {

const [title, setTitle] = useState(""); // Title state
const [author, setAuthor] = useState(""); // Author state
const [text, setText] = useState(""); // User message/note state
const [year, setYear] = useState(); // Year state
const [btnDisabled, setBtnDisabled] = useState(true); // Button state enabled/disabled
const [message, setMessage] = useState(""); // Warning message state

 const {addBook, bookEdit, updateBook} = useContext(BookContext);

 useEffect(() => {
  if(bookEdit.edit === true){
    setBtnDisabled(false);
    setTitle(bookEdit.item.title);
    setAuthor(bookEdit.item.author);
    setText(bookEdit.item.text);
    setYear(bookEdit.item.year);
  }
 }, [bookEdit]);



const handleTitleChange = (e) => {
    if(title === ""){
        setBtnDisabled(true);
        setMessage(null);
      } else if (title !== "" && title.trim().length <= 2){
        setMessage("Title must be at least 2 characters long");
        setBtnDisabled(true);
      } else {
        setMessage(null);
        setBtnDisabled(false)
      }
      setTitle(e.target.value);
}

const handleAuthorChange = (e) => {
    if(author === ""){
        setBtnDisabled(true);
        setMessage(null);
      } else if (author !== "" && author.trim().length <= 5){
        setMessage("Author name must be at least 5 characters long");
        setBtnDisabled(true);
      } else {
        setMessage(null);
        setBtnDisabled(false)
      }
      setAuthor(e.target.value);
}

const handleYearChange = (e) => {
    if(year === ""){
        setBtnDisabled(true);
        setMessage(null);
      } else if (year !== "" && title.trim().length <= 3){
        setMessage("Year name must be at least 3 characters long");
        setBtnDisabled(true);
      } else {
        setMessage(null);
        setBtnDisabled(false)
      }
      setYear(e.target.value);
}

const handleTextChange = (e) => {
    if(text === ""){
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10){
      setMessage("Text must be at least 10 characters long");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false)
    }
    setText(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(text.trim().length > 10){
    const newBook = {
      title,
      text,
      year,
      author
    }

    if(bookEdit.edit === true){
      updateBook(bookEdit.item.id, newBook)
    } else {
      addBook(newBook);
    }
    setTitle("");
    setAuthor("");
    setYear("");
    setText("");
  }
 
}

  return <Card>
      <form onSubmit={handleSubmit}>
          <h2>Add a new book</h2>
          <div className='input-group'>
            <input value={title} type="text" placeholder='Title' onChange={handleTitleChange}/>
            <input value={author} type="text" placeholder='Author' onChange={handleAuthorChange}/>
            <input value={year} type="text" placeholder='Year' onChange={handleYearChange}/>
            <input value={text} type="text" placeholder='Message' onChange={handleTextChange}/>
            <Button type="submit" isDisabled={btnDisabled}>
                Add
            </Button>
          </div>
          {message && <div className='message'>{message}</div>}
      </form>
  </Card>
}

export default BookForm;