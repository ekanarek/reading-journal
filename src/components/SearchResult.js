import React from "react";

const SearchResult = ({ book, handleClick }) => {
  const { title, author, image } = book;

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>By {author}</p>
      <button onClick={() => handleClick(book)}>Add to Journal</button>
    </div>
  );
};

export default SearchResult;
