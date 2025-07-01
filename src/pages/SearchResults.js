import React from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";

const SearchResults = () => {
  const { searchResults, addToForm, savedBooks } = useOutletContext();

  return (
    <div>
      {searchResults.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          handleClick={addToForm}
          savedBooks={savedBooks}
        />
      ))}
    </div>
  );
};

export default SearchResults;
