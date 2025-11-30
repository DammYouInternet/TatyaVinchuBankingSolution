import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <span>Tatya Vinchu</span> Bank
                </div>
                <nav className="nav">
                    <Link to="/features" className="nav-link">Features</Link>
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                    <Link to="/about" className="nav-link">About</Link>
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
