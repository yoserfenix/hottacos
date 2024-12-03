// src/components/Values.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHandsHelping, faPepperHot, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Values.css';

const Values = () => {
  return (
    <div className="section values">
      <h2>Nuestros Valores</h2>
      <div className="values-list">
        <div className="value-item">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <h4>Servicio y experiencia del cliente</h4>
          <p>
            Cada cliente es único, y nos esforzamos por brindar una atención personalizada, cálida y profesional para hacer que cada visita sea inolvidable.
          </p>
        </div>
        <div className="value-item">
          <FontAwesomeIcon icon={faHandsHelping} className="icon" />
          <h4>Compromiso comunitario</h4>
          <p>
            Estamos profundamente conectados con nuestra comunidad, participando en eventos locales y apoyando actividades deportivas y culturales que reflejan nuestra identidad.
          </p>
        </div>
        <div className="value-item">
          <FontAwesomeIcon icon={faPepperHot} className="icon" />
          <h4>Autenticidad e innovación culinaria</h4>
          <p>
            Honramos las tradiciones mexicanas mientras innovamos para sorprender y deleitar a nuestros clientes con sabores auténticos y únicos.
          </p>
        </div>
        <div className="value-item">
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <h4>Bienestar del equipo</h4>
          <p>
            Valoramos a nuestro equipo y fomentamos un ambiente de trabajo positivo, apostando por su desarrollo personal y profesional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
