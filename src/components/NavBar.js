import React from "react";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import "../styles/NavBar.css";

const NavBar = ({ handleSearch, setSelectedBook }) => {
  return (
    <header>
      <NavBrand />
      <NavLinks setSelectedBook={setSelectedBook} />
      <SearchBar handleSearch={handleSearch} />
    </header>
  );
};

export default NavBar;
