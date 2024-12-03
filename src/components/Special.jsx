// src/components/Special.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faUsers, faHeart, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './Special.css';

const Special = () => {
  return (
    <div className="section special">
      <h2>¿Qué hace especial a Hot Tacos?</h2>
      <ul>
        <li><FontAwesomeIcon icon={faPepperHot} className="icon" /><strong>Sabor auténtico y creatividad:</strong> Cada platillo es una obra maestra que combina tradición e innovación.</li>
        <li><FontAwesomeIcon icon={faUsers} className="icon" /><strong>Ambiente vibrante y acogedor:</strong> Diseñado para que todos disfruten de una experiencia inolvidable, ya sea una cena especial o una salida casual.</li>
        <li><FontAwesomeIcon icon={faHeart} className="icon" /><strong>Compromiso con la calidad:</strong> Desde los ingredientes frescos hasta el servicio al cliente, cada detalle importa.</li>
        <li><FontAwesomeIcon icon={faHandsHelping} className="icon" /><strong>Celebración de la cultura:</strong> En Hot Tacos, no solo comes, sino que vives la esencia de México en cada visita.</li>
      </ul>
      <p>
        Ven y descubre por qué Hot Tacos es el lugar donde la tradición mexicana y la innovación se encuentran. ¡Te esperamos con los sabores más auténticos y un ambiente lleno de energía!
      </p>
    </div>
  );
};

export default Special;
