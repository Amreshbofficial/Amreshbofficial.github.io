import React, { useState, useEffect } from 'react';
import './FloatingNav.css';

const FloatingNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className={`floating-nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <div className="nav-logo">
                    <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="nav-profile-wrapper">
                            <img src="image/1001.png" alt="Profile" className="nav-profile-pic" />
                        </div>
                        Amresh
                    </a>
                </div>

                <ul className="desktop-menu">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={activeSection === link.id ? 'active' : ''}
                                onClick={() => setActiveSection(link.id)}
                            >
                                {link.label}
                                {activeSection === link.id && <span className="active-dot"></span>}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={activeSection === link.id ? 'active' : ''}
                                onClick={() => {
                                    setActiveSection(link.id);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default FloatingNav;
