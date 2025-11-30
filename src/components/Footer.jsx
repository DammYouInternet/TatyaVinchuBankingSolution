import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="logo">
                        <span>Tatya Vinchu</span> Bank
                    </div>
                    <p className="footer-desc">
                        The next generation of banking. Secure, fast, and built for you.
                    </p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Security</a>
                        <a href="#">Cards</a>
                    </div>
                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="link-group">
                        <h4>Legal</h4>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Tatya Vinchu Bank. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
