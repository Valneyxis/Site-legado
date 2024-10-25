import React from 'react';
import '../css/Benefits.css';
import { FaUserFriends, FaClock, FaShuttleVan,FaUsers  } from 'react-icons/fa';

var contatoWpp  = "https://wa.me/SEU_NUMERO?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
const Benefits = () => {
  return (
    <section className="benefits" id="benefits" data-aos="fade-up">
      <h2>Meus Serviços</h2>
      <div className="benefit-section" data-aos="fade-up">
        <h3>Translados</h3>
        <div className="benefit-cards">
        <div className="card">
          <img src="/img/transfer.jpg" alt="Translado 1" />
          <div className="card-body">
            <h4 className="card-title">Fortaleza  - Jericoacoara</h4>
            <p className="card-text"><FaShuttleVan /> Hilux 4x4</p>
            <p className="card-text"><FaClock /> 4h30min de viagem</p>
            <p className="card-text"><FaUsers /> Privativo e Compartilhado</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
            <a 
              href={contatoWpp}
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
            <h4 className="card-title">Jijoca - Vila de Jeri</h4>
            <p className="card-text"><FaShuttleVan /> Hilux 4x4</p>
            <p className="card-text"><FaClock /> 50min de viagem</p>
            <p className="card-text"><FaUsers /> Privativo e Compartilhado</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
            <a 
              href={contatoWpp}
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
            <h4 className="card-title">Jericoacoara - Fortaleza</h4>
            <p className="card-text"><FaShuttleVan /> Hilux 4x4</p>
            <p className="card-text"><FaClock /> 4h30min de viagem</p>
            <p className="card-text"><FaUsers /> Privativo e Compartilhado</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 04 pessoas</p>
            <a 
              href={contatoWpp}
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

      <div className="benefit-section">
        <h3>Passeios</h3>
        <div className="benefit-cards">
        <div className="card">
          <img src="/img/passeio1.jpg" alt="Passeio 1" />
          <div className="card-body">
            <h4 className="card-title">Passeio Leste</h4>
            <p className="card-text"><FaShuttleVan /> Passeios Turísticos</p>
            <p className="card-text"><FaShuttleVan /> Hilux 4x4, Buggy</p>
            <p className="card-text"><FaClock /> 6hs de passeio</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 2-9 pessoas</p>
            <a 
              href={contatoWpp}
              className="benefit-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/img/passeio2.jpg" alt="Passeio 1" />
          <div className="card-body">
            <h4 className="card-title">Passeio Extremo Leste</h4>
            <p className="card-text"><FaShuttleVan /> Passeios Turísticos</p>
            <p className="card-text"><FaShuttleVan /> Hilux 4x4, Buggy</p>
            <p className="card-text"><FaClock /> 6hs de passeio</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 2-9 pessoas</p>
            <a 
              href={contatoWpp}
              className="benefit-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve agora
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/img/passeio3.jpg" alt="Passeio 1" />
          <div className="card-body">
            <h4 className="card-title">Passeio Oeste</h4>
            <p className="card-text"><FaShuttleVan /> Passeios Turísticos</p>
            <p className="card-text"><FaShuttleVan /> Quadriciclo, Buggy</p>
            <p className="card-text"><FaClock /> 6hs de passeio</p>
            <p className="card-text"><FaUserFriends /> Capacidade: 2-4 pessoas</p>
            <a 
              href={contatoWpp}
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
