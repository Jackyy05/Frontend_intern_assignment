// src/components/Services.js
import React from "react";
import '../styles/Services.css';


function Services() {
  const services = [
    { title: "Online Consultations", description: "Consult with top doctors across various specialties via video or chat communication. It’s totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation." },
    { title: "Booking Appointments", description: "Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features." },
    { title: "Prescriptions", description: "Receive and renew prescriptions digitally after your consultation with our specialists ." },
    { title: "Medical Notes", description: "Obtain necessary medical notes for work or school with only a few clicks of hassle." },
    { title: "Medicine Refills", description: "Skip the pharmacy queues and save time + energy by ordering medicine refills online." },
  ];

  return (
    <section className="services">
      <h2>Top <span className="highlight">services</span> we offer</h2>
      <div className="services-text-content1">
        In today’s fast-paced world, your health deserves the utmost attention and convenience. That’s <br /> why HealNet offers a suite of integrated services designed to cater to your healthcare needs digitally:
      </div>
      <div className="service-cards">
        {/* {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))} */}

          <div className="card" id="card1" style={{gridColumn: "span 2"}}>
            <h3>Online Consultations</h3>
            <p>Consult with top doctors across various specialties via video or chat communication. It’s totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.</p>
          </div>

          <div className="card">
            <h3>Booking Appointments</h3>
            <p>Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.</p>
          </div>

          <div className="card">
            <h3>Prescriptions</h3>
            <p>Receive and renew prescriptions digitally after your consultation with our specialists.</p>
          </div>

          <div className="card">
            <h3>Medical Notes</h3>
            <p>Obtain necessary medical notes for work or school with only a few clicks of hassle.</p>
          </div>

          <div className="card">
            <h3>Medicine Refills</h3>
            <p>Skip the pharmacy queues and save time + energy by ordering medicine refills online.</p>
          </div>
      </div>
    </section>
  );
}

export default Services;
