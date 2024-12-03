import React from 'react';
import './ModalSucursal.css';

const ModalSucursal = ({ sucursales, onSelectSucursal }) => {
  return (
    <div className="modal-sucursal-overlay">
      <div className="modal-sucursal">
        <h2>Selecciona una Sucursal</h2>
        <ul className="sucursal-list">
          {sucursales.map((sucursal) => (
            <li key={sucursal.id} className="sucursal-item">
              <button
                className="sucursal-button"
                onClick={() => onSelectSucursal(sucursal)}
              >
                <span className="sucursal-name">{sucursal.nombre}</span>
                <span className="sucursal-address">{sucursal.direccion}</span>
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ModalSucursal;
