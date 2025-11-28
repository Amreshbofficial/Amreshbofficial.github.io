import React from 'react';
import Dock from './Dock';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-social">
                        <Dock items={[
                            { icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/Amreshbofficial' },
                            { icon: 'fab fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/amresh-baskar-546456221/' },
                            { icon: 'fab fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/amresh_b_/' },
                            { icon: 'fas fa-xmark', label: 'X', href: '#' },
                            { icon: 'fab fa-youtube', label: 'YouTube', href: '#' }
                        ]} />
                    </div>
                    <p className="copyright">Copyright © 2025 Amresh</p>
                    <p className="built-with">Built with ❤️ by Amresh</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
