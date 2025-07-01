import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (search) => {
    fetch(`https://openlibrary.org/search.json?q=${search}&limit=20`)
      .then((r) => r.json())
      .then((data) => {
        const books = data.docs.map((book) => {
          const OLID = book.cover_edition_key;
          if (OLID && book.title && book.author_name) {
            const bookCover = `https://covers.openlibrary.org/b/olid/${OLID}-M.jpg`;
            const bookObj = {
              title: book.title,
              author: book.author_name[0],
              image: bookCover,
            };
            return bookObj;
          }
        });
        setSearchResults(books.filter((book) => book));
      });
  };

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} />
      <Outlet />
    </div>
  );
}

export default App;
