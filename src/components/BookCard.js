import React from "react";
import "../styles/BookCard.css";

const BookCard = ({ book, handleAddToForm, savedBooks, handleSaveBook }) => {
  const { title, author, image } = book;
  const isSaved = savedBooks.some((savedBook) => savedBook.id === book.id);

  return (
    <div className="bookCard">
      <img src={image} alt={title} />
      <p>
        <strong>{title}</strong>
      </p>
      <p>By {author}</p>
      <div className="bookCardButtons">
        <button className="saveButton" onClick={() => handleSaveBook(book)}>
          {isSaved ? "♥︎" : "♡"}
        </button>
        <button className="addButton" onClick={() => handleAddToForm(book)}>
          Add to Journal
        </button>
      </div>
    </div>
  );
};

export default BookCard;
