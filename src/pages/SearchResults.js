import React from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";

const SearchResults = () => {
  const { searchResults, handleAddToForm, handleSaveBook, savedBooks } =
    useOutletContext();

  return (
    <div>
      {searchResults.map((book) => (
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

export default SearchResults;
