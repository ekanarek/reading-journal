import React from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../styles/SavedBooks.css";

const SavedBooks = () => {
  const { savedBooks, handleAddToForm, handleSaveBook } = useOutletContext();

  return (
    <div className="savedBooksGrid">
      {savedBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          handleAddToForm={handleAddToForm}
          savedBooks={savedBooks}
          handleSaveBook={handleSaveBook}
        />
      ))}
    </div>
  );
};

export default SavedBooks;
