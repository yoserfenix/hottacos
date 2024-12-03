// src/components/ProductCard.jsx

import React, { useState } from 'react';
import './ProductCard.css';
import ProductDetailsModal from './ProductDetailsModal';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <button className="btn-view-details" onClick={handleOpenModal}>
        Ver detalles
      </button>
      {isModalOpen && (
        <ProductDetailsModal product={product} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductCard;
