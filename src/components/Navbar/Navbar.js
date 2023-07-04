import React from "react";
import "./Navbar.css";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";

function Navbar() {
  return (
    <div className="navbar">
      <NavbarTop />
      <NavbarBottom />
    </div>
  );
}

export default Navbar;
