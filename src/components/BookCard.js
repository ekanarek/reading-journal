import React, { useState } from "react";

const BookCard = ({ book, handleClick, savedBooks }) => {
  const { title, author, image } = book;
  const [isSaved, setIsSaved] = useState(savedBooks.includes(book));

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>By {author}</p>
      <button>{isSaved ? "♥︎" : "♡"}</button>
      <button onClick={() => handleClick(book)}>Add to Journal</button>
    </div>
  );
};

export default BookCard;

// ♡ ♥︎
