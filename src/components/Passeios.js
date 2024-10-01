// src/components/Passeios.js
import React from 'react';
import '../css/Passeios.css';
import { FaUserFriends, FaClock, FaShuttleVan } from 'react-icons/fa';

const Passeios = () => {
  return (
    <div className="page-container">
      <h1>Nossos Passeios</h1>
      <p>Explore os passeios que oferecemos para você aproveitar ao máximo.</p>
      <div className="cards-container">
        <div className="card">
          <img src="/img/passeio.jpg" alt="Passeio 1" />
          <div className="card-body">
            <h4 className="card-title">Beach Adventure</h4>
            <p className="card-text"><FaShuttleVan /> Passeios Turísticos</p>
            <p className="card-text"><FaClock /> Guia Turístico</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 09 pessoas</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5588981692600&text&type=phone_number&app_absent=0"
              className="cta-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/img/passeio.jpg" alt="Passeio 2" />
          <div className="card-body">
            <h4 className="card-title">Desert Safari</h4>
            <p className="card-text"><FaShuttleVan /> Passeios de Aventura</p>
            <p className="card-text"><FaClock /> Guia Especializado</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 12 pessoas</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5588981692600&text&type=phone_number&app_absent=0"
              className="cta-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>

        {/* Adicione mais 4 cards como este */}
      </div>
    </div>
  );
};

export default Passeios;
