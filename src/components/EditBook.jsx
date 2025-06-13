import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBook() {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    pages: 0,
    releaseDate: 0,
    isbn: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${id}`
      )
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) =>
    setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${id}`,
        book
      )
      .then((res) => {
        console.log(res.data);
        navigate("/");
      });
  };
  return (
    <>
      <h1>Edit Book with id {id}</h1>
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
        <button>Update</button>
      </form>
    </>
  );
}
