import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BooksList from "./components/BooksList";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
