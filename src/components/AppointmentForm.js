// src/components/AppointmentForm.js
import React from "react";
import email from "../assets/email.png";
import contact from "../assets/contact.png";
import date from "../assets/date.png";
import "../styles/AppointmentForm.css";

function AppointmentForm() {
  return (
    <section className="appointment-section">
      

      {/* Appointment Form */}

      <figure>

      </figure>
      <div className="appointment-form">
        <h2>Easily book an appointment in 3 simple steps.</h2>
        <form>
          <div className="form-group">
            <div>
              <img className="h-img3" src={email} alt="" /> &nbsp;
              <label class="label">Email Address</label>
            </div>
            <input type="email" placeholder="Enter Your Email Address" /></div>
        
          <div className="form-group">
            <div>
            <img className="h-img3" src={contact} alt="" /> 
            &nbsp;
            
            <label class="label">Contact Number</label>
            </div>
            <input type="tel" placeholder="Enter Your Contact Number" />
          </div>
          <div className="form-group">
            <div>
            <img className="h-img3" src={date} alt="" /> &nbsp;
            <label class="label">Date of Appointment</label>
            </div>
            <input type="date" />
          </div>
          <button type="submit" className="btn-primary1">
            Join Now
          </button>
          <button type="submit" className="btn-primary">
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default AppointmentForm;
