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
          <img src="/img/passeio1.jpg" alt="Passeio 1" />
          <div className="card-body">
            <h4 className="card-title">Passeio Leste</h4>
            <p className="card-text"><FaShuttleVan /> Passeios Turísticos</p>
            <p className="card-text"><FaClock /> Guia Turístico</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 09 pessoas</p>
            <a 
              href="https://wa.me/SEU_NUMERO?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
              className="page-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/img/passeio2.jpg" alt="Passeio 2" />
          <div className="card-body">
            <h4 className="card-title">Passeio Extremo Leste</h4>
            <p className="card-text"><FaShuttleVan /> Passeios de Aventura</p>
            <p className="card-text"><FaClock /> Guia Turístico</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 9 pessoas</p>
            <a 
              href="https://wa.me/SEU_NUMERO?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
              className="page-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>


        <div className="card">
          <img src="/img/passeio3.jpg" alt="Passeio 2" />
          <div className="card-body">
            <h4 className="card-title">Passeio Oeste</h4>
            <p className="card-text"><FaShuttleVan /> Passeios de Aventura</p>
            <p className="card-text"><FaClock /> Guia Turístico</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 9 pessoas</p>
            <a 
              href="https://wa.me/SEU_NUMERO?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
              className="page-button" 
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
            <h4 className="card-title">Personalizado</h4>
            <p className="card-text"><FaShuttleVan /> Passeios de Aventura</p>
            <p className="card-text"><FaClock /> Guia Turístico</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 12 pessoas</p>
            <a 
              href="https://wa.me/SEU_NUMERO?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
              className="page-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Passeios;
