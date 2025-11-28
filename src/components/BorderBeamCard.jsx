import React from 'react';
import './BorderBeamCard.css';

const BorderBeamCard = ({ children, className = '' }) => {
    return (
        <div className={`border-beam-card ${className}`}>
            <div className="border-beam-content">
                {children}
            </div>
            <div className="border-beam-glow"></div>
        </div>
    );
};

export default BorderBeamCard;
