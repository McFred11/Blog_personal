import React from 'react';
import './Contacto.css'; // Importa el CSS aquí

const Contacto = () => {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="contact-title">¡Conectemos!</h2>
          <p className="contact-description">Me encanta conocer gente nueva y escuchar sus historias. ¡No dudes en contactarme!</p>

          <div className="contact-info-grid">
            <div className="info-item">
              <div className="info-icon-container email">
                <span>📧</span>
              </div>
              <h3>Email</h3>
              <p>maria@miblog.com</p>
            </div>
            <div className="info-item">
              <div className="info-icon-container twitter">
                <span>🐦</span>
              </div>
              <h3>Twitter</h3>
              <p>@mariablog</p>
            </div>
            <div className="info-item">
              <div className="info-icon-container instagram">
                <span>📷</span>
              </div>
              <h3>Instagram</h3>
              <p>@maria_adventures</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="form-title">Envíame un mensaje</h3>
            <form className="contact-form">
              <div className="form-group-grid">
                <input type="text" placeholder="Tu nombre" />
                <input type="email" placeholder="Tu email" />
              </div>
              <input type="text" placeholder="Asunto" />
              <textarea placeholder="Tu mensaje" rows="5"></textarea>
              <button type="button" className="submit-button">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;