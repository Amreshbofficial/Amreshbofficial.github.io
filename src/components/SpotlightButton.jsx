import React, { useRef, useState } from 'react';
import './SpotlightButton.css';

const SpotlightButton = ({ children, onClick, href, className = '', ...props }) => {
    const btnRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            ref={btnRef}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`spotlight-button ${className}`}
            style={{
                '--x': `${position.x}px`,
                '--y': `${position.y}px`,
                '--opacity': opacity,
            }}
            {...props}
        >
            <span className="spotlight-bg"></span>
            <span className="spotlight-content">{children}</span>
        </Component>
    );
};

export default SpotlightButton;
