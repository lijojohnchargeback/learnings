import { Link } from 'react-router-dom';
import {
    Mail, Github, Linkedin, Calendar, MapPin,
    Briefcase, GraduationCap, Code2, Trophy,
    ArrowLeft, Download, ExternalLink, Sparkles
} from 'lucide-react';
import './ResumePage.css';

export default function ResumePage() {
    return (
        <div className="resume-page">
            <header className="resume-header">
                <div className="resume-header-content">
                    <Link to="/" className="resume-back-btn">
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>
                    <button className="resume-download-btn">
                        <Download size={16} />
                        <span>Download PDF</span>
                    </button>
                </div>
            </header>

            <main className="resume-container">
                {/* Profile Section */}
                <section className="resume-profile-section">
                    <div className="profile-hero">
                        <div className="profile-image-container">
                            <img src="/lijo-john.png" alt="Lijo John" className="resume-photo" />
                            <div className="profile-status-badge">Available for Hire</div>
                        </div>
                        <div className="profile-meta">
                            <h1 className="profile-name">Sarah Mitchell</h1>
                            <p className="profile-title">Lead Full-Stack Architectural Developer</p>
                            <div className="profile-location">
                                <MapPin size={14} />
                                <span>San Francisco, CA</span>
                            </div>
                            <div className="profile-contact-grid">
                                <a href="mailto:sarah.m@example.com" className="profile-contact-item">
                                    <Mail size={16} />
                                    <span>sarah.m@example.com</span>
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="profile-contact-item">
                                    <Github size={16} />
                                    <span>github.com/sarahm</span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="profile-contact-item">
                                    <Linkedin size={16} />
                                    <span>linkedin.com/in/sarahm</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="profile-summary">
                        <div className="summary-badge">
                            <Sparkles size={14} />
                            <span>Executive Summary</span>
                        </div>
                        <p>
                            Award-winning Full-Stack Architect with over 8 years of experience building mission-critical
                            distributed systems. Expert in React ecosystems, scalable Node.js microservices,
                            and cloud-native architectures. Dedicated to clean code, performance optimization,
                            and mentoring the next generation of engineers.
                        </p>
                    </div>
                </section>

                <div className="resume-grid-layout">
                    {/* Left Column: Experience & Education */}
                    <div className="resume-column-main">
                        <section className="content-block">
                            <div className="block-header">
                                <Briefcase size={20} className="header-icon" />
                                <h2>Professional Experience</h2>
                            </div>
                            <div className="timeline-trail">
                                <div className="timeline-entry">
                                    <div className="entry-dot"></div>
                                    <div className="entry-content">
                                        <div className="entry-header">
                                            <h3>Senior Full-Stack Architect</h3>
                                            <span className="entry-date">2022 — Present</span>
                                        </div>
                                        <p className="entry-org">Global Tech Solutions • Hybrid</p>
                                        <ul className="entry-tasks">
                                            <li>Architected a real-time data streaming platform handling 1M+ events/sec using Node.js and Kafka.</li>
                                            <li>Reduced frontend bundle sizes by 40% through advanced tree-shaking and dynamic module injection.</li>
                                            <li>Standardized the global component library used by 50+ internal development teams.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="timeline-entry">
                                    <div className="entry-dot"></div>
                                    <div className="entry-content">
                                        <div className="entry-header">
                                            <h3>Lead Product Engineer</h3>
                                            <span className="entry-date">2019 — 2022</span>
                                        </div>
                                        <p className="entry-org">Innovation Labs • San Francisco</p>
                                        <ul className="entry-tasks">
                                            <li>Built a cross-platform mobile application using React Native that scaled to 500k active users.</li>
                                            <li>Migrated legacy monolithic architecture to AWS microservices, improving uptime to 99.99%.</li>
                                            <li>Managed an agile team of 12 developers, consistently delivering features 15% ahead of schedule.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content-block">
                            <div className="block-header">
                                <GraduationCap size={20} className="header-icon" />
                                <h2>Education</h2>
                            </div>
                            <div className="education-grid">
                                <div className="edu-item">
                                    <div className="edu-meta">
                                        <h3>M.S. Software Engineering</h3>
                                        <span className="edu-date">2017 — 2019</span>
                                    </div>
                                    <p className="edu-org">Stanford University</p>
                                </div>
                                <div className="edu-item">
                                    <div className="edu-meta">
                                        <h3>B.S. Computer Science</h3>
                                        <span className="edu-date">2013 — 2017</span>
                                    </div>
                                    <p className="edu-org">UC Berkeley • Magna Cum Laude</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Skills & Projects */}
                    <div className="resume-column-side">
                        <section className="content-block-shaded">
                            <div className="block-header">
                                <Code2 size={20} className="header-icon" />
                                <h2>Technical Arsenal</h2>
                            </div>
                            <div className="skills-stack">
                                <div className="skill-group">
                                    <h4>Frontend Core</h4>
                                    <div className="skill-pills">
                                        <span>React / Next.js</span>
                                        <span>TypeScript</span>
                                        <span>Tailwind</span>
                                        <span>Framer Motion</span>
                                    </div>
                                </div>
                                <div className="skill-group">
                                    <h4>Backend / Logic</h4>
                                    <div className="skill-pills">
                                        <span>Node.js / Go</span>
                                        <span>PostgreSQL</span>
                                        <span>Redis / Kafka</span>
                                        <span>GraphQL</span>
                                    </div>
                                </div>
                                <div className="skill-group">
                                    <h4>Infrastructure</h4>
                                    <div className="skill-pills">
                                        <span>AWS / Terraform</span>
                                        <span>Kubernetes</span>
                                        <span>CI/CD Pipelines</span>
                                        <span>Docker</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content-block-shaded">
                            <div className="block-header">
                                <Trophy size={20} className="header-icon" />
                                <h2>Significant Work</h2>
                            </div>
                            <div className="projects-mini-list">
                                <div className="project-mini-item">
                                    <div className="project-mini-top">
                                        <h3>Architectural Docs</h3>
                                        <ExternalLink size={12} />
                                    </div>
                                    <p>Comprehensive knowledge base covering high-level system design and patterns.</p>
                                </div>
                                <div className="project-mini-item">
                                    <div className="project-mini-top">
                                        <h3>Pulse Analytics</h3>
                                        <ExternalLink size={12} />
                                    </div>
                                    <p>Open-source real-time dashboard for monitoring distributed microservices.</p>
                                </div>
                                <div className="project-mini-item">
                                    <div className="project-mini-top">
                                        <h3>SecureGate Auth</h3>
                                        <ExternalLink size={12} />
                                    </div>
                                    <p>Enterprise-grade biometric authentication module for modern web apps.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
