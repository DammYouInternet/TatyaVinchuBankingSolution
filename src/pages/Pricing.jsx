import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="pricing-page">
            <section className="pricing-hero">
                <div className="container">
                    <h1 className="section-title">Invest in Your <span className="gradient-text">Afterlife</span></h1>
                    <p className="section-subtitle">
                        Choose the plan that best suits your mortal (and immortal) needs.
                    </p>
                </div>
            </section>

            <section className="pricing-container container">
                <div className="pricing-card silver">
                    <div className="card-header">
                        <h3>Silver Soul</h3>
                        <div className="price">Free</div>
                        <p>For the casual haunter.</p>
                    </div>
                    <ul className="features-list">
                        <li>Basic Haunted Savings</li>
                        <li>1% Cashback on Potions</li>
                        <li>Standard Curse Protection</li>
                        <li>Monthly Seance Support</li>
                    </ul>
                    <button className="btn btn-outline">Join Silver</button>
                </div>

                <div className="pricing-card gold popular">
                    <div className="popular-tag">Most Popular</div>
                    <div className="card-header">
                        <h3>Gold Ghoul</h3>
                        <div className="price">$9.99<span>/mo</span></div>
                        <p>For the serious spirit.</p>
                    </div>
                    <ul className="features-list">
                        <li>High-Yield Haunted Savings</li>
                        <li>2% Cashback on Everything</li>
                        <li>Advanced Curse Protection</li>
                        <li>Weekly Seance Support</li>
                        <li>Free Ectoplasm Transfers</li>
                    </ul>
                    <button className="btn btn-primary">Go Gold</button>
                </div>

                <div className="pricing-card platinum">
                    <div className="card-header">
                        <h3>Platinum Phantom</h3>
                        <div className="price">$19.99<span>/mo</span></div>
                        <p>For the elite entity.</p>
                    </div>
                    <ul className="features-list">
                        <li>Maximum Haunted Yields</li>
                        <li>3% Cashback on Everything</li>
                        <li>Total Curse Immunity</li>
                        <li>24/7 Direct Line to the Beyond</li>
                        <li>Concierge Exorcism Services</li>
                        <li>VIP Access to Crypts</li>
                    </ul>
                    <button className="btn btn-outline">Go Platinum</button>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
