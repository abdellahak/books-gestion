import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [author, setAuthor] = useState("");
  const [filtredBooks, setFiltredBooks] = useState([]);
  let authors = books.map(book => book.author_id)
  authors = authors.filter((id, index) => authors.indexOf(id) === index).sort((a,b) => a -b);

  useEffect(() => {
    // fetch("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books")
    // .then((res) => res.json())
    // .then(data => setBooks(data))
    // .catch(err => console.error(err));

    axios
      .get("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books")
      .then((res) => {setBooks(res.data); setFiltredBooks(res.data)})
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let data = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
    if (author != "") data = data.filter(book => book.author_id == author);
    setFiltredBooks(data);
  }, [search, author]);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${id}`
      )
      .then(() => setBooks(books.filter((book) => book.id != id)));
  };


  return (
    <>
      <h1>Books List</h1>
      <Link to={"/add"}>Add Book</Link>
      <div style={{display : "flex"}}>
          <input type="search" name="search" placeholder="search..." onChange={(e) => setSearch(e.target.value)}/>
          <select name="" id="" onChange={(e)=> setAuthor(e.target.value)}>
            <option value="">All authors</option>
            {authors.map((author, index) => (
              <option key={index} value={author}>{author}</option>
            ))}
          </select>
      </div>
      <table border={1} width={1000}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Pages</th>
            <th>Release Date</th>
            <th>Author Id</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtredBooks.map((book, index) => (
            <tr key={index}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.pages}</td>
              <td>{book.releaseDate}</td>
              <td>{book.author_id}</td>
              <td>{book.isbn}</td>
              <td>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
                <Link to={`/edit/${book.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
