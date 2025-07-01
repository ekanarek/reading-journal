import React from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const NavBar = ({ handleSearch }) => {
  return (
    <header>
      <NavLinks />
      <SearchBar handleSearch={handleSearch} />
    </header>
  );
};

export default NavBar;
