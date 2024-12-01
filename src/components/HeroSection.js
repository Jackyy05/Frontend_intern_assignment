// src/components/HeroSection.js
import React from "react";
import '../styles/HeroSection.css';
import HeroImg from "../assets/heroImg.png";
import HeroImg2 from "../assets/heroImg2.png";


function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your <span className="highlight">trusted partner</span> <br /> in digital healthcare.</h1>
        <p> <span className="highlight">Empowering Your Health</span>  at Every Step. Experience personalized medical care from the comfort of your home. Connect with <span className="highlight">certified doctors</span> , or manage prescriptions, and schedule appointments with ease. Ready to take control of your health?<span className="highlight"> Get Started</span>  or Book an Appointment today.</p>
        <button className="appointment-btn">Book an Appointment</button>
        <div className="hero-sub-text1">
          Trusted by millions across the globe:
        </div>
        

        <div>
          <img className="h-img2" src={HeroImg2} alt="" />
        </div>
      </div>
      <div className="hero-image">
        <img className="h-img1" src={HeroImg} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
