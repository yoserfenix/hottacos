import React from 'react';
import './AboutUs.css';
import Values from '../components/Values';
import Special from '../components/Special';
import Cta from '../components/Cta';
import MissionVision from '../components/MissionVision';


const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenidos a Hot Tacos</h1>
          <p>Donde la tradición y los sabores auténticos de México cobran vida.</p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="section history">
        <div className="text-content">
          <h2>Un pedacito de México en Canadá</h2>
          <p>
            Desde enero de 2020, Hot Tacos ha llevado el auténtico sabor de México a Canadá, 
            creando un espacio donde todos son bienvenidos a disfrutar de una experiencia gastronómica inolvidable. 
            Aquí, celebramos la riqueza de la cocina mexicana a través de platillos como nuestros tacos al pastor 
            y las icónicas Papas a la Hot Tacos, preparados con ingredientes frescos y recetas tradicionales.
          </p>
          <p>
            Hot Tacos es más que un restaurante; es un lugar donde la cultura mexicana cobra vida en cada detalle. 
            Nos enorgullece ser un puente entre nuestras raíces y nuevas experiencias, invitando a todos, sin importar su origen, 
            a descubrir la magia de México en cada bocado. Desde sus inicios, Hot Tacos ha crecido exponencialmente, 
            posicionándose como un referente en la región y en redes sociales.
          </p>
          <p>
            Hemos participado en festivales latinos y actividades comunitarias, apoyado equipos juveniles de hockey, 
            boxeo y lucha libre, y construido conexiones con nuestros clientes. En marzo de 2024, nos expandimos a Windsor, 
            donde rápidamente nos convertimos en un punto de encuentro destacado, ganando excelentes reseñas y atrayendo a influencers.
          </p>
        </div>
        <img
          src="/assets/history.jpg"
          alt="Historia del restaurante"
          className="section-image"
        />
      </section>
      <MissionVision />
      <Values />
      <Special />
      <Cta />
    </div>
  );
};

export default AboutUs;
