import React from 'react';
import './FloatingMenu.css';

// Importar los íconos de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faFish, faLeaf, faHotdog, faPizzaSlice, faIceCream } from '@fortawesome/free-solid-svg-icons';

const FloatingMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`floating-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-content">
        <button onClick={onClose} className="menu-item">
          <FontAwesomeIcon icon={faHamburger} className="icon" />
          Our Menu
        </button>
        <button onClick={onClose} className="menu-item">
          <FontAwesomeIcon icon={faLeaf} className="icon" />
          Ensalada
        </button>
        <button onClick={onClose} className="menu-item">
          <FontAwesomeIcon icon={faHotdog} className="icon" />
          Sopa
        </button>
        <button onClick={onClose} className="menu-item">
          <FontAwesomeIcon icon={faHotdog} className="icon" />
          Platos Fuertes
        </button>
        <button onClick={onClose} className="menu-item">
          <FontAwesomeIcon icon={faFish} className="icon" />
          Del Mar
        </button>
        <button onClick={onClose} className="menu-item">
          <FontAwesomeIcon icon={faHotdog} className="icon" />
          Enchiladas
        </button>
        <button onClick={onClose} className="menu-item">
          <FontAwesomeIcon icon={faPizzaSlice} className="icon" />
          Tacos
        </button>
        <button onClick={onClose} className="menu-item">
          <FontAwesomeIcon icon={faHotdog} className="icon" />
          Antojitos
        </button>
        <button onClick={onClose} className="menu-item">
          <FontAwesomeIcon icon={faIceCream} className="icon" />
          Postres
        </button>
      </div>
    </div>
  );
};

export default FloatingMenu;
