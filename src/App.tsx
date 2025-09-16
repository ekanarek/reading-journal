import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import { Book } from "types/Book";
import { Entry } from "types/Entry";

const savedAPI = "http://localhost:3001/saved/";
const journalAPI = "http://localhost:3001/journal/";

const App = () => {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [savedBooks, setSavedBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch(savedAPI)
      .then((r) => r.json())
      .then((data) => setSavedBooks(data));
  }, []);

  const handleSearch = (search: string) => {
    interface OpenLibraryDoc {
      cover_edition_key?: string;
      title?: string;
      author_name?: string[];
    }

    fetch(`https://openlibrary.org/search.json?q=${search}&limit=20`)
      .then((r) => r.json())
      .then((data) => {
        const books = (data.docs as OpenLibraryDoc[]).flatMap(
          (book): Book[] => {
            const OLID = book.cover_edition_key;
            if (OLID && book.title && book.author_name) {
              const bookCover = `https://covers.openlibrary.org/b/olid/${OLID}-M.jpg`;
              return [
                {
                  id: OLID,
                  title: book.title,
                  author: book.author_name[0],
                  image: bookCover,
                },
              ];
            }
            return [];
          }
        );
        setSearchResults(books);
      });
  };

  const handleAddToForm = (book: Book) => {
    setSelectedBook(book);
    navigate("/new");
  };

  const handleAddEntry = (newEntry: Entry) => {
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
        if (!selectedBook) {
          navigate("/");
          return;
        }

        const savedMatch = savedBooks.find(
          (book) => book.id === selectedBook.id
        );

        if (savedMatch) {
          handleSaveBook(savedMatch);
        }
        navigate("/");
        setSelectedBook(null);
      });
  };

  const handleSaveBook = (book: Book) => {
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
          .then(() =>
            setSavedBooks(savedBooks.filter((item) => item.id !== book.id))
          )
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
};

export default App;
