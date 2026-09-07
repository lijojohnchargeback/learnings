import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="brand-icon">📚</span>
                            <span className="brand-text">Tech Notes</span>
                        </Link>
                        <p className="footer-tagline">
                            Documentation for developers, by developers. <br />
                            Breaking down complexity, one module at a time.
                        </p>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-links-column">
                            <h4 className="footer-heading">Platform</h4>
                            <Link to="/" className="footer-link">Home</Link>
                            <Link to="/topics" className="footer-link">All Topics</Link>
                            <Link to="/resume" className="footer-link">Resume</Link>
                        </div>
                        <div className="footer-links-column">
                            <h4 className="footer-heading">Social</h4>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
                        </div>
                        <div className="footer-links-column">
                            <h4 className="footer-heading">Contact</h4>
                            <a href="mailto:contact@example.com" className="footer-link">Email</a>
                            <Link to="/about" className="footer-link">About Me</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © {currentYear} Tech Notes. Built with <Heart size={14} className="heart-icon" /> for the community.
                    </div>
                    <div className="footer-social-icons">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-link"><Github size={18} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link"><Linkedin size={18} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link"><Twitter size={18} /></a>
                        <a href="mailto:contact@example.com" className="social-icon-link"><Mail size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
