import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from './assetss/logo.png';
import searchh from "./assetss/search_icon.png";
import baskett from "./assetss/basket_icon.png";
import './navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => { 
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open state
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
    if (window.innerWidth > 700) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {isMobile && (
        <div className={`toggle-button ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          &#9776; 
        </div>
      )}

      <div className={`links ${isOpen ? 'active' : ''}`}>
        <ul>
          {isLoggedIn ? (
            <>
              <li><NavLink to="/" className="nav-link" onClick={handleLinkClick}>Home</NavLink></li>
              <li><NavLink to="/menu" className="nav-link" onClick={handleLinkClick}>Menu</NavLink></li>
              <li><NavLink to="/mobile-app" className="nav-link" onClick={handleLinkClick}>Mobile App</NavLink></li>
              <li><NavLink to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</NavLink></li>
              <li><img src={searchh} alt="Search" className="icon" /></li>
              <li><img src={baskett} alt="Basket" className="icon" /></li>
              <li><NavLink to="/profile" className="nav-link" onClick={handleLinkClick}>Profile</NavLink></li>
              <li>
                <button className="btn" onClick={onLogout}>Logout</button> {/* Logout button */}
              </li>
            </>
          ) : (
            <>
              <li><NavLink to="/" className="nav-link" onClick={handleLinkClick}>Home</NavLink></li>
              <li><NavLink to="/mobile-app" className="nav-link" onClick={handleLinkClick}>Mobile App</NavLink></li>
              <li><NavLink to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</NavLink></li>
              <li><img src={searchh} alt="Search" className="icon" /></li>
              <li><img src={baskett} alt="Basket" className="icon" /></li>
              <li>
                <NavLink to="/signin" className="nav-link" onClick={handleLinkClick}>
                  <button className="btn">Sign In</button>
                </NavLink>
              </li>
             
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
