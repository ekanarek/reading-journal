import React, { useState } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});

  const handleSearch = (search) => {
    fetch(`https://openlibrary.org/search.json?q=${search}&limit=20`)
      .then((r) => r.json())
      .then((data) => {
        const books = data.docs.map((book) => {
          const OLID = book.cover_edition_key;
          if (OLID && book.title && book.author_name) {
            const bookCover = `https://covers.openlibrary.org/b/olid/${OLID}-M.jpg`;
            const bookObj = {
              id: OLID,
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

  const addToForm = (book) => {
    setSelectedBook(book);
    navigate("/new");
  };

  const addEntry = (newEntry) => {
    fetch("http://localhost:3001/journal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newEntry),
    })
      .then((r) => r.json())
      .then(() => navigate("/"));
  };

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} />
      <Outlet context={{ searchResults, addToForm, selectedBook, addEntry }} />
    </div>
  );
}

export default App;
