import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const { searchResults, handleAddToForm, handleSaveBook, savedBooks } =
    useOutletContext();

  return (
    <div className="searchResultsGrid">
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
