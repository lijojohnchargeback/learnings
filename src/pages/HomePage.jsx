import { Link } from 'react-router-dom';
import { categories, getCategoryHref } from '../data/categories';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
    const totalTopics = categories.reduce((acc, cat) => acc + cat.topics.length, 0);

    return (
        <div className="hp">
            {/* ════════ HERO — brand + one idea + full-bleed photo ════════ */}
            <section className="hp-hero">
                <div className="hp-hero__copy">
                    <p className="hp-hero__brand">Tech Notes</p>
                    <h1 className="hp-hero__title">
                        Notes that make<br />complex tech clear.
                    </h1>
                    <p className="hp-hero__lead">
                        Practitioner modules on JavaScript, React, AWS, Python, AI, and system design —
                        written to stick.
                    </p>
                    <div className="hp-hero__actions">
                        <Link to="/topics" className="hp-btn hp-btn--solid">
                            Browse modules
                            <ArrowRight size={16} strokeWidth={2.25} />
                        </Link>
                        <Link to="/about" className="hp-btn hp-btn--line">
                            Meet Lijo
                        </Link>
                    </div>
                </div>

                <div className="hp-hero__visual">
                    <img
                        src="/lijo-john.png"
                        alt="Lijo John, software engineer"
                        className="hp-hero__photo"
                    />
                </div>
            </section>

            {/* ════════ INDEX STRIP ════════ */}
            <section className="hp-index" aria-label="Catalog size">
                <div className="hp-index__inner">
                    <span className="hp-index__item">
                        <strong>{categories.length}</strong> modules
                    </span>
                    <span className="hp-index__rule" aria-hidden />
                    <span className="hp-index__item">
                        <strong>{totalTopics}+</strong> topics
                    </span>
                    <span className="hp-index__rule" aria-hidden />
                    <span className="hp-index__item">Updated for <strong>2026</strong></span>
                    <span className="hp-index__rule" aria-hidden />
                    <span className="hp-index__item">Always <strong>free</strong></span>
                </div>
            </section>

            {/* ════════ MODULE DIRECTORY ════════ */}
            <section className="hp-mods">
                <header className="hp-mods__header">
                    <h2 className="hp-mods__h2">Module directory</h2>
                    <p className="hp-mods__lead">
                        Pick a stack and open the notes. Each module links straight into the docs.
                    </p>
                </header>

                <ul className="hp-mods__list">
                    {categories.map((cat, i) => (
                        <li key={cat.id} className="hp-mod" style={{ '--clr': cat.color }}>
                            <Link to={getCategoryHref(cat)} className="hp-mod__link">
                                <span className="hp-mod__num">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="hp-mod__icon" aria-hidden>{cat.icon}</span>
                                <span className="hp-mod__body">
                                    <span className="hp-mod__name">{cat.name}</span>
                                    <span className="hp-mod__desc">{cat.description}</span>
                                </span>
                                <span className="hp-mod__meta">
                                    {cat.topics.length} {cat.topics.length === 1 ? 'topic' : 'topics'}
                                </span>
                                <ArrowUpRight size={18} className="hp-mod__arrow" strokeWidth={2} />
                            </Link>
                            <div className="hp-mod__topics">
                                {cat.topics.slice(0, 4).map((t) => (
                                    <Link key={t.id} to={`/learn/${t.id}`} className="hp-mod__topic">
                                        {t.title}
                                    </Link>
                                ))}
                                {cat.topics.length > 4 && (
                                    <Link to={getCategoryHref(cat)} className="hp-mod__topic hp-mod__topic--more">
                                        +{cat.topics.length - 4} more
                                    </Link>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ════════ WHY ════════ */}
            <section className="hp-why">
                <div className="hp-why__inner">
                    <h2 className="hp-why__h2">Built for clarity, not noise.</h2>
                    <div className="hp-why__grid">
                        <article className="hp-why__col">
                            <h3 className="hp-why__title">Deep docs</h3>
                            <p className="hp-why__text">
                                Researched notes kept current with how these tools are actually used in production.
                            </p>
                        </article>
                        <article className="hp-why__col">
                            <h3 className="hp-why__title">Real context</h3>
                            <p className="hp-why__text">
                                Concepts framed through patterns you will meet on the job — not textbook abstractions alone.
                            </p>
                        </article>
                        <article className="hp-why__col">
                            <h3 className="hp-why__title">Fast paths</h3>
                            <p className="hp-why__text">
                                Structured modules so you can skim, dive, or revisit without fighting the page.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ════════ CTA ════════ */}
            <section className="hp-cta">
                <div className="hp-cta__inner">
                    <h2 className="hp-cta__h2">Start with a module.</h2>
                    <p className="hp-cta__lead">
                        Open the full directory and build from whatever stack you need next.
                    </p>
                    <Link to="/topics" className="hp-btn hp-btn--solid">
                        Browse all topics
                        <ArrowRight size={16} strokeWidth={2.25} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
