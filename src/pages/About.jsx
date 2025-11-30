import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="section-title">The Legend of <span className="gradient-text">Tatya Vinchu</span></h1>
                    <p className="section-subtitle">
                        From a possessed doll to a banking mogul. This is our story.
                    </p>
                </div>
            </section>

            <section className="about-content container">
                <div className="story-section">
                    <div className="story-text">
                        <h2>Our Dark Beginnings</h2>
                        <p>
                            It all started with a simple mantra: "Om Phat Swaha." Tatya Vinchu wasn't always a bank;
                            he was a spirit seeking a new vessel. After realizing that dolls were too fragile and human bodies
                            too high-maintenance, he discovered the one thing that lasts forever: <strong>Compound Interest</strong>.
                        </p>
                        <p>
                            Founded in the shadows of the underworld, Tatya Vinchu Bank was established to serve those who
                            believe that wealth should follow you to the grave... and beyond.
                        </p>
                    </div>
                    <div className="story-image">
                        <div className="placeholder-image">Tatya's Portrait</div>
                    </div>
                </div>

                <div className="values-section">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">👻</div>
                            <h3>Transparency</h3>
                            <p>We're so transparent, you can see right through us. Literally.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">⚰️</div>
                            <h3>Longevity</h3>
                            <p>We plan for the long term. The <em>very</em> long term.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🩸</div>
                            <h3>Commitment</h3>
                            <p>We put our blood, sweat, and other fluids into growing your wealth.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
