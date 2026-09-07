import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { Search, ArrowLeft, ArrowUpRight, Sparkles, Folder } from 'lucide-react';
import { useState } from 'react';
import './AllTopicsPage.css';

export default function AllTopicsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCategories = categories.map(category => ({
        ...category,
        topics: category.topics.filter(topic =>
            topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.topics.length > 0);

    return (
        <div className="all-topics-page">
            <header className="topics-header-premium">
                <div className="header-glow"></div>
                <div className="topics-header-content">
                    <Link to="/" className="directory-back-link">
                        <ArrowLeft size={14} />
                        <span>Return to Platform</span>
                    </Link>
                    <div className="directory-badge">
                        <Sparkles size={14} className="sparkle-icon" />
                        <span>Curated Knowledge Base</span>
                    </div>
                    <h1 className="directory-title">Resource Directory</h1>
                    <p className="directory-subtitle">
                        A structured map of technical modules, documentation, and architectural deep-dives.
                    </p>

                    <div className="directory-search-hub">
                        <Search className="search-icon-glass" size={20} />
                        <input
                            type="text"
                            placeholder="Search among all modules..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="directory-search-input"
                        />
                        {searchQuery && (
                            <div className="search-results-pill">
                                {filteredCategories.reduce((acc, cat) => acc + cat.topics.length, 0)} results found
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="directory-grid-container">
                <div className="knowledge-shelves">
                    {filteredCategories.map((category) => (
                        <section key={category.id} className="shelf-card">
                            <div className="shelf-header">
                                <div className="shelf-icon-wrapper" style={{ '--color': category.color }}>
                                    {category.icon}
                                </div>
                                <div className="shelf-meta">
                                    <h2 className="shelf-title">{category.name}</h2>
                                    <span className="shelf-count">{category.topics.length} {category.topics.length === 1 ? 'Module' : 'Modules'}</span>
                                </div>
                            </div>

                            <div className="shelf-items">
                                {category.topics.map(topic => (
                                    <Link
                                        key={topic.id}
                                        to={`/learn/${topic.id}`}
                                        className="shelf-item-link"
                                        style={{ '--accent': category.color }}
                                    >
                                        <div className="item-dot"></div>
                                        <span className="item-name">{topic.title}</span>
                                        <ArrowUpRight className="item-arrow" size={12} />
                                    </Link>
                                ))}
                            </div>

                            <div className="shelf-footer">
                                <Link to={`/category/${category.id}`} className="view-full-shelf">
                                    <span>Browse Category</span>
                                    <div className="link-underline"></div>
                                </Link>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}
