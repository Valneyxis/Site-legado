import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../css/ContactForm.css';
import Map from '../Map';
import InputMask from 'react-input-mask';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      rating: 0,
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nome é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
      message: Yup.string().required('Mensagem é obrigatória'),
      rating: Yup.number()
        .required('Por favor, avalie nosso serviço')
        .min(1, 'Selecione uma avaliação'),
      phone: Yup.string()
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido')
        .required('Telefone é obrigatório'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await addDoc(collection(db, 'messages'), {
          ...values,
          createdAt: new Date(),
        });
        alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
        resetForm();
      } catch (error) {
        console.error('Erro ao enviar mensagem: ', error);
      }
    },
  });

  return (
    <div className="contact-container">
      <div className="map-container">
        <div className="map-text">
          <p>Nossa localização</p>
        </div>
        <Map />
      </div>

      <div className="contact-form">
        <h2>Entre em contato</h2>
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.name && formik.errors.name ? 'error-input' : ''}
              aria-describedby="nameError"
            />
            {formik.touched.name && formik.errors.name && (
              <span id="nameError" className="error-text">
                {formik.errors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.email && formik.errors.email ? 'error-input' : ''}
              aria-describedby="emailError"
            />
            {formik.touched.email && formik.errors.email && (
              <span id="emailError" className="error-text">
                {formik.errors.email}
              </span>
            )}
          </div>

          {/** Input Telefone */}
          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <InputMask
              mask="(99) 99999-9999"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.phone && formik.errors.phone ? 'error-input' : ''}
            >
              {(inputProps) => <input {...inputProps} type="text" />}
            </InputMask>
            {formik.touched.phone && formik.errors.phone && (
              <span className="error-text">{formik.errors.phone}</span>
            )}
          </div>

          {/** Input Mensagem */}
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.message && formik.errors.message ? 'error-input' : ''}
              aria-describedby="messageError"
            />
            {formik.touched.message && formik.errors.message && (
              <span id="messageError" className="error-text">
                {formik.errors.message}
              </span>
            )}
          </div>

          {/** Avaliação */}
          <div className="form-group">
            <label>Avaliação:</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${formik.values.rating >= star ? 'filled' : ''}`}
                  onClick={() => formik.setFieldValue('rating', star)}
                  role="button"
                  aria-label={`Avaliação de ${star} estrelas`}
                  tabIndex={0}
                  onKeyPress={() => formik.setFieldValue('rating', star)}
                >
                  ★
                </span>
              ))}
            </div>
            {formik.touched.rating && formik.errors.rating && (
              <span className="error-text">{formik.errors.rating}</span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
