// src/components/FloatingActionButton.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de comida
import './FloatingActionButton.css';

const FloatingActionButton = ({ onClick }) => {
  return (
    <button className="fab" onClick={onClick}>
      <FontAwesomeIcon icon={faUtensils} className="fab-icon" /> {/* Icono de menú */}
      <span className="fab-text">Menú</span> {/* Texto debajo del icono */}
      <span className="pulse-effect" /> {/* Efecto de onda */}
    </button>
  );
};

export default FloatingActionButton;
