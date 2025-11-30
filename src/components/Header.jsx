import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <span>Tatya Vinchu</span> Bank
                </div>
                <nav className="nav">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#about" className="nav-link">About</a>
                </nav>
                <div className="auth-buttons">
                    <a href="#login" className="nav-link">Log In</a>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
