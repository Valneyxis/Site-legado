import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="/img/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <ul className="nav-links">
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
            to="/translado" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Translado
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
      <button className="navbar-button">Reservar</button>
    </nav>
  );
};

export default Navbar;
