import React, { useRef, useState } from 'react';
import './Dock.css';

const Dock = ({ items }) => {
    return (
        <div className="dock-container">
            <div className="dock">
                {items.map((item, index) => (
                    <DockItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

const DockItem = ({ item }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="dock-item"
            ref={ref}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="dock-icon-container">
                <i className={`${item.icon} dock-icon`}></i>
            </div>
            {isHovered && <span className="dock-tooltip">{item.label}</span>}
        </a>
    );
};

export default Dock;
