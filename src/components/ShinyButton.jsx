import React from 'react';
import './ShinyButton.css';

const ShinyButton = ({ children, className = '', href, ...props }) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            className={`shiny-button ${className}`}
            {...props}
        >
            <span className="shiny-button-content">{children}</span>
            <div className="shiny-button-glare"></div>
        </Component>
    );
};

export default ShinyButton;
