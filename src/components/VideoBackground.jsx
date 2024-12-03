// src/components/VideoBackground.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoBackground.css';

const VideoBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="video-background">
      <video autoPlay loop muted>
        <source src="/videos/videoHome.mp4" type="video/mp4" />
      </video>
      <div
        className="hero-text"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <h1 className="hero-title">¡Bienvenidos a nuestro Restaurante Mexicano!</h1>
        <p className="hero-description">Disfruta de los sabores auténticos de México, preparados con pasión y tradición.</p>
        <Link to="/menu" className="btn-menu">Menú</Link>
      </div>
    </section>
  );
};

export default VideoBackground;
