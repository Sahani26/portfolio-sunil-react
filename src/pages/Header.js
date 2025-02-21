import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/mdb.css"; // Ensure you create a CSS file for styling

import logoImage from "../image/107791326.jpg";
import hamMenuIcon from "../image/ham-menu.svg";
import hamMenuCloseIcon from "../image/ham-menu-close.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__content">
        {/* Logo Section */}
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img src={logoImage} alt="Logo" className="header__logo-img" />
          </div>
          <span className="header__logo-sub">SUNIL SAHANI</span>
        </div>

        {/* Navigation Menu */}
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link to="/" className="header__link" id="home-page">Home</Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="/#about" className="header__link" id="about-page">About</Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="/#projects" className="header__link" id="project-page">Projects</Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="/#contact" className="header__link" id="contact-page">Contact</Link>
            </li>
          </ul>

          {/* Hamburger Menu Toggle */}
          <div className="header__main-ham-menu-cont" onClick={() => setMenuOpen(!menuOpen)}>
            <img 
              src={hamMenuIcon} 
              alt="Menu" 
              className={`header__main-ham-menu ${menuOpen ? "hidden" : ""}`} 
            />
            <img 
              src={hamMenuCloseIcon} 
              alt="Close Menu" 
              className={`header__main-ham-menu-close ${menuOpen ? "" : "hidden"}`} 
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="header__sm-menu">
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className="header__sm-menu-link">
                <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
              </li>
              <li className="header__sm-menu-link">
                <Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
              </li>
              <li className="header__sm-menu-link">
                <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
