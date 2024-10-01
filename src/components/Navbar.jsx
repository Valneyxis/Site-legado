import React from 'react';
import { NavLink } from 'react-router-dom'; // Importando NavLink do react-router-dom
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
        <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/translado" activeClassName="active-link">Translado</NavLink></li>
        <li><NavLink to="/passeios" activeClassName="active-link">Passeios</NavLink></li>
        <li><NavLink to="/sobre" activeClassName="active-link">Sobre</NavLink></li>
      </ul>
      <button className="cta-button">Reservar</button>
    </nav>
  );
};

export default Navbar;
