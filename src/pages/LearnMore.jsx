import React from 'react';
import './LearnMore.css';

const LearnMore = () => {
    return (
        <div className="learn-more-page">
            <section className="learn-hero">
                <div className="container">
                    <h1 className="section-title">Why Choose <span className="gradient-text">Tatya Vinchu?</span></h1>
                    <p className="section-subtitle">
                        We don't just store your money; we guard it with our lives (and afterlives).
                    </p>
                </div>
            </section>

            <section className="features-grid container">
                <div className="feature-card">
                    <div className="feature-icon">💰</div>
                    <h3>Haunted Savings</h3>
                    <p>Interest rates so high, they're scary. Watch your wealth grow in the shadows.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🔒</div>
                    <h3>Eternal Security</h3>
                    <p>Our vaults are protected by ancient curses. No one steals from Tatya Vinchu.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>Lightning Loans</h3>
                    <p>Get approved in a flash. Repayment terms are... flexible (mostly).</p>
                </div>
            </section>

            <section className="cta-section container">
                <h2>Ready to join the dark side of banking?</h2>
                <button className="btn btn-primary">Open an Account (If You Dare)</button>
            </section>
        </div>
    );
};

export default LearnMore;
