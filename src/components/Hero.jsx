import React, { useEffect } from 'react';
import Hyperspeed, { hyperspeedPresets } from './Hyperspeed';
import ShinyText from './ShinyText';
import BlurText from './BlurText';
import SpotlightButton from './SpotlightButton';

const Hero = () => {
    useEffect(() => {
        // Typing animation logic could go here if needed, 
        // but the CSS animation handles the fade-in.
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.opacity = '1';
        }
    }, []);

    return (
        <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Hyperspeed effectOptions={hyperspeedPresets.one} />
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="hero-content">
                    <h1 className="hero-title">Hi, I'm <ShinyText text="Amresh" speed={3} /> — PHP Full-Stack Developer</h1>
                    <BlurText
                        text="I build modern websites, dashboards, and full systems using PHP, MySQL, HTML, CSS & JavaScript."
                        className="hero-description"
                        delay={300}
                    />
                    <div className="hero-buttons">
                        <SpotlightButton href="#contact" className="btn-primary">Hire Me</SpotlightButton>
                        <SpotlightButton href="legacy/resume.html" target="_blank" className="btn-secondary">View Resume</SpotlightButton>
                    </div>
                </div>
                <div className="hero-animation">
                    <div className="code-animation">
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
