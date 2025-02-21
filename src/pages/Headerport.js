import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../cssport/style.css"; // Ensure you create and style this file
import "../css/newadd.css"; // Ensure you create and style this file
import logoImage from "../image/107791326.jpg";
import hamMenuIcon from "../image/ham-menu.svg";
import hamMenuCloseIcon from "../image/ham-menu-close.svg";

const Headerport = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
              <Link to="/project" className="header__link" id="project-page">Projects</Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="/#contact" className="header__link" id="contact-page">Contact</Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="/study-material" className="header__link" id="study-page">Study Material</Link>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div
            className={`header__main-ham-menu-cont ${menuOpen ? "remove-icon" : ""}`}
            onClick={toggleMenu}
          >
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
      <div className={`header__sm-menu ${menuOpen ? "active-menu" : ""}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="header__sm-menu-link">
              <Link to="/#about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="header__sm-menu-link">
              <Link to="/project" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="header__sm-menu-link">
              <Link to="/#contact" onClick={toggleMenu}>Contact</Link>
            </li>
            <li className="header__sm-menu-link">
              <Link to="/study-material" onClick={toggleMenu}>Study Material</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Headerport;
