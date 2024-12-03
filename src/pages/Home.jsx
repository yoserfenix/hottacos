// src/pages/Home.jsx

import React from 'react';
import VideoBackground from '../components/VideoBackground';  // Importar el componente
import DishCarousel from '../components/DishCarousel';
import BranchMap from '../components/BranchMap';
import './Home.css';

const Home = () => {
  const platos = [
    {
      id: 1,
      name: 'Taco al Pastor',
      description: 'Deliciosa carne de cerdo con achiote y piña, todo en una suave tortilla.',
      image: 'https://via.placeholder.com/800x600?text=Taco+al+Pastor'
    },
    {
      id: 2,
      name: 'Burrito Mexicano',
      description: 'Un clásico burrito relleno de carne, arroz, y frijoles, todo envuelto con amor.',
      image: 'https://via.placeholder.com/800x600?text=Burrito'
    },
    {
      id: 3,
      name: 'Quesadilla',
      description: 'Tortilla rellena de queso derretido, acompañada de guarniciones frescas.',
      image: 'https://via.placeholder.com/800x600?text=Quesadilla'
    }
  ];

  const branches = [
    {
      name: 'Sucursal Leamington',
      address: 'Hot Tacos Restaurante Mexicano, 16 Talbot St E, Leamington, ON N8H 1L2',
      latitude: 42.0729,
      longitude: -82.2005,
      hours: [
        { day: 'Lunes', hours: 'Cerrado' },
        { day: 'Martes', hours: '11:00 AM - 8:00 PM' },
        { day: 'Miércoles', hours: '11:00 AM - 8:00 PM' },
        { day: 'Jueves', hours: '11:00 AM - 9:00 PM' },
        { day: 'Viernes', hours: '11:00 AM - 9:00 PM' },
        { day: 'Sábado', hours: '1:00 PM - 8:00 PM' },
        { day: 'Domingo', hours: '11:00 AM - 8:00 PM' },
      ],
    },
    {
      name: 'Sucursal Windsor',
      address: '321 Ouellette Ave, Windsor, ON N9A 4J1',
      latitude: 42.3148,
      longitude: -83.0364,
      hours: [
        { day: 'Lunes', hours: '11:00 AM - 9:00 PM' },
        { day: 'Martes', hours: '11:00 AM - 9:00 PM' },
        { day: 'Miércoles', hours: '11:00 AM - 9:00 PM' },
        { day: 'Jueves', hours: '11:00 AM - 9:00 PM' },
        { day: 'Viernes', hours: '11:00 AM - 9:00 PM' },
        { day: 'Sábado', hours: '11:00 AM - 9:00 PM' },
        { day: 'Domingo', hours: '2:00 PM - 9:00 PM' },
      ],
    },
  ];

  return (
    <div className="home-container">
      {/* Usar el componente VideoBackground */}
      <VideoBackground />

      <div className="menu-container">
        <DishCarousel platos={platos} />
      </div>

      {/* Promociones */}
      <section className="promotions">
        <h2>¡Promoción Especial!</h2>
        <div className="promotion-card">
          <img src="https://via.placeholder.com/400x300?text=Promocion+Tacos" alt="Promoción Tacos" />
          <div className="promotion-info">
            <h3>Combo de Tacos</h3>
            <p>¡Disfruta de 3 tacos al pastor con un refresco por solo $9.99!</p>
          </div>
        </div>
      </section>

      {/* Mapa de sucursales */}
      <section className="branches-map">
        <h2>Encuentra Nuestras Sucursales</h2>
        <BranchMap branches={branches} />
      </section>
    </div>
  );
};

export default Home;
