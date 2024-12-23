// src/components/Passeios.js
import React from 'react';
import '../css/Passeios.css';
import { FaUserFriends, FaClock, FaShuttleVan } from 'react-icons/fa';

var contatoWpp  = "https://wa.me/+558596353617?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
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
            <p className="card-text"><FaShuttleVan /> Hilux 4x4,Buggy</p>
            <p className="card-text"><FaClock /> 6hs de passeio</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 2-9 pessoas</p>
            <a 
              href={contatoWpp}
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
            <p className="card-text"><FaShuttleVan /> Hilux 4x4, Buggy</p>
            <p className="card-text"><FaClock /> 6hs de passeio</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 2-9 pessoas</p>
            <a 
              href={contatoWpp}
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
            <p className="card-text"><FaShuttleVan /> Quadriciclo, Buggy</p>
            <p className="card-text"><FaClock /> 6hs de passeio</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 2-4 pessoas</p>
            <a 
              href={contatoWpp}
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
            <p className="card-text"><FaShuttleVan /> Hilux 4x4, Buggy</p>
            <p className="card-text"><FaClock /> 6hs de passeio</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 4-9 pessoas</p>
            <a 
              href={contatoWpp}
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
