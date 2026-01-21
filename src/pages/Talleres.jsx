import React from 'react';
import '../styles/Talleres.css';
import Button from '../components/Button';
import WhatsAppLink from '../components/WhatsAppLink';

const Talleres = () => {
  return (
    <div className="talleres-page">
      {/* Banner Consistente con Apoyo Escolar */}
      <section className="talleres-hero" style={{ backgroundImage: "url('/img/talleres.jpg')" }}>
        <div className="hero-overlay">
          <div className="hero-text-container">
            <h1 className="title-white">NUESTROS TALLERES</h1>
            <h2 className="title-green">espacios creativos</h2>
            <p className="hero-description">
              Propuestas grupales diseñadas para el encuentro, la expresión y el crecimiento compartido.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido de Talleres */}
      <section className="talleres-section">
        <div className="talleres-container">
          
          {/* Card Niños y Adolescentes */}
          <div className="taller-card">
            <div className="taller-icon">
              <i className="fa-solid fa-palette"></i>
            </div>
            <h3>Niños y Adolescentes</h3>
            <p className="taller-desc">
              Buscamos que cada niño y joven encuentre un espacio donde su voz sea protagonista. A través del juego, el arte y la dinámica grupal, trabajamos en el fortalecimiento de la autoestima, el manejo de las emociones y el desarrollo de habilidades sociales fundamentales para su día a día.
            </p>
            <div className="taller-highlights">
              <span><i className="fa-solid fa-star"></i> Expresión Artística</span>
              <span><i className="fa-solid fa-star"></i> Juego Creativo</span>
              <span><i className="fa-solid fa-star"></i> Vínculos Saludables</span>
            </div>
            <div className="btn-container">
            <WhatsAppLink servicio="Taller Menor">
            <Button text="Consultar" type="primary" />
            </WhatsAppLink>
            </div>
          </div>

          {/* Card Adultos */}
          <div className="taller-card">
            <div className="taller-icon">
              <i className="fa-solid fa-users-rays"></i>
            </div>
            <h3>Adultos y Familias</h3>
            <p className="taller-desc">
              Espacios de reflexión y aprendizaje mutuo. Ofrecemos talleres temáticos que brindan herramientas prácticas para la crianza, el manejo del estrés y el bienestar integral. Un lugar de pausa en la rutina para conectar con las necesidades propias y encontrar apoyo en la comunidad.
            </p>
            <div className="taller-highlights">
              <span><i className="fa-solid fa-star"></i> Talleres de Crianza</span>
              <span><i className="fa-solid fa-star"></i> Gestión Emocional</span>
              <span><i className="fa-solid fa-star"></i> Bienestar y Salud</span>
            </div>
            <div className="btn-container"> 
            <WhatsAppLink servicio="Taller Adulto">
            <Button text="Consultar" type="primary" />
            </WhatsAppLink>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Talleres;