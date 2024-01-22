import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navlinks">
    <Link to="/" className="title">
      Home
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="#about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
