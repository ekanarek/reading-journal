import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavLinks = ({ setSelectedBook }) => {
  const navigate = useNavigate();

  const handleNewEntryClick = () => {
    setSelectedBook({});
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
