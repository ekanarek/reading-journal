import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ handleSearch }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
