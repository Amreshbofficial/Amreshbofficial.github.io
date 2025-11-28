import React, { useEffect, useRef } from 'react';
import DecayCard from './DecayCard';

const Skills = () => {
    const skillsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillLevel = entry.target.getAttribute('data-skill-level');
                    setTimeout(() => {
                        entry.target.style.width = skillLevel + '%';
                    }, 200);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        skillsRef.current.forEach(bar => {
            if (bar) observer.observe(bar);
        });

        return () => {
            skillsRef.current.forEach(bar => {
                if (bar) observer.unobserve(bar);
            });
        };
    }, []);

    const addSkillRef = (el) => {
        if (el && !skillsRef.current.includes(el)) {
            skillsRef.current.push(el);
        }
    };

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    <DecayCard width="100%" height={200} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg">
                        <div className="skill-icon">
                            <i className="fab fa-php"></i>
                        </div>
                        <h3 className="skill-name">PHP</h3>
                        <span className="skill-percentage">90%</span>
                    </DecayCard>

                    <DecayCard width="100%" height={200} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg">
                        <div className="skill-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h3 className="skill-name">MySQL</h3>
                        <span className="skill-percentage">85%</span>
                    </DecayCard>

                    <DecayCard width="100%" height={200} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">
                        <div className="skill-icon">
                            <i className="fab fa-html5"></i>
                        </div>
                        <h3 className="skill-name">HTML</h3>
                        <span className="skill-percentage">95%</span>
                    </DecayCard>

                    <DecayCard width="100%" height={200} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">
                        <div className="skill-icon">
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <h3 className="skill-name">CSS</h3>
                        <span className="skill-percentage">90%</span>
                    </DecayCard>

                    <DecayCard width="100%" height={200} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
                        <div className="skill-icon">
                            <i className="fab fa-js"></i>
                        </div>
                        <h3 className="skill-name">JavaScript</h3>
                        <span className="skill-percentage">80%</span>
                    </DecayCard>

                    <DecayCard width="100%" height={200} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg">
                        <div className="skill-icon">
                            <i className="fab fa-python"></i>
                        </div>
                        <h3 className="skill-name">Python</h3>
                        <span className="skill-percentage">75%</span>
                    </DecayCard>

                    <DecayCard width="100%" height={200} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
                        <div className="skill-icon">
                            <i className="fab fa-react"></i>
                        </div>
                        <h3 className="skill-name">React / Vite</h3>
                        <span className="skill-percentage">70%</span>
                    </DecayCard>

                    <DecayCard width="100%" height={200} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg">
                        <div className="skill-icon">
                            <i className="fas fa-leaf"></i>
                        </div>
                        <h3 className="skill-name">MongoDB</h3>
                        <span className="skill-percentage">60%</span>
                    </DecayCard>

                    <DecayCard width="100%" height={200} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg">
                        <div className="skill-icon">
                            <i className="fab fa-git-alt"></i>
                        </div>
                        <h3 className="skill-name">Git & GitHub</h3>
                        <span className="skill-percentage">85%</span>
                    </DecayCard>
                </div>
            </div>
        </section>
    );
};

export default Skills;
