import React from 'react';
// Importamos los componentes de Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos los módulos necesarios de Swiper
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Importamos los estilos de Swiper (estos son obligatorios)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Efecto opcional de desvanecido

import '../styles/Propuesta.css';

// --- DATOS DEL CARRUSEL ---
// Aquí cargás la información de las fotos nuevas. 
// Asegurate de optimizarlas primero (ver Paso 4).
const fotosEspacios = [
    {
        id: 1,
        // Reemplazá por la ruta de tu foto optimizada (ej: .webp)
        url: '/img/recepcion.jpeg', 
        titulo: 'Nuestra Recepción',
        descripcion: 'Un espacio cálido y luminoso diseñado para darte la bienvenida y que te sientas cómodo desde el primer momento.'
    },
    {
        id: 2,
        url: '/img/espacio-consultorio1.jpeg',
        titulo: 'Consultorios',
        descripcion: 'Nuestros consultorios combinan diseño y calidez para ofrecerte un entorno seguro y relajante. Un lugar pensado para que te sientas cómodo, contenido y en confianza desde el primer momento.'
    },
    {
        id: 3,
        url: 'img/espacio-consultorioinfantil.jpeg',
        titulo: 'Consultorio Niños/Adolescentes',
        descripcion: 'Un espacio pensado para que los más chicos se sientan cómodos, escuchados y en confianza para expresarse desde la primera sesión.'
    },
        {
        id: 4,
        url: 'img/espacio-apoyoescolar.jpeg',
        titulo: 'Apoyo Escolar',
        descripcion: 'Un espacio dedicado a la enseñanza y el crecimiento académico, donde cada alumno cuenta con las herramientas y la contención necesarias para potenciar su desempeño escolar.'
    },
    {
        id: 5,
        url: 'img/espacio-encuentro.jpeg',
        titulo: 'Espacio de Encuentro',
        descripcion: 'Entorno funcional para el intercambio profesional, co-visión de casos y capacitaciones grupales en un clima de calidez y crecimiento compartido'
    },
    {
        id: 6,
        url: 'img/espacio-salaespera.jpeg',
        titulo: 'Sala de Espera',
        descripcion: 'Un entorno cálido y armonioso diseñado para ofrecerte contención y comodidad desde el primer momento en que llegas a nuestro Centro.'
    },

];

const Propuesta = () => {
    return (
        <main className="propuesta-container">
            {/* SECCIÓN HERO */}
            <section className="propuesta-hero" style={{ backgroundImage: "url('/img/centrofrente.jpeg')" }}>
                <div className="hero-overlay">
                    <span className="subtitle"><strong>NUESTRA METODOLOGÍA</strong></span>
                    <h1>Una propuesta integral para el <br /><span>desarrollo humano</span></h1>
                    <p className="intro-text">
                        En Centro Raíces, creemos que cada proceso es único. Nuestra propuesta combina
                        el apoyo pedagógico con el bienestar emocional.
                    </p>
                </div>
            </section>

            {/* SECCIÓN PILARES */}
            <section className="pilares-grid">
                <div className="pilar-card">
                    <div className="pilar-image">
                        <img src="/img/cercania.png" alt="Cercanía" />
                    </div>
                    <div className="pilar-content">
                        <div className="icon-box"><i className="fa-solid fa-leaf"></i></div>
                        <h3>Cercanía</h3>
                        <p>Acompañamos de manera personalizada cada contexto familiar.</p>
                    </div>
                </div>

                <div className="pilar-card">
                    <div className="pilar-image">
                        <img src="/img/crecimiento.jpg" alt="Crecimiento" />
                    </div>
                    <div className="pilar-content">
                        <div className="icon-box"><i className="fa-solid fa-seedling"></i></div>
                        <h3>Crecimiento</h3>
                        <p>Fomentamos la autonomía y la confianza en las propias habilidades.</p>
                    </div>
                </div>

                <div className="pilar-card">
                    <div className="pilar-image">
                        <img src="/img/integridad.png" alt="Integridad" />
                    </div>
                    <div className="pilar-content">
                        <div className="icon-box"><i className="fa-solid fa-hands-holding-child"></i></div>
                        <h3>Integridad</h3>
                        <p>Abordamos la salud y el aprendizaje como dimensiones inseparables.</p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN DETALLE FINAL */}
            <section className="propuesta-detalle">
                <h2>Un espacio de formación y salud</h2>

                <div className="detalle-grid">
                    <div className="detalle-bloque">
                        <h3>Apoyo Escolar y Terapéutico</h3>
                        <p>
                            Entendemos que el aprendizaje y el bienestar emocional van de la mano. Por eso, ofrecemos <strong>apoyo pedagógico personalizado</strong> &nbsp;
                            enriquecido con una mirada clínica. Trabajamos en la raíz de las dificultades escolares, brindando herramientas que no solo ayudan en el aula,
                            sino que fortalecen la autoestima y la autonomía para toda la vida.
                        </p>
                    </div>

                    <div className="detalle-bloque">
                        <h3>Atención Integral</h3>
                        <p>
                            Acompañamos el desarrollo de <strong>niños, jóvenes y adultos</strong> a través de un enfoque que contempla la singularidad de cada etapa.
                            Contamos con un equipo especializado en salud mental capaz de abordar desde las primeras infancias hasta los desafíos de la vida adulta,
                            priorizando siempre un vínculo humano cálido y un entorno de contención seguro.
                        </p>
                    </div>

                    <div className="detalle-bloque">
                        <h3>Desarrollo para Profesionales</h3>
                        <p>
                            Centro Raíces es también un punto de encuentro y crecimiento para la <strong>comunidad de salud y educación</strong>.
                            Brindamos espacios de supervisión clínica, ateneos y talleres de actualización para psicólogos, psicopedagogos y docentes,
                            fomentando el intercambio de saberes y la excelencia en nuestras prácticas profesionales.
                        </p>
                    </div>
                </div>

                <div className="frase-cierre">
                    <p>"Raíces que sostienen, procesos que transforman."</p>
                </div>
            </section>

            {/* --- SECCIÓN NUESTROS ESPACIOS CON CARRUSEL --- */}
            <section id="nuestros-espacios" className="espacios-detalle-section">
                <div className="container-espacios">
                    <h2 className="titulo-seccion-espacios">Nuestros <span>Espacios</span></h2>
                    <p className="subtitulo-seccion-espacios">Conocé las instalaciones de Centro Raíces, pensadas para tu bienestar.</p>
                    
                    {/* Configurador del Carrusel */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]} // Módulos activados
                        effect={'fade'} // Efecto suave de desvanecido
                        spaceBetween={0} // Sin espacio entre slides (ya que ocupan todo el ancho)
                        slidesPerView={1} // Una foto por vez
                        navigation // Flechas activadas
                        pagination={{ clickable: true }} // Puntos activados y clickeables
                        autoplay={{ delay: 6000 }} // Cambia cada 6 segundos
                        loop={true} // Vuelve al principio infinitamente
                        className="mySwiperEspacios"
                    >
                        {fotosEspacios.map((foto) => (
                            <SwiperSlide key={foto.id}>
                                <div className="slide-espacio-content">
                                    <div className="slide-image-wrapper">
                                        <img src={foto.url} alt={foto.titulo} className="slide-image-full" />
                                    </div>
                                    <div className="slide-text-overlay">
                                        <div className="slide-text-box">
                                            <h3>{foto.titulo}</h3>
                                            <p>{foto.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
};

export default Propuesta;