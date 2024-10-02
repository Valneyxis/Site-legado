import React from 'react';
import '../css/Benefits.css';
import { FaUserFriends, FaClock, FaShuttleVan } from 'react-icons/fa';


const Benefits = () => {
  return (
    <section className="benefits" id="benefits" data-aos="fade-up">
      <h2>Meus Serviços</h2>

      <div className="benefit-section">
        <h3>Passeios</h3>
        <div className="benefit-cards">
        <div className="card">
          <img src="/img/passeio.jpg" alt="Passeio 1" />
          <div className="card-body">
            <h4 className="card-title">Beach Adventure</h4>
            <p className="card-text"><FaShuttleVan /> Passeios Turísticos</p>
            <p className="card-text"><FaClock /> Guia Turístico</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 09 pessoas</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5588981692600&text&type=phone_number&app_absent=0"
              className="benefit-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/img/passeio.jpg" alt="Passeio 1" />
          <div className="card-body">
            <h4 className="card-title">Beach Adventure</h4>
            <p className="card-text"><FaShuttleVan /> Passeios Turísticos</p>
            <p className="card-text"><FaClock /> Guia Turístico</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 09 pessoas</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5588981692600&text&type=phone_number&app_absent=0"
              className="benefit-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/img/passeio.jpg" alt="Passeio 1" />
          <div className="card-body">
            <h4 className="card-title">Beach Adventure</h4>
            <p className="card-text"><FaShuttleVan /> Passeios Turísticos</p>
            <p className="card-text"><FaClock /> Guia Turístico</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 09 pessoas</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5588981692600&text&type=phone_number&app_absent=0"
              className="benefit-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>
        </div>
      </div>

      <div className="benefit-section" data-aos="fade-up">
        <h3>Translados</h3>
        <div className="benefit-cards">
        <div className="card">
          <img src="/img/transfer.jpg" alt="Translado 1" />
          <div className="card-body">
            <h4 className="card-title">Aeroporto - Hotel</h4>
            <p className="card-text"><FaShuttleVan /> Veículo Confortável</p>
            <p className="card-text"><FaClock /> Motorista Experiente</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5588981692600&text&type=phone_number&app_absent=0"
              className="benefit-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>
          <div className="card">
          <img src="/img/transfer.jpg" alt="Translado 1" />
          <div className="card-body">
            <h4 className="card-title">Aeroporto - Hotel</h4>
            <p className="card-text"><FaShuttleVan /> Veículo Confortável</p>
            <p className="card-text"><FaClock /> Motorista Experiente</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5588981692600&text&type=phone_number&app_absent=0"
              className="benefit-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/img/transfer.jpg" alt="Translado 1" />
          <div className="card-body">
            <h4 className="card-title">Aeroporto - Hotel</h4>
            <p className="card-text"><FaShuttleVan /> Veículo Confortável</p>
            <p className="card-text"><FaClock /> Motorista Experiente</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5588981692600&text&type=phone_number&app_absent=0"
              className="benefit-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
