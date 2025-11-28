import React, { useRef, useState } from 'react';
import './DecayCard.css';

const DecayCard = ({ children, width = 200, height = 300, image }) => {
    const [hover, setHover] = useState(false);
    const svgRef = useRef(null);

    // Generate unique ID for SVG filter to avoid conflicts if multiple cards are used
    const filterId = `decay-filter-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div
            className="decay-card"
            style={{ width, height }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="decay-image-container">
                {image && (
                    <img
                        src={image}
                        alt="Skill Background"
                        className="decay-image"
                        style={{ filter: hover ? `url(#${filterId})` : 'none' }}
                    />
                )}
                <div className="decay-content">
                    {children}
                </div>
            </div>

            <svg className="decay-svg" ref={svgRef}>
                <defs>
                    <filter id={filterId}>
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.05"
                            numOctaves="2"
                            result="noise"
                        >
                            <animate
                                attributeName="baseFrequency"
                                dur="20s"
                                values="0.05;0.02;0.05"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale={hover ? 30 : 0}
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default DecayCard;
