import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";

interface SearchBarProps {
  handleSearch: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(search);
    navigate("/search");
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add any book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
