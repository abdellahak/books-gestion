import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function AddBook(){
  const navigate = useNavigate()
  const [book, setBook] = useState({
    id : "",
    title : "",
    cover_image : "",
    pages : "",
    isbn : "",
    author_id : 2,
    releaseDate : ""
  })


  const handleChange = (e) =>
    setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books", {id : Date.now(), book})
    .then(res => navigate("/"));
  }

  return (
    <>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title..."
          name="title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="pages..."
          name="pages"
          value={book.pages}
          onChange={handleChange}
        />
        <input
          type="number"
          min={1200}
          max={new Date().getFullYear()}
          placeholder="release Date..."
          name="releaseDate"
          value={book.releaseDate}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ISBN..."
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
        />
        <button>Add Book</button>
      </form>
    </>
  )
}