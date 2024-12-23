import React from 'react';
import '../css/About.css';
import { NavLink } from 'react-router-dom'; 

const About = () => {
  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="about-container">
        <div className="about-image">
          <img src="/img/men.png" alt="Sobre nós" />
        </div>
        <div className="about-content">
          <h2>Sobre Nós</h2>
          <p>
            Somos uma empresa dedicada a oferecer serviços de translado e passeios turísticos em Jericoacoara e nas suas proximidades. Nossa missão é proporcionar aos clientes uma experiência inesquecível e confortável, com roteiros personalizados que atendem às suas necessidades.
          </p>
          <p>
            Priorizamos um atendimento de alta qualidade, garantindo que cada momento da sua jornada seja especial.
          </p>
          <NavLink to="/sobre" className="about-button">Saiba mais</NavLink> 
        </div>
      </div>
    </section>
  );
};

export default About;
