// Navbar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import img from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='navbar'>
      <img className='image' src={img} alt="Logo" />
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-ul ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/events" activeClassName="active">Corporate Events</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/vendor" activeClassName="active">Become a Vendor</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
