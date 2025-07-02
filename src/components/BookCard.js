import React from "react";

const BookCard = ({ book, handleAddToForm, savedBooks, handleSaveBook }) => {
  const { title, author, image } = book;
  const isSaved = savedBooks.some((savedBook) => savedBook.id === book.id);

  const handleAddToJournal = () => {
    handleAddToForm(book);
    if (isSaved) {
      handleSaveBook(book);
    }
  };

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>By {author}</p>
      <button onClick={() => handleSaveBook(book)}>
        {isSaved ? "♥︎" : "♡"}
      </button>
      <button onClick={handleAddToJournal}>Add to Journal</button>
    </div>
  );
};

export default BookCard;
