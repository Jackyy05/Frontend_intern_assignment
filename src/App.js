import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AppointmentForm from "./components/AppointmentForm";
import Services from "./components/Services";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AppointmentForm />
      <Services />
      <Footer />
    </>
  );
}

export default App;
