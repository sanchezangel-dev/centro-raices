import React from 'react';

// 1. La lógica de los mensajes
const getWhatsAppLink = (servicio = "") => {
  const telefono = "5491178260188"; 
  
  const mensajes = {
  "Apoyo Escolar": "¡Hola Centro Raíces! Me gustaría recibir información sobre Apoyo Académico. Muchas gracias.",
  "Taller Menor": "¡Hola! Quiero consultar por los Talleres Niños / Adolescentes. ¿Me podrían asesorar?",
  "Taller Adulto": "¡Hola! Quiero consultar por los Talleres Adultos / Familia. ¿Me podrían asesorar?",
  "Psicopedagogía": "¡Hola! Consulto por el servicio de Psicopedagogía",
  "Psicologia": "¡Hola! Me gustaría realizar una consulta con el equipo de Psicología.",
  "Fonoaudiologia": "¡Hola! Quisiera solicitar información sobre el servicio de Fonoaudiología.",
  "Terapia Ocupacional": "¡Hola! Quisiera solicitar información sobre el servicio de Terapia Ocupacional.",
  "Intervención Temprana": "¡Hola! Quisiera solicitar información sobre el servicio de Intervención Temprana.",
  "Psiquiatría": "¡Hola! Quisiera solicitar información sobre el servicio de Psiquiatría.",
  "Supervision": "¡Hola! Me contacto para consultar sobre las Supervisiones profesionales en el centro.",
  "default": "¡Hola! Tengo una consulta general sobre el Centro Raíces."
  };

  const texto = mensajes[servicio] || mensajes["default"];
  return `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
};

// 2. El Componente que envuelve tus botones
const WhatsAppLink = ({ servicio, children }) => {
  const link = getWhatsAppLink(servicio);

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none' }}
    >
      {children}
    </a>
  );
};

export default WhatsAppLink;