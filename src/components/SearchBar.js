import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for a book..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
