import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import journalIcon from "../icon.png";

const NavBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <header>
      <nav>
        <NavLink to="/">
          <img src={journalIcon} id="journalIcon" />
        </NavLink>
      </nav>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a book..." />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default NavBar;
