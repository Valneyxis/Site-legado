// src/components/ContactForm.js
import React, { useState, useEffect } from 'react';
import '../css/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRating = (value) => {
    setFormData((prevData) => ({ ...prevData, rating: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, rating } = formData;

    const newErrors = {};
    if (!name) newErrors.name = 'Nome é obrigatório';
    if (!email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!validateEmail(email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!message) newErrors.message = 'Mensagem é obrigatória';
    if (!rating) newErrors.rating = 'Por favor, avalie nosso serviço';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormSubmitted(true);
      console.log('Formulário enviado:', formData);

      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '', rating: 0 });
    setErrors({});
  };

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <div className="contact-form">
      <h2>Entre em contato</h2>
      {formSubmitted ? (
        <div className="success-message" aria-live="polite">
          <h4>Obrigado pela sua mensagem!</h4>
          <p>Entraremos em contato em breve.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? 'error-input' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error-input' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? 'error-input' : ''}
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <div className="form-group">
            <label>Avaliação:</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={formData.rating >= star ? 'star filled' : 'star'}
                  onClick={() => handleRating(star)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={() => handleRating(star)} 
                >
                  ★
                </span>
              ))}
            </div>
            {errors.rating && <span className="error-text">{errors.rating}</span>}
          </div>

          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
