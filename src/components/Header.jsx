import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">
                    <a href="#home">Amresh</a>
                </div>
                <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className={`nav-list ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
                        <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
                        <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
                        <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
                        <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
                    </ul>
                    <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
