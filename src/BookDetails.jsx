

const BookDetails = (props) => {
  return(
    <div class = "details">
    <img src = {props.selectedBook.coverimage} width = "200" height = "300"/>
    <h2>{props.selectedBook.title}</h2>
    <h3>Author: {props.selectedBook.author}</h3>
    <p>{props.selectedBook.description}</p>
    <h4>Availability: {props.selectedBook.available}</h4>
    <button onClick = {()=>{location.reload()}}>Back</button>
    
     
    </div>
  )
}

export default BookDetails;