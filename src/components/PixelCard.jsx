import React, { useState } from 'react';
import './PixelCard.css';

const PixelCard = ({ children, className = '', variant = 'default' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`pixel-card ${variant} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="pixel-content">
                {children}
            </div>
            <div className={`pixel-overlay ${isHovered ? 'active' : ''}`}></div>
        </div>
    );
};

export default PixelCard;
