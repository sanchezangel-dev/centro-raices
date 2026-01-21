
import React from 'react';
import { Link } from 'react-router-dom'; // Importante para la navegación
import '../styles/Button.css';

const Button = ({ text, onClick, type = 'primary', className = '', to }) => {
  // Guardamos las clases en una variable para no repetirlas
  const buttonClass = `btn ${type === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`;

  // Si pasamos la propiedad "to", renderiza un Link de React Router
  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {text}
      </Link>
    );
  }

  // Si no hay "to", renderiza el botón normal que ya tenías
  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;