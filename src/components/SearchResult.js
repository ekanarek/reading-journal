import React from "react";

const SearchResult = ({ book }) => {
  const { title, author, image } = book;

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>By {author}</p>
      <button>Add to Journal</button>
    </div>
  );
};

export default SearchResult;
