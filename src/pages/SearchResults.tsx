import React from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../styles/SearchResults.css";
import { Book } from "../types/Book";

interface SearchResultsContext {
  searchResults: Book[];
  handleAddToForm: (book: Book) => void;
  handleSaveBook: (book: Book) => void;
  savedBooks: Book[];
}

const SearchResults: React.FC = () => {
  const { searchResults, handleAddToForm, handleSaveBook, savedBooks } =
    useOutletContext<SearchResultsContext>();

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
