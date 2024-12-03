import React from 'react';
import './AboutUs.css';
import Values from '../components/Values';
import Special from '../components/Special';
import Cta from '../components/Cta';
import MissionVision from '../components/MissionVision';


const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenidos a Hot Tacos</h1>
          <p>Donde la tradición y los sabores auténticos de México cobran vida.</p>
        </div>
      </section>


      <MissionVision />
      <Values />
      <Special />
      <Cta />
    </div>
  );
};

export default AboutUs;
