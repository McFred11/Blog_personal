import React from 'react';
import './Contacto.css'; // Importa el CSS aquí
import { useState } from 'react'; // Importa useState
import axios from 'axios'; // Importa axios para peticiones HTTP

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // Para mostrar mensajes al usuario

    // Función para manejar los cambios en los inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        setStatus('Enviando...'); // Muestra un mensaje de "Enviando..."
        try {
            // Envía los datos al endpoint de tu backend
            // ¡Asegúrate que la URL coincida con el puerto de tu server.js!
            const response = await axios.post('http://localhost:3001/api/contact', formData);
            setStatus(response.data.message); // Muestra el mensaje de éxito del backend
            setFormData({ name: '', email: '', subject: '', message: '' }); // Limpia el formulario
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            setStatus('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'); // Muestra mensaje de error
        }
    };
    
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
                        {/* Modifica la etiqueta form para añadir onSubmit */}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group-grid">
                                {/* Modifica los inputs para que manejen el estado */}
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    name="name" // IMPORTANTE: añade el atributo name
                                    value={formData.name}
                                    onChange={handleChange}
                                    required // Hace el campo obligatorio
                                />
                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    name="email" // IMPORTANTE: añade el atributo name
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Asunto"
                                name="subject" // IMPORTANTE: añade el atributo name
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                placeholder="Tu mensaje"
                                rows="5"
                                name="message" // IMPORTANTE: añade el atributo name
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {/* Modifica el botón para que sea de tipo "submit" */}
                            <button type="submit" className="submit-button">
                                Enviar Mensaje
                            </button>
                        </form>
                        {/* Muestra el mensaje de estado debajo del formulario */}
                        {status && <p className="form-status-message">{status}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;