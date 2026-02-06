import React from 'react';
import '../styles/ApoyoEscolar.css';
import Button from '../components/Button';
import WhatsAppLink from '../components/WhatsAppLink';

const ApoyoEscolar = () => {
  return (
    <div className="apoyo-container">
      {/* Banner Principal - Consistencia con Home/Propuesta */}
      <section className="apoyo-hero" style={{ backgroundImage: "url('/img/apoyo-escolar.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="title-white">APOYO ACADÉMICO</h1>
          <h2 className="title-green">abriendo nuevos caminos</h2>
          <p className='hero-overlay-descripcion'> Acompañamiento pedagógico para potenciar el aprendizaje </p>
        </div>
      </section>


      {/* Sección de Niveles (3 Cards) */}
      <section className="niveles-section">
        <div className="niveles-grid">

          <div className="nivel-card">
            <div className="nivel-icon">
              <i className="fa-solid fa-pencil"></i>
            </div>
            <h3>Nivel Primario</h3>
            <p>Fortalecemos la lectocomprensión, técnicas de estudio y hábitos desde los primeros años.</p>
          </div>

          <div className="nivel-card">
            <div className="nivel-icon">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h3>Nivel Secundario</h3>
            <p>Organización de tareas, preparación de exámenes y apoyo en materias específicas.</p>
          </div>

          <div className="nivel-card">
            <div className="nivel-icon">
              <i className="fa-solid fa-comments"></i>
            </div>
            <h3>Inglés</h3>
            <p>Apoyo escolar en idioma inglés para todos los niveles, gramática y conversación.</p>
          </div>

          <div className="nivel-card">
            <div className="nivel-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>CBC e Ingreso a Universidad</h3>
            <p>Acompañamiento en la transición al nivel superior, organización del estudio y comprensión de textos para materias de ingreso.</p>
          </div>

          <div className="nivel-card">
            <div className="nivel-icon">
              <i className="fa-solid fa-file-signature"></i>
            </div>
            <h3>Tesis y Tesinas</h3>
            <p>Tutoría personalizada en metodología, estructura y redacción académica para trabajos finales de carrera y defensas.</p>
          </div>

        </div>
      </section>

      {/* Sección de Materias (Iconos de ejemplo) */}
      <section className="materias-section">
        <h3>Materias de referencia</h3>
        <div className="materias-icons">
          {/* NÚCLEO CENTRAL */}
          <div className="materia-item"><i className="fa-solid fa-calculator"></i><span>Matemática</span></div>
          <div className="materia-item"><i className="fa-solid fa-pen-nib"></i><span>Prácticas del Lenguaje / Lengua</span></div>
          <div className="materia-item"><i className="fa-solid fa-comments"></i><span>Inglés</span></div>
          <div className="materia-item"><i className="fa-solid fa-book"></i><span>Literatura</span></div>

          {/* CIENCIAS EXACTAS Y NATURALES */}
          <div className="materia-item"><i className="fa-solid fa-dna"></i><span>Cs. Naturales / Biología</span></div>
          <div className="materia-item"><i className="fa-solid fa-flask-vial"></i><span>Química</span></div>
          <div className="materia-item"><i className="fa-solid fa-atom"></i><span>Física</span></div>

          {/* CIENCIAS SOCIALES */}
          <div className="materia-item"><i className="fa-solid fa-earth-americas"></i><span>Geografía</span></div>
          <div className="materia-item"><i className="fa-solid fa-landmark"></i><span>Historia</span></div>
          <div className="materia-item"><i className="fa-solid fa-users-gear"></i><span>Const. de la Ciudadanía</span></div>

          {/* ESPECIALES DE APOYO */}
          <div className="materia-item"><i className="fa-solid fa-lightbulb"></i><span>Técnicas de Estudio</span></div>
          <div className="materia-item"><i className="fa-solid fa-graduation-cap"></i><span>Ingreso a Secundaria</span></div>
        </div>

        <div className="apoyo-cta">
          <p className="cta-text">¿Necesitás apoyo en alguna de estas materias?</p>
          <WhatsAppLink servicio="Apoyo Escolar">
            <Button
              text="Consultar"
              type="primary"
            />
          </WhatsAppLink>
        </div>
      </section>

    </div>

  );
};

export default ApoyoEscolar;