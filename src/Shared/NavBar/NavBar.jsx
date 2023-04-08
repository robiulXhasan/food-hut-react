import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/images/Tasty_HUT.png";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 mx-auto py-5">
      <div className="navbar-brand text-4xl font-bold w-1/2">
        <Link to="/">
          Tasty <span className="text-yellow-300">Hut</span>
        </Link>
      </div>
      <div className="w-1/2 flex justify-between items-center">
        <div className="nav-link space-x-8 text-2xl font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="text-2xl bg-yellow-300 px-5 py-2 rounded-lg font-medium">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
