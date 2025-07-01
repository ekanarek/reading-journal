import React from "react";
import { useOutletContext } from "react-router-dom";
import SearchResult from "../components/SearchResult";

const SearchResults = () => {
  const searchResults = useOutletContext();

  return (
    <div>
      {searchResults.map((book) => (
        <SearchResult key={book.id} book={book} />
      ))}
    </div>
  );
};

export default SearchResults;
