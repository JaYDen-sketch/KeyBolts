import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import OTTSection from './components/OTTSection.jsx';
import GamesSection from './components/GamesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <OTTSection />
      <GamesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
