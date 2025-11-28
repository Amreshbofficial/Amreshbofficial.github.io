
import React from 'react';
import TiltedCard from './TiltedCard';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <TiltedCard className="about-card-unified">
                        <div className="about-card-inner">
                            <div className="about-image">
                                <div className="profile-circle">
                                    <img src="image/1001.png" alt="Amresh Baskar - Full Stack Developer" className="profile-image" />
                                </div>
                            </div>
                            <div className="about-text-content">
                                <p>I'm a passionate Full Stack Developer with over 1 year of experience in creating dynamic web
                                    applications. I specialize in PHP and MySQL for backend development, while crafting responsive
                                    and modern user interfaces with HTML, CSS, and JavaScript.</p>
                                <p>My approach combines clean code, attention to detail, and a focus on user experience to deliver
                                    solutions that not only meet technical requirements but also provide value to end users.</p>

                                <div className="about-details">
                                    <div className="detail-item">
                                        <span className="detail-label">Name:</span>
                                        <span className="detail-value">Amresh Baskar</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Role:</span>
                                        <span className="detail-value">Full Stack Developer</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Experience:</span>
                                        <span className="detail-value">1+ Year</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Location:</span>
                                        <span className="detail-value">Tamil Nadu, India</span>
                                    </div>
                                </div>

                                <a href="#projects" className="btn btn-primary">View My Work</a>
                            </div>
                        </div>
                    </TiltedCard>
                </div>
            </div>
        </section>
    );
};

export default About;
