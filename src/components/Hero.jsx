import React from 'react';
import { Link } from 'react-router-dom';
import tatyaImage from '../assets/tatya.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Banking for the <span className="gradient-text">Tatya Vinchu</span>
                    </h1>
                    <p className="hero-subtitle">
                        Experience seamless financial management with Tatya Vinchu Bank.
                        Smart insights, instant transfers, and premium security.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">Open Account</button>
                        <Link to="/learn-more" className="btn btn-outline">Learn More</Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="card-visual" style={{ '--card-bg': `url(${tatyaImage})` }}>
                        <div className="card-chip"></div>
                        <div className="card-number">**** **** 1993 2001</div>
                        <div className="card-info">
                            <span>Tatya Vinchu</span>
                            <span>12/28</span>
                        </div>
                        <div className="card-logo">Tatya</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
