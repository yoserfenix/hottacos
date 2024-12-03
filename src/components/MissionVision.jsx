import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="card">
        <h3>Misión</h3>
        <p>
          En Hot Tacos, nos dedicamos a ofrecer mucho más que una comida deliciosa: queremos crear momentos inolvidables. 
          Nuestra misión es brindar una experiencia culinaria auténtica, con sabores tradicionales y un servicio al cliente excepcional. 
          Cada plato refleja nuestra pasión por la calidad y nuestro compromiso de compartir la esencia de México con cada cliente que cruza nuestras puertas. 
          Creemos firmemente en el bienestar de nuestro equipo, sabiendo que su energía y dedicación son esenciales para el éxito de nuestra misión.
        </p>
      </div>
      <div className="card">
        <h3>Visión</h3>
        <p>
          Ser el destino favorito para quienes buscan una experiencia gastronómica mexicana única en Ontario y Canadá para 2030. 
          Nos esforzamos por destacar no solo por nuestros platillos de alta calidad, sino también por ser embajadores de la cultura mexicana, 
          creando un impacto positivo en nuestras comunidades. Queremos ser reconocidos por nuestra innovación constante, nuestro servicio excepcional 
          y por ofrecer un ambiente cálido y acogedor donde cada visita sea especial.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
