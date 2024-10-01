import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/img/men.jpg" alt="Sobre nós" />
        </div>
        <div className="about-content">
          <h2>Sobre Nós</h2>
          <p>
            Fulano é uma empresa dedicada a oferecer serviços de translado e passeios turísticos em Jericoacoara e nas suas proximidades. Nossa missão é proporcionar aos clientes uma experiência inesquecível e confortável, com roteiros personalizados que atendem às suas necessidades. Priorizamos um atendimento de alta qualidade, garantindo que cada momento da sua jornada seja especial.
          </p>
          <ul className="about-values">
            <li><strong>Experiência</strong>: Mais de 10 anos no mercado.</li>
            <li><strong>Qualidade</strong>: Serviços de excelência com foco na satisfação do cliente.</li>
            <li><strong>Segurança</strong>: Prioridade em cada etapa do seu passeio ou translado.</li>
          </ul>
          <button className="cta-button">Saiba mais</button>
        </div>
      </div>
    </section>
  );
};

export default About;
