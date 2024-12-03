// src/components/Cta.jsx

import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <div className="cta">
      <h2>¡Descubre el sabor auténtico de México!</h2>
      <a href="/reservas" className="cta-button">
        Reserva tu Mesa
      </a>
    </div>
  );
};

export default Cta;
