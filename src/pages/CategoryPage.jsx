import { useParams, Link, Navigate } from 'react-router-dom';
import { categories, getCategoryById } from '../data/categories';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import './CategoryPage.css';

export default function CategoryPage() {
    const { categoryId } = useParams();
    const category = getCategoryById(categoryId);

    if (!category) {
        return (
            <div className="cp">
                <div className="cp-empty">
                    <h1 className="cp-empty__title">Category not found</h1>
                    <p className="cp-empty__lead">That module isn’t in the directory.</p>
                    <Link to="/topics" className="cp-btn">Back to directory</Link>
                </div>
            </div>
        );
    }

    if (category.topics.length === 1) {
        return <Navigate to={`/learn/${category.topics[0].id}`} replace />;
    }

    const index = categories.findIndex((c) => c.id === category.id);
    const prev = index > 0 ? categories[index - 1] : null;
    const next = index < categories.length - 1 ? categories[index + 1] : null;
    const topicCount = category.topics.length;

    return (
        <div className="cp" style={{ '--cat': category.color }}>
            <header className="cp-hero">
                <div className="cp-hero__inner">
                    <Link to="/topics" className="cp-back">
                        <ArrowLeft size={15} strokeWidth={2.25} />
                        Directory
                    </Link>

                    <div className="cp-hero__mark" aria-hidden>
                        <span className="cp-hero__icon">{category.icon}</span>
                    </div>

                    <p className="cp-hero__kicker">Module {String(index + 1).padStart(2, '0')}</p>
                    <h1 className="cp-hero__title">{category.name}</h1>
                    <p className="cp-hero__lead">{category.description}</p>

                    <div className="cp-hero__meta">
                        <span>
                            <strong>{topicCount}</strong>{' '}
                            {topicCount === 1 ? 'topic' : 'topics'}
                        </span>
                        <span className="cp-hero__dot" aria-hidden />
                        <span>Open any note below</span>
                    </div>
                </div>
            </header>

            <section className="cp-topics" aria-label={`${category.name} topics`}>
                <div className="cp-topics__inner">
                    <div className="cp-topics__head">
                        <h2 className="cp-topics__h2">Topics in this module</h2>
                        <p className="cp-topics__hint">
                            {topicCount} notes · start anywhere
                        </p>
                    </div>

                    <ol className="cp-list">
                        {category.topics.map((topic, i) => (
                            <li key={topic.id} className="cp-item">
                                <Link to={`/learn/${topic.id}`} className="cp-item__link">
                                    <span className="cp-item__num">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="cp-item__title">{topic.title}</span>
                                    <span className="cp-item__cta">
                                        Open
                                        <ArrowUpRight size={16} strokeWidth={2.25} />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <nav className="cp-adjacent" aria-label="Other modules">
                <div className="cp-adjacent__inner">
                    {prev ? (
                        <Link to={`/category/${prev.id}`} className="cp-adj cp-adj--prev">
                            <span className="cp-adj__label">Previous</span>
                            <span className="cp-adj__name">
                                <span aria-hidden>{prev.icon}</span> {prev.name}
                            </span>
                        </Link>
                    ) : (
                        <span className="cp-adj cp-adj--empty" />
                    )}

                    {next ? (
                        <Link to={`/category/${next.id}`} className="cp-adj cp-adj--next">
                            <span className="cp-adj__label">Next</span>
                            <span className="cp-adj__name">
                                {next.name} <span aria-hidden>{next.icon}</span>
                                <ArrowRight size={16} strokeWidth={2.25} />
                            </span>
                        </Link>
                    ) : (
                        <span className="cp-adj cp-adj--empty" />
                    )}
                </div>
            </nav>
        </div>
    );
}
