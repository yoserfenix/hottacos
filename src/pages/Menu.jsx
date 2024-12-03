import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FloatingActionButton from '../components/FloatingActionButton';
import ProductMenu from '../components/FloatingMenu';
import ModalSucursal from '../components/ModalSucursal';
import './Menu.css';

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const sucursales = [
    { id: 1, nombre: 'Windsor', direccion: '325 Ouellette Ave, Windsor, ON N9A 4J1' },
    { id: 2, nombre: 'Leamington', direccion: '16 Talbot Street E, Leamington ON, N8H 1L2' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSelectBranch = (branch) => {
    setSelectedBranch(branch);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (selectedBranch) {
      const fetchCategories = async () => {
        try {
          const response = await fetch(`http://localhost:5000/categories?sucursal=${selectedBranch.id}`);
          if (!response.ok) {
            throw new Error('No se pudo cargar las categorías');
          }
          const data = await response.json();
          setCategories(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchCategories();
    }
  }, [selectedBranch]);

  return (
    <div className="menu-container">
      {isModalOpen && (
        <ModalSucursal
          sucursales={sucursales}
          onSelectSucursal={handleSelectBranch}
        />
      )}

      {!isModalOpen && (
        <>
          <header className="menu-header">
            <h1>Menú - {selectedBranch?.nombre}</h1>
          </header>
          {error && <p className="error">{error}</p>}
          {categories.length === 0 ? (
            <p className="loading">Cargando categorías...</p>
          ) : (
            categories.map((category) => (
              <div key={category.id} className="category-section">
                <h2>{category.name}</h2>
                <div className="product-grid">
                  {category.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))
          )}
          <FloatingActionButton onClick={toggleMenu} />
          <ProductMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </>
      )}
    </div>
  );
};

export default Menu;
