import React, { useState } from "react";

const BookCard = ({ book, addToForm, savedBooks, toggleSaveBook }) => {
  const { title, author, image } = book;
  const isSaved = savedBooks.some((savedBook) => savedBook.id === book.id);

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>By {author}</p>
      <button onClick={() => toggleSaveBook(book)}>
        {isSaved ? "♥︎" : "♡"}
      </button>
      <button
        onClick={() => {
          addToForm(book);
        }}
      >
        Add to Journal
      </button>
    </div>
  );
};

export default BookCard;
