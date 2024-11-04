import React from 'react';
import '../css/Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h4>WagnerJeri 4x4</h4>
          <p>1234 Street Name, City, State, 56789</p>
          <p>Email: wagnerjeri@company.com</p>
          <p>Telefone:(85) 9635-3617</p>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/wagnerjeritur4x4/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://wa.me/+558596353617?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva." target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
      <p className="footer-rights">&copy; 2024 Wagner Jeri 4x4. Todos os direitos reservados.</p>
      <p className="footer-credits">
        Desenvolvido por <a href="https://www.instagram.com/valneyrodrigues_/" target="_blank" rel="noopener noreferrer">Valney Rodrigues</a>
      </p>
    </footer>
  );
};

export default Footer;
