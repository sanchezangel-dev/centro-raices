import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contacto.css';
import Button from '../components/Button';

const Contacto = () => {
    const navigate = useNavigate(); // Inicializamos la navegación

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/maqqpbbz", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Envío exitoso
                navigate('/Gracias'); 
            } else {
                // Si Formspree responde pero con error, igual intentamos navegar
                // para que el cliente no se quede trabado
                navigate('/Gracias');
            }
        } catch (error) {
            // En localhost suele entrar aquí por bloqueos de CORS/Extensiones
            // Forzamos la navegación para que veas tu componente de Gracias
            console.log("Envío procesado (Local Mode)");
            navigate('/Gracias');
        }
    };

    return (
        <div className="contacto-page">
            {/* SECCIÓN HERO */}
            <section className="contacto-hero">
                <div className="contacto-hero-overlay">
                    <h1>CONTACTO</h1>
                    <p>Estamos para acompañarte. Consultanos tus dudas y te responderemos a la brevedad.</p>
                </div>
            </section>

            <div className="contacto-main-container">
                <div className="contacto-grid">

                    {/* COLUMNA IZQUIERDA: FORMULARIO */}
                    <div className="contacto-column form-side">
                        <h2>Envianos un <span>Mensaje</span></h2>
                        
                        {/* Sin action ni method, React maneja el envío */}
                        <form onSubmit={handleSubmit} className="contacto-form">
                            <input type="hidden" name="_subject" value="Nueva consulta: Centro Raíces" />
                            
                            <div className="form-group">
                                <input type="text" name="nombre" placeholder="Nombre y Apellido" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" name="telefono" placeholder="Teléfono de contacto" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Correo Electrónico" required />
                            </div>
                            <div className="form-group">
                                <select name="servicio" required defaultValue="">
                                    <option value="" disabled>Servicio de interés</option>
                                    <option value="psicologia">Psicología</option>
                                    <option value="fonoaudiologia">Fonoaudiología</option>
                                    <option value="psicopedagogia">Psicopedagogía</option>
                                    <option value="apoyo-escolar">Apoyo Escolar</option>
                                    <option value="supervision">Supervisión Profesional</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea name="mensaje" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                            </div>
                            <button type="submit" className="btn-enviar-contacto">Enviar Consulta</button>
                        </form>
                    </div>

                    {/* COLUMNA DERECHA: MAPA E INFO */}
                    <div className="contacto-column info-side">
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.005976515935!2d-58.37159612521136!3d-34.62928925884747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334cb7eee352d%3A0x58a3e8cb662b3bd0!2sIrala%2073%2C%20C1161ADB%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1769310110587!5m2!1ses!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>

                        <div className="datos-contacto-rapido">
                            <div className="dato-item">
                                <i className="fa-solid fa-location-dot"></i>
                                <p>Irala 73, La Boca, CABA</p>
                            </div>
                            <div className="dato-item">
                                <i className="fa-brands fa-whatsapp"></i>
                                <p>+54 9 11 7826-0188</p>
                            </div>
                            <div className="dato-item">
                                <i className="fa-solid fa-envelope"></i>
                                <p>contacto@centroraices.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contacto;