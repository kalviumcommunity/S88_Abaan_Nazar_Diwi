import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <span className="logo-main">DIWI</span>
        <span className="logo-tagline">Design It. Wear It.</span>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/design">Make Your Design</Link></li>
      </ul>

      {/* Right Icons */}
      <div className="navbar-icons">
        <Link to="/cart" className="cart-link">Cart</Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar