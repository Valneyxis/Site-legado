// src/components/Translado.js
import React from 'react';
import '../css/Translado.css';
import { FaUserFriends, FaClock, FaShuttleVan } from 'react-icons/fa';

const Translado = () => {
  return (
    <div className="page-container">
      <h1>Serviços de Translado</h1>
      <p>Oferecemos serviços de translado confortáveis e seguros para diversos destinos.</p>
      <div className="cards-container">
        <div className="card">
          <img src="/img/transfer.jpg" alt="Translado 1" />
          <div className="card-body">
            <h4 className="card-title">Aeroporto - Hotel</h4>
            <p className="card-text"><FaShuttleVan /> Veículo Confortável</p>
            <p className="card-text"><FaClock /> Motorista Experiente</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
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
          <img src="/img/transfer.jpg" alt="Translado 2" />
          <div className="card-body">
            <h4 className="card-title">Fortaleza  - Jericoacoara</h4>
            <p className="card-text"><FaShuttleVan /> Veículo Confortável</p>
            <p className="card-text"><FaClock /> Motorista Experiente</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
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
          <img src="/img/transfer.jpg" alt="Translado 2" />
          <div className="card-body">
            <h4 className="card-title">Jijoca - Vila de Jeri</h4>
            <p className="card-text"><FaShuttleVan /> Veículo Confortável</p>
            <p className="card-text"><FaClock /> Motorista Experiente</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
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
          <img src="/img/transfer.jpg" alt="Translado 2" />
          <div className="card-body">
            <h4 className="card-title">Personalizado</h4>
            <p className="card-text"><FaShuttleVan /> Veículo Confortável</p>
            <p className="card-text"><FaClock /> Motorista Experiente</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
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

export default Translado;