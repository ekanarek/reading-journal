import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const { searchResults, handleAddToForm, handleSaveBook, savedBooks } =
    useOutletContext();

  return (
    <div>
      <h3>
        Can't find your book? Start a custom journal entry at the link above!
      </h3>
      <div className="searchResultsGrid">
        {searchResults.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            handleAddToForm={handleAddToForm}
            savedBooks={savedBooks}
            handleSaveBook={handleSaveBook}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
