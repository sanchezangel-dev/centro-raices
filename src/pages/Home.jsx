import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import '../styles/Home.css';

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Red de Acompañamiento Integral para el",
      highlight: "Crecimiento Emocional y Social",
      slogan: "Cuidar el presente, para florecer siempre.",
      img: "/img/presentacion-home.jpg",
      btnText: "Conocer más",
      link: "/Propuesta" 
    },
    {
      id: 2,
      title: "Acompañamiento Pedagógico Integral",
      highlight: "Apoyo Académico",
      slogan: "Estrategias para alcanzar tus metas académicas.",
      img: "/img/apoyo-escolar.jpg",
      btnText: "Ver niveles",
      link: "/Apoyoescolar" 
    },
    {
      id: 3,
      title: "Salud Mental y Neurodesarrollo",
      highlight: "Salud Integral",
      slogan: "Un abordaje humano para el desarrollo pleno.",
      img: "/img/salud-integral.jpg",
      btnText: "Ver detalles",
      link: "/Salud-integral" 
    },
    {
      id: 4,
      title: "Espacios de juego y expresión",
      highlight: "Talleres Creativos",
      slogan: "Descubriendo talentos en comunidad.",
      img: "/img/talleres.jpg",
      btnText: "Ver talleres",
      link: "/Talleres" 
    },
    {
      id: 5,
      title: "Formación y Criterio Profesional en",
      highlight: "Supervisión Clínica y Psicopedagogía",
      slogan: "Raíces que sostienen la práctica profesional.",
      img: "/img/supervision.jpg",
      btnText: "Ver detalles",
      link: "/Salud-integral#Supervicion"
    },

    {
      id: 6,
      title: "Calidez y Seguridad en",
      highlight: "Nuestros Espacios",
      slogan: "Ambientes diseñados para el encuentro.",
      img: "/img/nuestros-espacios.jpg",
      btnText: "Galería",
      link: "/Propuesta#nuestros-espacios",

    },

  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="home-container">
      <section className="hero-carousel">
        <button className="nav-btn prev" onClick={prevSlide}>&#10094;</button>
        <button className="nav-btn next" onClick={nextSlide}>&#10095;</button>

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === current ? 'active' : ''}`}
          >
            <img src={slide.img} alt={slide.highlight} className="slide-bg" />
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="content-left">
                <h1 className="slide-title">
                  <span className="title-top">{slide.title}</span>
                  <span className="slide-highlight">{slide.highlight}</span>
                </h1>

                <div className="hero-btn-container">
                  {/* PROPIEDAD 'to' QUE AGREGAMOS AL COMPONENTE */}
                  <Button
                    text={slide.btnText}
                    type="primary"
                    to={slide.link}
                  />
                </div>
              </div>
              <div className="content-right">
                <p className="slide-slogan">"{slide.slogan}"</p>
              </div>
            </div>
          </div>
        ))}

        <div className="carousel-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>
      </section>

      {/* SECCIÓN 1:  Áreas de Intervención con Botones Funcionales */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <span className="services-subtitle">Nuestra Propuesta</span>
            <h2 className="services-title">Áreas de <span>Intervención</span></h2>
            <div className="title-underline"></div>
          </div>

          <div className="services-grid">
            {/* Card 1 - Apoyo Escolar */}
            <div className="service-card">
              <div className="card-image-wrapper">
                <img src="/img/apoyo-card.jpg" alt="Apoyo Escolar" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Apoyo Académico</h3>
                <p>Acompañamiento pedagógico personalizado desde el nivel primario hasta el desarrollo de tesis universitarias.</p>
                <Button text="Ver más" type="secondary" to="/Apoyoescolar" />
              </div>
            </div>

            {/* Card 2 - Salud Integral */}
            <div className="service-card">
              <div className="card-image-wrapper">
                <img src="/img/salud-card.jpg" alt="Salud Integral" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Salud Integral</h3>
                <p>Atención especializada en Salud Mental y Neurodesarrollo: Psicología, Psicopedagogía, Fonoaudiología, Terapia Ocupacional, Psiquiatría e Intervención Temprana.</p>
                <Button text="Conocer más" type="secondary" to="/Salud-integral" />
              </div>
            </div>

            {/* Card 3 - Talleres */}
            <div className="service-card">
              <div className="card-image-wrapper">
                <img src="/img/talleres-card.jpg" alt="Talleres" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Talleres</h3>
                <p>Espacios grupales de juego, arte y expresión para el desarrollo de nuevas habilidades.</p>
                <Button text="Explorar" type="secondary" to="/Talleres" />
              </div>
            </div>

            {/* Card 4 - Supervisión */}
            <div className="service-card">
              <div className="card-image-wrapper">
                <img src="/img/supervision-card.jpg" alt="Supervisión" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Supervisión</h3>
                <p>Orientación y formación profesional para fortalecer la práctica clínica y docente.</p>
                <Button text="Consultar" type="secondary" to="/Salud-integral#Supervicion" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: EL NUESTROS ESPACIOS */}
      <section className="espacios-highlight">
        <div className="highlight-container">
          <div className="highlight-image">
            <img src="/img/espacios-card.jpg" alt="Nuestras instalaciones" />
          </div>
          <div className="highlight-content">
            <h3>Nuestros <span>Espacios</span></h3>
            <p>
              Creamos un lugar donde la calidez y la seguridad son prioridad.
              Nuestros consultorios están equipados para brindar la mejor atención en un entorno profesional.
            </p>
            <Button text="Conocé las instalaciones" type="secondary" to="/Propuesta#nuestros-espacios" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
