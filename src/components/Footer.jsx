import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Marca e Identidad */}
        <div className="footer-brand">
          <div className="logo-text">
            <span className="brand-title">CENTRO</span>
            <h2 className="brand-name">RAÍCES</h2>
            <p className="slogan">Raíces que sostienen</p>
          </div>
        </div>

        {/* Áreas Detalladas */}
        <div className="footer-sections">
          <h4>Nuestras Áreas</h4>
          <ul>
            <li>Apoyo Escolar <span>(Primario - Secundario - Ingles)</span></li>
            <li>Salud Integral <span>(Psicología - Psicopedagogía - Fonoaudiología)</span></li>
            <li>Talleres <span>(Niños, Adolescentes y Adultos)</span></li>
          </ul>
        </div>

        {/* Contacto y Redes */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p><strong>Ubicación:</strong>Irala 73, La Boca, CABA</p>
          <p><strong>Mail:</strong>consultas@centroraices.info</p>
          <p><strong>Teléfono:</strong>+54 9 11 7826-0188</p>

          {/* Espacio para tus iconos de Redes Sociales */}
          <div className="social-links-container">
            <a href="https://www.instagram.com/centroraicesok/" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://facebook.com/tu_cuenta" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="https://wa.me/5491178260188?text=%C2%A1Hola!%20Tengo%20una%20consulta%20general%20sobre%20el%20Centro%20Ra%C3%ADces." target="_blank" rel="noreferrer" className="social-icon">
              <i className="fa-brands fa-whatsapp"></i>
            </a>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Centro Raíces. Todos los derechos reservados. Desarrollado por Angel Sanchez</p>
      </div>
    </footer>
  );
};

export default Footer;