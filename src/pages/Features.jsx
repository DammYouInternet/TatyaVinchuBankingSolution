import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div className="features-page">
            <section className="features-hero">
                <div className="features-hero-content">
                    <h1>Banking Reimagined</h1>
                    <p>Experience the future of finance with our cutting-edge features and premium card options.</p>
                </div>
            </section>

            <section className="banking-features">
                <div className="container">
                    <h2>Why Choose Tatya Vinchu?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile First</h3>
                            <p>Manage your money on the go with our award-winning mobile app.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🛡️</div>
                            <h3>Secure Payments</h3>
                            <p>Top-tier security protocols to keep your transactions safe and private.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🌍</div>
                            <h3>Global Access</h3>
                            <p>Use your card anywhere in the world with zero foreign transaction fees.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>24/7 Support</h3>
                            <p>Our dedicated support team is always here to help you, day or night.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="card-options">
                <div className="container">
                    <h2>Choose Your Card</h2>
                    <div className="cards-grid">
                        <div className="card-item silver">
                            <div className="card-visual">
                                <div className="chip"></div>
                                <div className="card-number">**** **** **** 1234</div>
                                <div className="card-name">Silver Tier</div>
                                <div className="card-logo">VISA</div>
                            </div>
                            <div className="card-details">
                                <h3>Silver Card</h3>
                                <p>Perfect for everyday spending.</p>
                                <ul>
                                    <li>No annual fee</li>
                                    <li>1% Cashback</li>
                                    <li>Basic Support</li>
                                </ul>
                                <button className="btn-apply">Apply Now</button>
                            </div>
                        </div>

                        <div className="card-item gold">
                            <div className="card-visual">
                                <div className="chip"></div>
                                <div className="card-number">**** **** **** 5678</div>
                                <div className="card-name">Gold Tier</div>
                                <div className="card-logo">VISA</div>
                            </div>
                            <div className="card-details">
                                <h3>Gold Card</h3>
                                <p>Enhanced benefits for the frequent shopper.</p>
                                <ul>
                                    <li>$99 annual fee</li>
                                    <li>2% Cashback</li>
                                    <li>Travel Insurance</li>
                                </ul>
                                <button className="btn-apply">Apply Now</button>
                            </div>
                        </div>

                        <div className="card-item platinum">
                            <div className="card-visual">
                                <div className="chip"></div>
                                <div className="card-number">**** **** **** 9012</div>
                                <div className="card-name">Platinum Tier</div>
                                <div className="card-logo">VISA</div>
                            </div>
                            <div className="card-details">
                                <h3>Platinum Card</h3>
                                <p>Exclusive perks for the elite.</p>
                                <ul>
                                    <li>$299 annual fee</li>
                                    <li>3% Cashback</li>
                                    <li>Concierge Service</li>
                                </ul>
                                <button className="btn-apply">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
