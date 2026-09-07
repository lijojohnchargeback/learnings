import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import {
    Github, Linkedin, Twitter, Mail, ArrowRight,
    Sparkles, Code2, Zap, BookOpen, Users, TrendingUp, Star
} from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
    const totalTopics = categories.reduce((acc, cat) => acc + cat.topics.length, 0);

    return (
        <div className="hp">

            {/* ════════ HERO ════════ */}
            <section className="hp-hero">
                {/* background decoration */}
                <div className="hp-hero__orb hp-hero__orb--a" aria-hidden />
                <div className="hp-hero__orb hp-hero__orb--b" aria-hidden />
                <div className="hp-hero__orb hp-hero__orb--c" aria-hidden />

                <div className="hp-hero__inner">
                    {/* ─── LEFT ─── */}
                    <div className="hp-hero__left">
                        <div className="hp-hero__eyebrow">
                            <span className="hp-hero__live-dot" aria-hidden />
                            <Sparkles size={12} strokeWidth={2.5} />
                            <span>Developer Knowledge Platform · 2026</span>
                        </div>

                        <h1 className="hp-hero__h1">
                            Learn complex tech,{' '}
                            <span className="hp-hero__gradient">simply explained.</span>
                        </h1>

                        <p className="hp-hero__lead">
                            Curated modules covering JavaScript, React, AWS, Python, AI and System
                            Design — with real-world patterns and deep documentation.
                        </p>

                        <div className="hp-hero__actions">
                            <Link to="/topics" className="hp-btn-primary">
                                Browse All Topics <ArrowRight size={16} strokeWidth={2.5} />
                            </Link>
                            <Link to="/blog" className="hp-btn-ghost">Read the Blog</Link>
                        </div>

                        {/* inline stats bar */}
                        <div className="hp-hero__stats">
                            {[
                                { val: categories.length, label: 'Modules' },
                                { val: `${totalTopics}+`, label: 'Topics' },
                                { val: '2026', label: 'Updated' },
                                { val: 'Free', label: 'Always' },
                            ].map(({ val, label }, i, arr) => (
                                <div key={label} className="hp-hero__stat-item">
                                    <span className="hp-hero__stat-val">{val}</span>
                                    <span className="hp-hero__stat-lbl">{label}</span>
                                    {i < arr.length - 1 && <span className="hp-hero__stat-sep" aria-hidden />}
                                </div>
                            ))}
                        </div>

                        <div className="hp-hero__socials">
                            {[
                                { href: 'https://github.com', label: 'GitHub', icon: <Github size={16} /> },
                                { href: 'https://linkedin.com', label: 'LinkedIn', icon: <Linkedin size={16} /> },
                                { href: 'https://twitter.com', label: 'Twitter', icon: <Twitter size={16} /> },
                                { href: 'mailto:contact@example.com', label: 'Email', icon: <Mail size={16} /> },
                            ].map(({ href, label, icon }) => (
                                <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer" className="hp-hero__social-btn" aria-label={label}>
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ─── RIGHT: profile card ─── */}
                    <div className="hp-hero__right">
                        <div className="hp-profile-card">
                            <div className="hp-profile-card__top-bar" />
                            <div className="hp-profile-card__avatar-wrap">
                                <img src="/lijo-john.png" alt="Lijo John" className="hp-profile-card__avatar" />
                                <span className="hp-profile-card__online" />
                            </div>
                            <span className="hp-profile-card__built-by">Built by</span>
                            <strong className="hp-profile-card__name">Lijo John</strong>
                            <span className="hp-profile-card__role">Software Engineer · 6 Yrs</span>
                            <div className="hp-profile-card__tags">
                                {['React', 'Node.js', 'AWS', 'Python'].map(t => (
                                    <span key={t} className="hp-profile-card__tag">{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* floating chips */}
                        <div className="hp-chip hp-chip--star">
                            <Star size={12} fill="currentColor" /> 4.9 quality rating
                        </div>
                        <div className="hp-chip hp-chip--trend">
                            <TrendingUp size={12} /> Always updated
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════ CATEGORIES ════════ */}
            <section className="hp-cats">
                <div className="hp-cats__header">
                    <div className="hp-eyebrow">
                        <BookOpen size={13} />
                        <span>Knowledge Modules</span>
                    </div>
                    <h2 className="hp-section-h2">Pick your path</h2>
                    <p className="hp-section-lead">
                        Structured learning modules across every major technology stack.
                    </p>
                </div>

                <div className="hp-cats__grid">
                    {categories.map((cat, i) => (
                        <div
                            key={cat.id}
                            className={`hp-cat-card${i === 0 ? ' hp-cat-card--wide' : ''}`}
                            style={{ '--clr': cat.color }}
                        >
                            <div className="hp-cat-card__glow" aria-hidden />
                            <div className="hp-cat-card__stripe" aria-hidden />

                            <div className="hp-cat-card__head">
                                <div className="hp-cat-card__icon">{cat.icon}</div>
                                <div>
                                    <div className="hp-cat-card__name">{cat.name}</div>
                                    <div className="hp-cat-card__count">
                                        {cat.topics.length} {cat.topics.length === 1 ? 'topic' : 'topics'}
                                    </div>
                                </div>
                            </div>

                            <p className="hp-cat-card__desc">{cat.description}</p>

                            <div className="hp-cat-card__topics">
                                {cat.topics.slice(0, 3).map(t => (
                                    <Link key={t.id} to={`/learn/${t.id}`} className="hp-cat-card__topic">
                                        <span className="hp-cat-card__topic-dot" aria-hidden />
                                        <span>{t.title}</span>
                                        <ArrowRight size={11} className="hp-cat-card__topic-arrow" />
                                    </Link>
                                ))}
                            </div>

                            <Link to={`/category/${cat.id}`} className="hp-cat-card__cta">
                                View Module <ArrowRight size={13} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════ FEATURES ════════ */}
            <section className="hp-feats">
                <div className="hp-feats__inner">
                    {/* left prose */}
                    <div className="hp-feats__prose">
                        <div className="hp-eyebrow">
                            <Zap size={13} />
                            <span>Why Tech Notes?</span>
                        </div>
                        <h2 className="hp-section-h2 hp-feats__h2">
                            Built for developers<br />who value clarity.
                        </h2>
                        <p className="hp-section-lead" style={{ maxWidth: 360 }}>
                            Every module is written from a practitioner's perspective.
                            Real-world context, not just theory.
                        </p>
                        <Link to="/topics" className="hp-feats__link">
                            Explore all modules <ArrowRight size={15} />
                        </Link>
                    </div>

                    {/* right cards */}
                    <div className="hp-feats__cards">
                        {[
                            {
                                num: '01', color: 'blue',
                                icon: <Code2 size={18} />,
                                title: 'Deep Documentation',
                                desc: 'Meticulously researched and continuously updated for current standards.'
                            },
                            {
                                num: '02', color: 'violet',
                                icon: <Users size={18} />,
                                title: 'Contextual Learning',
                                desc: 'Concepts explained through real-world patterns and industry feedback.'
                            },
                            {
                                num: '03', color: 'green',
                                icon: <Zap size={18} />,
                                title: 'Fast & Efficient',
                                desc: 'Structured learning paths designed to maximize retention and speed.'
                            },
                        ].map(f => (
                            <div key={f.num} className="hp-feat-card">
                                <span className="hp-feat-card__num">{f.num}</span>
                                <div className={`hp-feat-card__icon hp-feat-card__icon--${f.color}`}>{f.icon}</div>
                                <div>
                                    <h3 className="hp-feat-card__title">{f.title}</h3>
                                    <p className="hp-feat-card__desc">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════ BOTTOM CTA ════════ */}
            <section className="hp-cta">
                <div className="hp-cta__card">
                    <div className="hp-cta__glow" aria-hidden />
                    <Sparkles size={30} className="hp-cta__spark" />
                    <h2 className="hp-cta__h2">Ready to dive in?</h2>
                    <p className="hp-cta__lead">
                        Start exploring the full catalog of modules and build your skills systematically.
                    </p>
                    <div className="hp-cta__actions">
                        <Link to="/topics" className="hp-btn-primary">
                            Browse Modules <ArrowRight size={16} />
                        </Link>
                        <Link to="/about" className="hp-btn-ghost">Meet the author</Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
