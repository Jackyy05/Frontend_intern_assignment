// src/components/Footer.js
import React from "react";
import '../styles/Footer.css';
import LogoImg from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="footer-logo">
            <img src={LogoImg} alt="" />
            HealNet
          </h1>
          <p className="footer-description">
            Experience personalized medical care from the comfort of your home.
          </p>
          <div className="footer-social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div className="footer-section support">
          <h3>Support</h3>
          <ul>
            <li>Getting Started</li>
            <li>FAQs</li>
            <li>Help Articles</li>
            <li>Report an issue</li>
            <li>Contact Help Desk</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Booking appointments</li>
            <li>Online consultations</li>
            <li>Prescriptions</li>
            <li>Medicine Refills</li>
            <li>Medical Notes</li>
          </ul>
        </div>
        <div className="footer-section legal">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Notice</li>
            <li>Cookie Preferences</li>
            <li>Trust Center</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>HealNet 2024 © All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
