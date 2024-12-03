import React, { useState, useEffect } from 'react';
import './DishCarousel.css';

const DishCarousel = ({ platos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar al siguiente plato cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % platos.length);
    }, 3000);
    return () => clearInterval(interval); // Limpiar intervalo cuando el componente se desmonte
  }, [platos.length]);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">¡Nuestros Platillos Más Populares!</h2>
      <div className="carousel">
        <button
          className="prev"
          onClick={() => setCurrentIndex((currentIndex - 1 + platos.length) % platos.length)}
        >
          &#8592;
        </button>

        <div className="carousel-item">
          <img
            className="carousel-image"
            src={platos[currentIndex].image}
            alt={platos[currentIndex].name}
          />
          <div className="carousel-content">
            <h3>{platos[currentIndex].name}</h3>
            <p>{platos[currentIndex].description}</p>
          </div>
        </div>

        <button
          className="next"
          onClick={() => setCurrentIndex((currentIndex + 1) % platos.length)}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default DishCarousel;
