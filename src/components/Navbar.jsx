import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Layout, FileText, BookOpen, User, Home } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const navLinks = [
    { to: '/topics', label: 'Directory', icon: Layout, match: (path) => path === '/topics' },
    { to: '/about', label: 'About', icon: User, match: (path) => path === '/about' },
    { to: '/resume', label: 'Resume', icon: FileText, match: (path) => path === '/resume' },
    { to: '/blog', label: 'Blog', icon: BookOpen, match: (path) => path.startsWith('/blog') },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
            <nav className="site-header__inner" aria-label="Main navigation">
                <Link to="/" className="site-brand">
                    <img src="/lijo-john.png" alt="" className="site-brand__avatar" />
                    <div className="site-brand__text">
                        <span className="site-brand__name">Lijo <span className="site-brand__accent">John</span></span>
                        <span className="site-brand__role">Software Engineer · 6 yrs</span>
                    </div>
                </Link>

                <div className="site-nav">
                    {navLinks.map(({ to, label, icon: Icon, match }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`site-nav__link ${match(location.pathname) ? 'site-nav__link--active' : ''}`}
                        >
                            <Icon size={16} strokeWidth={2} />
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>

                <div className="site-header__tools">
                    <form onSubmit={handleSearch} className="site-search">
                        <Search size={15} className="site-search__icon" />
                        <input
                            type="search"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="site-search__input"
                            aria-label="Search"
                        />
                    </form>
                    <ThemeToggle />
                    <button
                        type="button"
                        className="site-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            <div className={`mobile-drawer ${isMenuOpen ? 'mobile-drawer--open' : ''}`} aria-hidden={!isMenuOpen}>
                <div className="mobile-drawer__header">
                    <Link to="/" className="mobile-drawer__brand" onClick={() => setIsMenuOpen(false)}>
                        <img src="/lijo-john.png" alt="" className="mobile-drawer__avatar" />
                        <div>
                            <span className="mobile-drawer__name">Lijo John</span>
                            <span className="mobile-drawer__role">Software Engineer</span>
                        </div>
                    </Link>
                    <button type="button" onClick={() => setIsMenuOpen(false)} className="mobile-drawer__close" aria-label="Close menu">
                        <X size={22} />
                    </button>
                </div>

                <div className="mobile-drawer__links">
                    <Link to="/" className="mobile-drawer__link" onClick={() => setIsMenuOpen(false)}>
                        <Home size={18} />
                        <span>Home</span>
                    </Link>
                    {navLinks.map(({ to, label, icon: Icon }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`mobile-drawer__link ${
                                location.pathname === to || (to === '/blog' && location.pathname.startsWith('/blog'))
                                    ? 'mobile-drawer__link--active'
                                    : ''
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Icon size={18} />
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {isMenuOpen && (
                <button
                    type="button"
                    className="mobile-drawer__overlay"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                />
            )}
        </header>
    );
};

export default Navbar;
