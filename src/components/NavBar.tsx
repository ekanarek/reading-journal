import React, { Dispatch, SetStateAction } from "react";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import "../styles/NavBar.css";
import { Book } from "../types/Book";

interface NavBarProps {
  handleSearch: (search: string) => void;
  setSelectedBook: Dispatch<SetStateAction<Book | {}>>;
}

const NavBar: React.FC<NavBarProps> = ({ handleSearch, setSelectedBook }) => {
  return (
    <header>
      <NavBrand />
      <NavLinks setSelectedBook={setSelectedBook} />
      <SearchBar handleSearch={handleSearch} />
    </header>
  );
};

export default NavBar;
