// src/components/Sobre.js
import React from 'react';
import '../css/Sobre.css'; 

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h2>Sobre Nós</h2>
      <div className="sobre-content">
        <div className="sobre-image">
          <img src="/img/men.png" alt="Dono da Empresa" />
        </div>
        <div className="sobre-text">
          <p>
            Somos uma empresa dedicada a oferecer serviços de translado e passeios turísticos
            na região de Jericoacoara e arredores. Nossa missão é proporcionar aos clientes uma 
            experiência inesquecível, com conforto e roteiros personalizados que atendem a todas 
            as necessidades. Valorizamos cada detalhe para que sua jornada seja especial e sem 
            preocupações.
          </p>
          <p>
            Temos o compromisso de oferecer serviços de alta 
            qualidade, garantindo segurança e satisfação em cada etapa de seu passeio ou translado.
            Nosso diferencial é a proximidade com nossos clientes, entendendo e atendendo seus 
            desejos de forma única e exclusiva.
          </p>
          <h3>Nossos Valores</h3>
          <ul className="sobre-values">
            <li><strong>Experiência:</strong> Anos no mercado, com conhecimento aprofundado na região.</li>
            <li><strong>Qualidade:</strong> Excelência nos serviços, priorizando o conforto e a satisfação dos clientes.</li>
            <li><strong>Segurança:</strong> Nossas operações garantem total segurança em cada translado ou passeio.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
