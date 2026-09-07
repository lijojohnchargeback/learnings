import React from 'react';
import { Mail, MapPin, Briefcase, Award, Github, Linkedin } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
    const experiences = [
        {
            title: 'Senior Software Engineer',
            company: 'Tech Company',
            period: '2022 - Present',
            description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
            skills: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript']
        },
        {
            title: 'Software Engineer',
            company: 'Previous Company',
            period: '2020 - 2022',
            description: 'Developed and maintained full-stack applications, implemented CI/CD pipelines, and optimized database performance.',
            skills: ['JavaScript', 'React', 'Express', 'MySQL', 'Docker']
        }
    ];

    const skills = {
        'Frontend': ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Redux', 'Next.js'],
        'Backend': ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Microservices'],
        'Database': ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
        'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
        'Tools': ['Git', 'Postman', 'VS Code', 'Jira', 'Figma']
    };

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <div className="profile-image">
                            <img
                                src="/lijo-john.png"
                                alt="Lijo John"
                                className="about-profile-photo"
                            />
                        </div>
                        <h1 className="about-title">Hi, I'm Lijo John</h1>
                        <p className="about-subtitle">Software Engineer with 6 Years of Experience</p>
                        <div className="about-meta">
                            <span className="meta-item">
                                <Briefcase size={16} />
                                6+ Years Experience
                            </span>
                            <span className="meta-item">
                                <MapPin size={16} />
                                Location
                            </span>
                            <span className="meta-item">
                                <Mail size={16} />
                                lijo@example.com
                            </span>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/lijo" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/lijo" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">About Me</h2>
                    </div>
                    <div className="about-content">
                        <p>
                            I'm Lijo John, a passionate software engineer with 6 years of hands-on experience
                            in full-stack web development. I love building scalable applications, learning new
                            technologies, and sharing knowledge with the developer community.
                        </p>
                        <p>
                            Over the past six years, I've worked on diverse projects ranging from e-commerce
                            platforms to real-time analytics systems. I'm particularly interested in modern
                            JavaScript frameworks, cloud architecture, and developer tools.
                        </p>
                        <p>
                            This learning notes platform is a collection of all the knowledge I've gathered
                            throughout my journey as a software engineer. I hope it helps others in their
                            learning path!
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="experience-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <Briefcase size={28} />
                            Professional Experience
                        </h2>
                    </div>
                    <div className="experience-timeline">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <div className="experience-marker"></div>
                                <div className="experience-card">
                                    <div className="experience-header">
                                        <h3 className="experience-title">{exp.title}</h3>
                                        <span className="experience-period">{exp.period}</span>
                                    </div>
                                    <p className="experience-company">{exp.company}</p>
                                    <p className="experience-description">{exp.description}</p>
                                    <div className="experience-skills">
                                        {exp.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <Award size={28} />
                            Technical Skills
                        </h2>
                    </div>
                    <div className="skills-grid">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category} className="skill-category">
                                <h3 className="skill-category-title">{category}</h3>
                                <div className="skill-list">
                                    {skillList.map((skill, index) => (
                                        <span key={index} className="skill-badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
