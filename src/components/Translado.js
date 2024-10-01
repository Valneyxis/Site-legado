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
          <img src="/img/transfer.jpg" alt="Translado 2" />
          <div className="card-body">
            <h4 className="card-title">Hotel - Aeroporto</h4>
            <p className="card-text"><FaShuttleVan /> Veículo Confortável</p>
            <p className="card-text"><FaClock /> Motorista Experiente</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
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

export default Translado;
