import React, { useState } from "react";
import "../styles/Navbar.css";
import LogoImg from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/"><img src={LogoImg} alt="logoImg" className="logo-img1"/>HealNet</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#find-doctors">Find Doctors</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
        {/* <li><a className="btn-primary" href="#join-us">Join Us</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
