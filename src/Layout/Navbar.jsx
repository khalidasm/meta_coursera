import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { TailwindClasses } from "../Constants/Constants";

function Navbar() {
  return (
    <nav className="w-full px-60 flex justify-between items-center py-5 bg-white">
      <Link to="/">
        <img src={Logo} alt="Little Lemon Logo" />
      </Link>
      <ul
        className="flex justify-between items-center gap-5"
      >
        <li className={TailwindClasses.Link}>
          <Link to="/">Home</Link>
        </li>
        <li className={TailwindClasses.Link}>
          <a href="#about">About</a>
        </li>
        <li className={TailwindClasses.Link}>
          <a href="#menu">Menu</a>
        </li>
        <li className={TailwindClasses.Link}>
          <Link to="/booking">Reservations</Link>
        </li>
        <li className={TailwindClasses.Link}>
          <a href="#order-online">Order Online</a>
        </li>
        <li className={TailwindClasses.Link}>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
