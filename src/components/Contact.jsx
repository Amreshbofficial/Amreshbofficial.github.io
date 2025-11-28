import React, { useState } from 'react';
import MagneticButton from './MagneticButton';
import PixelCard from './PixelCard';

const Contact = () => {
    const [focusedInput, setFocusedInput] = useState(null);

    const handleFocus = (id) => {
        setFocusedInput(id);
    };

    const handleBlur = (e, id) => {
        if (!e.target.value) {
            setFocusedInput(null);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <PixelCard className="contact-item" variant="green">
                            <div className="contact-icon">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <div className="contact-details">
                                <h3>WhatsApp</h3>
                                <p>+91 XXXXXX</p>
                            </div>
                        </PixelCard>

                        <PixelCard className="contact-item" variant="blue">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <p>amreshbaskar@gmail.com</p>
                            </div>
                        </PixelCard>

                        <PixelCard className="contact-item" variant="red">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Location</h3>
                                <p>Tamil Nadu, India</p>
                            </div>
                        </PixelCard>
                    </div>

                    <div className="contact-form">
                        <p className="hero-description"
                            style={{ color: 'var(--light-color)', marginBottom: '2rem', textAlign: 'center' }}>
                            Click below to chat with me directly on WhatsApp and get an immediate response regarding your
                            project.
                        </p>
                        <MagneticButton
                            href="https://wa.me/918072799323?text=Hello%20Amresh%2C%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20a%20project."
                            target="_blank"
                            style={{ width: '100%', marginBottom: '10px' }}
                        >
                            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> Chat on WhatsApp Now
                        </MagneticButton>
                        <p style={{ textAlign: 'center', color: 'var(--gray-color)', marginTop: '15px' }}>
                            (You can also use the email/phone details on the left)
                        </p>
                        <div id="form-message"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
