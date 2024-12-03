// src/components/ProductDetailsModal.jsx

import React from 'react';
import './ProductDetailsModal.css';

const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="modal-image" />
        <p className="modal-description">{product.description}</p>
        <p className="modal-price">Precio: ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
