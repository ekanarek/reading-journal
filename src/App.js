import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

const savedAPI = "http://localhost:3001/saved/";
const journalAPI = "http://localhost:3001/journal/";

function App() {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    fetch(savedAPI)
      .then((r) => r.json())
      .then((data) => setSavedBooks(data));
  }, []);

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

  const handleAddToForm = (book) => {
    setSelectedBook(book);
    navigate("/new");
  };

  const handleAddEntry = (newEntry) => {
    fetch(journalAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newEntry),
    })
      .then((r) => r.json())
      .then(() => {
        navigate("/");
        setSelectedBook({});
      });
  };

  const handleSaveBook = (book) => {
    const alreadySaved = savedBooks.some((item) => item.id === book.id);

    alreadySaved
      ? fetch(savedAPI + book.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((r) => r.json())
          .then(setSavedBooks(savedBooks.filter((item) => item.id !== book.id)))
      : fetch(savedAPI, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(book),
        })
          .then((r) => r.json())
          .then((savedBook) => setSavedBooks([...savedBooks, savedBook]));
  };

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} setSelectedBook={setSelectedBook} />
      <Outlet
        context={{
          searchResults,
          handleAddToForm,
          selectedBook,
          handleAddEntry,
          handleSaveBook,
          savedBooks,
        }}
      />
    </div>
  );
}

export default App;
