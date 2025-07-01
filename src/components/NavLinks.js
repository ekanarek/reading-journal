import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/saved">Saved Books</NavLink>
    </nav>
  );
};

export default NavLinks;
