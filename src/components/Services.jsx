import React, { useEffect, useRef } from 'react';
import SpotlightCard from './SpotlightCard';

const Services = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cardsRef.current.forEach(card => {
            if (card) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            }
        });

        return () => {
            cardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    const addCardRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">My Services</h2>
                <div className="services-grid">

                    <div className="service-card-wrapper" ref={addCardRef}>
                        <SpotlightCard className="service-card" spotlightColor="rgba(102, 126, 234, 0.2)">
                            <div className="service-icon-wrapper">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3 className="service-title">Custom Website Development</h3>
                            <p className="service-description">Custom web application development from simple landing pages to
                                complex systems using PHP, MySQL, and modern JavaScript.</p>
                        </SpotlightCard>
                    </div>

                    <div className="service-card-wrapper" ref={addCardRef}>
                        <SpotlightCard className="service-card" spotlightColor="rgba(102, 126, 234, 0.2)">
                            <div className="service-icon-wrapper">
                                <i className="fab fa-wordpress"></i>
                            </div>
                            <h3 className="service-title">WordPress Website Development</h3>
                            <p className="service-description">Building, customizing, and maintaining professional, responsive
                                websites and blogs using the WordPress CMS.</p>
                        </SpotlightCard>
                    </div>

                    <div className="service-card-wrapper" ref={addCardRef}>
                        <SpotlightCard className="service-card" spotlightColor="rgba(102, 126, 234, 0.2)">
                            <div className="service-icon-wrapper">
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <h3 className="service-title">E-Commerce Development</h3>
                            <p className="service-description">Building online stores with product catalogs, shopping carts, payment
                                gateways, and inventory management.</p>
                        </SpotlightCard>
                    </div>

                    <div className="service-card-wrapper" ref={addCardRef}>
                        <SpotlightCard className="service-card" spotlightColor="rgba(102, 126, 234, 0.2)">
                            <div className="service-icon-wrapper">
                                <i className="fas fa-chart-bar"></i>
                            </div>
                            <h3 className="service-title">Admin Panel / Dashboard</h3>
                            <p className="service-description">Creating intuitive admin interfaces for managing content, users,
                                analytics, and business operations.</p>
                        </SpotlightCard>
                    </div>

                    <div className="service-card-wrapper" ref={addCardRef}>
                        <SpotlightCard className="service-card" spotlightColor="rgba(102, 126, 234, 0.2)">
                            <div className="service-icon-wrapper">
                                <i className="fas fa-file-invoice-dollar"></i>
                            </div>
                            <h3 className="service-title">Data Entry & Invoicing Services</h3>
                            <p className="service-description">Reliable services for data entry, US invoice/billing processing, data
                                cleaning, and spreadsheet management.</p>
                        </SpotlightCard>
                    </div>

                    <div className="service-card-wrapper" ref={addCardRef}>
                        <SpotlightCard className="service-card" spotlightColor="rgba(102, 126, 234, 0.2)">
                            <div className="service-icon-wrapper">
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3 className="service-title">Bug Fixing & Maintenance</h3>
                            <p className="service-description">Fixing issues, improving performance, and maintaining existing
                                websites and applications.</p>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
