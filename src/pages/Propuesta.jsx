import React from 'react';
import '../styles/Propuesta.css';

const Propuesta = () => {
    return (
        <main className="propuesta-container">
            {/* SECCIÓN HERO: Con imagen de fondo (la principal del carrusel) */}
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

            {/* SECCIÓN PILARES: Con miniaturas del carrusel */}
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
                    {/* Bloque 1: Educación y Salud */}
                    <div className="detalle-bloque">
                        <h3>Apoyo Escolar y Terapéutico</h3>
                        <p>
                            Entendemos que el aprendizaje y el bienestar emocional van de la mano. Por eso, ofrecemos <strong>apoyo pedagógico personalizado</strong> &nbsp;
                            enriquecido con una mirada clínica. Trabajamos en la raíz de las dificultades escolares, brindando herramientas que no solo ayudan en el aula,
                            sino que fortalecen la autoestima y la autonomía para toda la vida.
                        </p>
                    </div>

                    {/* Bloque 2: Atención Clínica */}
                    <div className="detalle-bloque">
                        <h3>Atención Integral</h3>
                        <p>
                            Acompañamos el desarrollo de <strong>niños, jóvenes y adultos</strong> a través de un enfoque que contempla la singularidad de cada etapa.
                            Contamos con un equipo especializado en salud mental capaz de abordar desde las primeras infancias hasta los desafíos de la vida adulta,
                            priorizando siempre un vínculo humano cálido y un entorno de contención seguro.
                        </p>
                    </div>

                    {/* Bloque 3: Comunidad Profesional */}
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

            <section id="nuestros-espacios" className="espacios-detalle" style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2>Nuestros <span>Espacios</span></h2>
                    <p>Contamos con instalaciones diseñadas para la comodidad y seguridad...(Proximamente)</p>
                    {/* Aquí puedes poner una galería de fotos o una descripción más larga */}
                    <div className="galeria-simple">
                        {/* <img src="..." /> */}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Propuesta;