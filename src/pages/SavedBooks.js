import React from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";

const SavedBooks = () => {
  const { savedBooks, handleAddToForm, handleSaveBook } = useOutletContext();

  return (
    <div>
      {savedBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          addToForm={handleAddToForm}
          savedBooks={savedBooks}
          toggleSaveBook={handleSaveBook}
        />
      ))}
    </div>
  );
};

export default SavedBooks;
