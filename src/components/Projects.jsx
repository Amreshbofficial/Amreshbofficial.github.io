import React, { useEffect, useRef } from 'react';

import GlareCard from './GlareCard';

const Projects = () => {
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
                // Reset styles for animation
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
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card-wrapper" ref={addCardRef}>
                        <GlareCard className="project-card">
                            <div className="project-inner-content">
                                <div className="project-icon-wrapper">
                                    <div className="icon-glow" style={{ background: 'linear-gradient(135deg, #FF6B6B, #EE5D5D)' }}>
                                        <i className="fas fa-shopping-bag"></i>
                                    </div>
                                </div>
                                <div className="project-details">
                                    <h3 className="project-title">LuxeMarket</h3>
                                    <p className="project-description">Modern e-commerce platform with advanced filtering and persistent cart.</p>
                                    <div className="project-tech-stack">
                                        <span>React</span>
                                        <span>Vite</span>
                                        <span>Tailwind</span>
                                    </div>
                                    <div className="project-actions">
                                        <a href="https://luxemarket-ecom.netlify.app/" target="_blank" className="action-btn primary">Live Demo</a>
                                        <a href="#" className="action-btn secondary">Code</a>
                                    </div>
                                </div>
                            </div>
                        </GlareCard>
                    </div>

                    <div className="project-card-wrapper" ref={addCardRef}>
                        <GlareCard className="project-card">
                            <div className="project-inner-content">
                                <div className="project-icon-wrapper">
                                    <div className="icon-glow" style={{ background: 'linear-gradient(135deg, #4FACFE, #00F2FE)' }}>
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                </div>
                                <div className="project-details">
                                    <h3 className="project-title">Admin Dash</h3>
                                    <p className="project-description">Comprehensive admin panel with data visualization and reporting.</p>
                                    <div className="project-tech-stack">
                                        <span>PHP</span>
                                        <span>MySQL</span>
                                        <span>Chart.js</span>
                                    </div>
                                    <div className="project-actions">
                                        <a href="Git_Projects/admin-dashboard/login.php" className="action-btn primary">Live Demo</a>
                                        <a href="https://github.com/Amreshbofficial/admin-dashboard.git" className="action-btn secondary">Code</a>
                                    </div>
                                </div>
                            </div>
                        </GlareCard>
                    </div>

                    <div className="project-card-wrapper" ref={addCardRef}>
                        <GlareCard className="project-card">
                            <div className="project-inner-content">
                                <div className="project-icon-wrapper">
                                    <div className="icon-glow" style={{ background: 'linear-gradient(135deg, #43E97B, #38F9D7)' }}>
                                        <i className="fas fa-blog"></i>
                                    </div>
                                </div>
                                <div className="project-details">
                                    <h3 className="project-title">Blog System</h3>
                                    <p className="project-description">CMS for blogging with categories, tags, and search functionality.</p>
                                    <div className="project-tech-stack">
                                        <span>PHP</span>
                                        <span>MySQL</span>
                                        <span>HTML</span>
                                    </div>
                                    <div className="project-actions">
                                        <a href="#" className="action-btn primary">Live Demo</a>
                                        <a href="#" className="action-btn secondary">Code</a>
                                    </div>
                                </div>
                            </div>
                        </GlareCard>
                    </div>

                    <div className="project-card-wrapper" ref={addCardRef}>
                        <GlareCard className="project-card">
                            <div className="project-inner-content">
                                <div className="project-icon-wrapper">
                                    <div className="icon-glow" style={{ background: 'linear-gradient(135deg, #FA709A, #FEE140)' }}>
                                        <i className="fas fa-tasks"></i>
                                    </div>
                                </div>
                                <div className="project-details">
                                    <h3 className="project-title">Task App</h3>
                                    <p className="project-description">Productivity app with drag-and-drop tasks and deadline tracking.</p>
                                    <div className="project-tech-stack">
                                        <span>JS</span>
                                        <span>PHP</span>
                                        <span>MySQL</span>
                                    </div>
                                    <div className="project-actions">
                                        <a href="#" className="action-btn primary">Live Demo</a>
                                        <a href="#" className="action-btn secondary">Code</a>
                                    </div>
                                </div>
                            </div>
                        </GlareCard>
                    </div>

                    <div className="project-card-wrapper" ref={addCardRef}>
                        <GlareCard className="project-card">
                            <div className="project-inner-content">
                                <div className="project-icon-wrapper">
                                    <div className="icon-glow" style={{ background: 'linear-gradient(135deg, #667EEA, #764BA2)' }}>
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                </div>
                                <div className="project-details">
                                    <h3 className="project-title">Inventory</h3>
                                    <p className="project-description">System for tracking inventory, sales, and suppliers with analytics.</p>
                                    <div className="project-tech-stack">
                                        <span>PHP</span>
                                        <span>MySQL</span>
                                        <span>JS</span>
                                    </div>
                                    <div className="project-actions">
                                        <a href="#" className="action-btn primary">Live Demo</a>
                                        <a href="#" className="action-btn secondary">Code</a>
                                    </div>
                                </div>
                            </div>
                        </GlareCard>
                    </div>

                    <div className="project-card-wrapper" ref={addCardRef}>
                        <GlareCard className="project-card">
                            <div className="project-inner-content">
                                <div className="project-icon-wrapper">
                                    <div className="icon-glow" style={{ background: 'linear-gradient(135deg, #FF9A9E, #FECFEF)' }}>
                                        <i className="fas fa-user-friends"></i>
                                    </div>
                                </div>
                                <div className="project-details">
                                    <h3 className="project-title">CRM System</h3>
                                    <p className="project-description">Customer relationship management for tracking leads and sales.</p>
                                    <div className="project-tech-stack">
                                        <span>PHP</span>
                                        <span>MySQL</span>
                                        <span>JS</span>
                                    </div>
                                    <div className="project-actions">
                                        <a href="#" className="action-btn primary">Live Demo</a>
                                        <a href="#" className="action-btn secondary">Code</a>
                                    </div>
                                </div>
                            </div>
                        </GlareCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
