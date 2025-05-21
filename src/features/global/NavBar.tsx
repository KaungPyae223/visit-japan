import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Visit Japan</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="hover:text-gray-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/packages" className="hover:text-gray-500">
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-500">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/content" className="hover:text-gray-500">
              Content
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
