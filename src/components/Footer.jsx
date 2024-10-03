import React from 'react';
import '../css/Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h4>MyCompany</h4>
          <p>1234 Street Name, City, State, 56789</p>
          <p>Email: contact@mycompany.com</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/valney-rodrigues-b135b1166/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/valneyrodrigues_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
      <p className="footer-rights">&copy; 2024 ValneyRodrigues. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
