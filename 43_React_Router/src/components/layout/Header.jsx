import React from "react";
import { NavLink } from "react-router-dom";

const getLinkClass = ({ isActive }) =>
  isActive ? "text-blue-600 font-bold" : "text-gray-900 hover:text-gray-700";

function Header() {
  return (
    <header className="bg-blue-400 text-white shadow-md">
      {/* Navigation Section */}
      <nav className="bg-blue-300 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="index" className="text-xl font-bold text-gray-900">Nav</NavLink>

          <ul className="flex space-x-6">
            <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={getLinkClass}>About</NavLink></li>
            <li><NavLink to="/movie" className={getLinkClass}>Movies</NavLink></li>
            <li><NavLink to="/contact" className={getLinkClass}>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


export default Header;
