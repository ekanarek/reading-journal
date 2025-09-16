import React from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../styles/SavedBooks.css";
import { Book } from "../types/Book";

interface SavedBooksContext {
  savedBooks: Book[];
  handleAddToForm: (book: Book) => void;
  handleSaveBook: (book: Book) => void;
}

const SavedBooks: React.FC = () => {
  const { savedBooks, handleAddToForm, handleSaveBook } =
    useOutletContext<SavedBooksContext>();

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
