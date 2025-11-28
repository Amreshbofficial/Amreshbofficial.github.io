import React, { useRef, useState } from 'react';
import './GlareCard.css';

const GlareCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 10;

        // Glare position
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;

        setStyle({
            '--rotate-x': `${rotateX}deg`,
            '--rotate-y': `${rotateY}deg`,
            '--glare-x': `${glareX}%`,
            '--glare-y': `${glareY}%`,
            '--bg-x': `${glareX}%`,
            '--bg-y': `${glareY}%`,
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            '--rotate-x': '0deg',
            '--rotate-y': '0deg',
            '--glare-x': '50%',
            '--glare-y': '50%',
            '--bg-x': '50%',
            '--bg-y': '50%',
            transition: 'transform 0.5s ease, --glare-x 0.5s ease, --glare-y 0.5s ease'
        });
    };

    return (
        <div
            className={`glare-card-container ${className}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={style}
        >
            <div className="glare-card">
                <div className="glare-card-content">
                    {children}
                </div>
                <div className="glare-effect"></div>
            </div>
        </div>
    );
};

export default GlareCard;
