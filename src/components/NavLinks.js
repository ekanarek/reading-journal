import React from "react";
import { NavLink } from "react-router-dom";
import journalIcon from "../icon.png";

const NavLinks = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={journalIcon} id="journalIcon" />
      </NavLink>
    </nav>
  );
};

export default NavLinks;
