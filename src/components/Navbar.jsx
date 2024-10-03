import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import '../css/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="/img/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />} 
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/passeios" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Passeios
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/translado" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Translado
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contato" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contato
          </NavLink>
        </li>
      </ul>
      <a 
        href="https://wa.me/SEU_NUMERO?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva." 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button className="navbar-button">Reservar</button>
      </a>
    </nav>
  );
};

export default Navbar;
