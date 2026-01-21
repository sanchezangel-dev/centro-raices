import React from 'react';
import { Link } from 'react-router-dom';

const Gracias = () => {
  return (
    <div style={{ 
      height: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ color: '#2D5738', fontSize: '3rem' }}>¡Muchas Gracias!</h1>
      <p style={{ fontSize: '1.2rem', margin: '20px 0', maxWidth: '600px' }}>
        Tu mensaje ha sido enviado con éxito. El equipo del Centro Raíces se pondrá en contacto contigo a la brevedad.
      </p>
      <Link to="/" style={{ 
        padding: '12px 25px', 
        backgroundColor: '#2D5738', 
        color: 'white', 
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default Gracias;