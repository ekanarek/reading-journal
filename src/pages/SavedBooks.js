import React from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";

const SavedBooks = () => {
  const { savedBooks, addToForm, toggleSaveBook } = useOutletContext();

  return (
    <div>
      {savedBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          addToForm={addToForm}
          savedBooks={savedBooks}
          toggleSaveBook={toggleSaveBook}
        />
      ))}
    </div>
  );
};

export default SavedBooks;
