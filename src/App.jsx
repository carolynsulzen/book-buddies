import BookList from "./BookList";
import BookDetails from "./BookDetails";
import Header from "./Header";
import { useState } from "react";

const App = () => {
  const [ selectedBook , setSelectedBook ] = useState ({});
  const [ bookList , setBookList ] = useState ([]);

  

  return (
    <>
      < Header />
      <h1>Your Library</h1>
      {
        selectedBook.id ?
        <BookDetails selectedBook = {selectedBook} bookList = {bookList}/> :
        <BookList setSelectedBook = {setSelectedBook} bookList = {bookList} setBookList = {setBookList}/>
      }
      
    </>
  )
}

export default App
