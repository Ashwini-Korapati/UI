import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import img from '../../assets/logo.png'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <Link to="/" className="title">
      <img className='image' src={img}></img>
        {/* Website */}
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/events" >Corporate Events</Link>
            </li>
            <li>
              <Link to="/giftings">Giftings</Link>
            </li>
            <li>
              {/* <Link to="/clients"  >Our Clients</Link> */}
            </li>
            <li>
              <Link to="/dj">DJ</Link>
            </li>
            <li>
              <Link to="/anchor">Anchoring</Link>
            </li>
            <li>
              <Link to="/printing">Printing</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
            <Link to="/vendor"> Become a Vendor</Link>
            </li>
          </ul>
    </nav>
  );
}

export default Navbar;
