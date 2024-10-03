import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../css/NotFound.css'; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Oops! Página não encontrada</h2>
      <p>A página que você está tentando acessar não existe.</p>
      <NavLink to="/" className="home-button">
        Voltar para Home
      </NavLink>
    </div>
  );
};

export default NotFound;
