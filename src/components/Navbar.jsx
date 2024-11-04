import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import '../css/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

var contatoWpp  = "https://wa.me/+558596353617?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="/img/logo.jpg" alt="Logo" />
        </NavLink>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className="nav-container">
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/passeios" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={closeMenu}>
              Passeios
            </NavLink>
          </li>
          <li>
            <NavLink to="/translado" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={closeMenu}>
              Translado
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={closeMenu}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={closeMenu}>
              Contato
            </NavLink>
          </li>
        </ul>

        <a href={contatoWpp} target="_blank" rel="noopener noreferrer">
          <button className="navbar-button">Reservar</button>
        </a>
      </div>
    </nav>
  );
  };
  

export default Navbar;
