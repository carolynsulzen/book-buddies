import { useEffect, useState } from "react";

const BookList = (props) => {
  
  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
      const result = await response.json();
      const bookTitles = result.books
      props.setBookList(bookTitles);
      props.setSelectedBook(bookTitles)

    }
    getBooks();
  } , []);

  console.log(props.bookList)

  return(
    <>
      <h1 class = "listh1">List of books</h1>
      <ul>
        {props.bookList.map((individualBook) => {
          return(
            <li onClick = {()=>{props.setSelectedBook(individualBook)}} key = {individualBook.title}>{individualBook.title}</li>
          )
        })}
      </ul>
    </>
  )
}

export default BookList;