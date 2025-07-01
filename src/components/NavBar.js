import React from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <header>
      <NavLinks />
      <SearchBar />
    </header>
  );
};

export default NavBar;
