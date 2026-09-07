import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { Calendar, User, Clock, ArrowRight, Sparkles } from 'lucide-react';
import './BlogPage.css';

export default function BlogPage() {
    return (
        <div className="blog-page">
            <header className="blog-header-premium">
                <div className="header-grid-pattern"></div>
                <div className="blog-header-content">
                    <div className="blog-badge">
                        <Sparkles size={14} />
                        <span>Insights & Perspectives</span>
                    </div>
                    <h1 className="blog-title">The Engineering Log</h1>
                    <p className="blog-subtitle">
                        Thoughts on software architecture, design patterns, and the future of web development.
                    </p>
                </div>
            </header>

            <main className="blog-container">
                <div className="blog-grid">
                    {blogs.map((post) => (
                        <article key={post.id} className="blog-card">
                            <Link to={`/blog/${post.id}`} className="blog-card-image-link">
                                <div className="blog-card-image-wrapper">
                                    <img src={post.image} alt={post.title} className="blog-card-image" />
                                    <div className="blog-card-tags">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="blog-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>

                            <div className="blog-card-content">
                                <div className="blog-card-meta">
                                    <span className="blog-meta-item">
                                        <Calendar size={14} />
                                        {post.date}
                                    </span>
                                    <span className="blog-meta-item">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>

                                <Link to={`/blog/${post.id}`} className="blog-card-title-link">
                                    <h2 className="blog-card-title">{post.title}</h2>
                                </Link>

                                <p className="blog-card-excerpt">{post.excerpt}</p>

                                <div className="blog-card-footer">
                                    <div className="blog-author">
                                        <div className="author-avatar">{post.author.charAt(0)}</div>
                                        <span className="author-name">{post.author}</span>
                                    </div>
                                    <Link to={`/blog/${post.id}`} className="read-more-btn">
                                        <span>Read Post</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
