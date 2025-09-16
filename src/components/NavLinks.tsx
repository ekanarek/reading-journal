import React, { Dispatch, SetStateAction } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Book } from "../types/Book";

interface NavLinksProps {
  setSelectedBook: Dispatch<SetStateAction<Book | null>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ setSelectedBook }) => {
  const navigate = useNavigate();

  const handleNewEntryClick = () => {
    setSelectedBook(null);
    navigate("/new");
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/saved">Saved Books</NavLink>
      <NavLink to="/new" onClick={handleNewEntryClick}>
        New Entry
      </NavLink>
    </nav>
  );
};

export default NavLinks;
