import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú mobile al hacer click en un link
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src="/img/Logo.png" alt="Logo Centro Raíces" className="logo-img" />
        </Link>
      </div>

      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Abrir menú"
      >
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </button>

      <nav className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Propuesta" className="nav-link" onClick={closeMenu}>
              Propuesta
            </NavLink>
          </li>
          <li>
            <NavLink to="/ApoyoEscolar" className="nav-link" onClick={closeMenu}>
              Apoyo Escolar
            </NavLink>
          </li>
          <li>
            <NavLink to="/salud-integral" className="nav-link" onClick={closeMenu}>
              Salud Integral
            </NavLink>
          </li>
          <li>
            <NavLink to="/talleres" className="nav-link" onClick={closeMenu}>
              Talleres
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="nav-link" onClick={closeMenu}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;