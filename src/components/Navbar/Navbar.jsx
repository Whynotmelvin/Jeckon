import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navlinks">
      <button class="hover:bg-teal-700 font-bold py-2 px-4 rounded text-black">
        <a href="#Home" className="text-bold text-3xl">
          {" "}
          Home
        </a>
      </button>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
            <a href="#About" className="">
              About
            </a>
          </button>
        </li>
        <li>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
            <a href="#Service" className="">
              Service
            </a>
          </button>
        </li>
        <li>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
            <a href="#Contact" className="">
              Contact
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
