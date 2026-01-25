import React from 'react';
import Button from '../components/Button';
import WhatsAppLink from '../components/WhatsAppLink';
import '../styles/SaludIntegral.css';

const SaludIntegral = () => {
    return (
        <div className="salud-page">
            <section className="salud-hero">
                <div className="hero-overlay">
                    <div className="hero-text-container">
                        <h1 className="title-white">SALUD INTEGRAL</h1>
                        <h2 className="title-green">bienestar consciente</h2>
                        <p className="hero-description">
                            Un enfoque interdisciplinario diseñado para acompañar el desarrollo humano en todas sus etapas.
                        </p>
                    </div>
                </div>
            </section>

            <section className="salud-content">
                <div className="salud-grid">

                    {/* Psicología */}
                    <div className="salud-card">
                        <div className="salud-icon">
                            <i className="fa-solid fa-brain"></i>
                        </div>
                        <h3>Psicología</h3>
                        <p className="salud-desc">
                            Abordamos la salud mental desde una perspectiva integral, entendiendo que cada individuo posee un contexto único. Nuestro equipo trabaja en la creación de un espacio de escucha segura y confidencial, facilitando procesos de autoconocimiento y herramientas para la gestión de conflictos emocionales o vinculares.
                        </p>
                        <div className="salud-highlights">
                            <span><i className="fa-solid fa-star"></i> Abordaje clínico personalizado</span>
                            <span><i className="fa-solid fa-star"></i> Orientación a padres y familias</span>
                            <span><i className="fa-solid fa-star"></i> Evaluación y diagnóstico integral</span>
                        </div>
                        <div className="btn-container">
                           <WhatsAppLink servicio='Psicologia'>
                            <Button text="Más info" type="primary" className="btn-salud-card" />
                           </WhatsAppLink> 
                        </div>
                    </div>

                    {/* Fonoaudiología */}
                    <div className="salud-card">
                        <div className="salud-icon">
                            <i className="fa-solid fa-ear-listen"></i>
                        </div>
                        <h3>Fonoaudiología</h3>
                        <p className="salud-desc">
                            La comunicación es el pilar de nuestras relaciones sociales. Trabajamos en la prevención, diagnóstico y tratamiento de alteraciones en el lenguaje, la voz y la audición. Nuestro objetivo es optimizar las capacidades comunicativas y deglutorias, garantizando una mejor calidad de vida y desarrollo social.
                        </p>
                        <div className="salud-highlights">
                            <span><i className="fa-solid fa-star"></i> Rehabilitación del lenguaje y habla</span>
                            <span><i className="fa-solid fa-star"></i> Tratamiento de deglución atípica</span>
                            <span><i className="fa-solid fa-star"></i> Estimulación temprana integral</span>
                        </div>
                        <div className="btn-container">
                            <WhatsAppLink servicio='Fonoaudiologia'>
                            <Button text="Más info" type="primary" className="btn-salud-card" />
                            </WhatsAppLink>
                        </div>
                    </div>

                    {/* Psicopedagogía */}
                    <div className="salud-card">
                        <div className="salud-icon">
                            <i className="fa-solid fa-puzzle-piece"></i>
                        </div>
                        <h3>Psicopedagogía</h3>
                        <p className="salud-desc">
                            Nos enfocamos en el sujeto en situación de aprendizaje. Analizamos los procesos cognitivos y socio-emocionales que intervienen en la adquisición de conocimientos, brindando estrategias terapéuticas que permitan superar obstáculos escolares y potenciar las fortalezas de cada estudiante en su singularidad.
                        </p>
                        <div className="salud-highlights">
                            <span><i className="fa-solid fa-star"></i> Evaluación diagnóstica cognitiva</span>
                            <span><i className="fa-solid fa-star"></i> Tratamiento de dificultades específicas</span>
                            <span><i className="fa-solid fa-star"></i> Apoyo en la organización del estudio</span>
                        </div>
                        <div className="btn-container">
                            <WhatsAppLink servicio='Psicopedagogía'>
                            <Button text="Más info" type="primary" className="btn-salud-card" />
                            </WhatsAppLink>
                        </div>
                    </div>

                    {/* Nueva Card: Supervisión */}
                    <div className="salud-card" id="Supervicion">
                        <div className="salud-icon">
                            <i className="fa-solid fa-graduation-cap"></i> {/* Icono de formación/autoridad */}
                        </div>
                        <h3>Supervisión Profesional</h3>
                        <p className="salud-desc">
                            Un espacio de co-visión destinado a profesionales que buscan profundizar en su práctica clínica. Ofrecemos herramientas teóricas y técnicas para el abordaje de situaciones complejas, garantizando un marco ético y de contención para el profesional.
                        </p>
                        <div className="salud-highlights">
                            <span><i className="fa-solid fa-star"></i> Supervisión clínica individual y grupal</span>
                            <span><i className="fa-solid fa-star"></i> Orientación para profesionales nóveles</span>
                            <span><i className="fa-solid fa-star"></i> Asesoramiento técnico-profesional</span>
                        </div>
                        <div className="btn-container">
                            <WhatsAppLink servicio='Supervision'>
                            <Button text="Más info" type="primary" className="btn-salud-card" />
                            </WhatsAppLink>
                        </div>
                    </div>

                </div>
            </section>

            <section className="salud-footer-strip">
                <p>Nuestro equipo interdisciplinario realiza reuniones periódicas de seguimiento para abordar cada caso desde múltiples miradas profesionales.</p>
            </section>
        </div>
    );
};

export default SaludIntegral;