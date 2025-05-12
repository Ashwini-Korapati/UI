
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import "./Navbar.css";
import img from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false); // Close dropdown when toggling menu
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className='navbar'>
      {/* Wrap the logo in NavLink */}
      <NavLink to="/" onClick={closeMenu}>
        <img className='image' src={img} alt="Logo" />
      </NavLink>
      
      <FaBars className="menu" onClick={toggleMenu} />
      <ul className={`navbar-ul ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" exact activeClassName="active" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" onClick={closeMenu}>About Us</NavLink>
        </li>
        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <NavLink to="/events" onClick={closeMenu}>Corporate Events</NavLink>
          {isDropdownOpen && (
            <ul className="dropdown">
              <li>
                <NavLink to="/events#dj" onClick={closeDropdown}>DJ</NavLink>
              </li>
              <li>
                <NavLink to="/events#anchor" onClick={closeDropdown}>Anchoring</NavLink>
              </li>
              <li>
                <NavLink to="/events#giftings" onClick={closeDropdown}>Gifting</NavLink>
              </li>
              <li>
                <NavLink to="/events#printings" onClick={closeDropdown}>Printing</NavLink>
              </li> 
              <li>
                <NavLink to="/events#games" onClick={closeDropdown}>Games</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/vendor" activeClassName="active" onClick={closeMenu}>Become a Vendor</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
