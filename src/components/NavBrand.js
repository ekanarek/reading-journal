import React from "react";
import "../styles/NavBrand.css";

const NavBrand = () => {
  return (
    <div className="nav-brand">
      <img src="/icon.png" alt="Reading Journal Icon" className="nav-icon" />
      <h1 className="nav-title">My Reading Journal</h1>
    </div>
  );
};

export default NavBrand;
