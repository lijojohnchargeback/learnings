import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogById } from '../data/blogs';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';
import './BlogPostPage.css';

export default function BlogPostPage() {
    const { blogId } = useParams();
    const post = getBlogById(blogId);

    if (!post) {
        return (
            <div className="blog-post-page">
                <div className="container">
                    <h1>Post Not Found</h1>
                    <Link to="/blog">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="blog-post-page">
            <header className="post-header-visual">
                <img src={post.image} alt={post.title} className="post-header-bg" />
                <div className="post-header-overlay"></div>

                <div className="post-header-container">
                    <Link to="/blog" className="post-back-btn">
                        <ArrowLeft size={16} />
                        <span>Back to Feed</span>
                    </Link>

                    <div className="post-category-badges">
                        {post.tags.map(tag => (
                            <span key={tag} className="post-tag-badge">{tag}</span>
                        ))}
                    </div>

                    <h1 className="post-main-title">{post.title}</h1>

                    <div className="post-author-meta">
                        <div className="author-info">
                            <div className="author-img">{post.author.charAt(0)}</div>
                            <div className="author-details">
                                <span className="author-name">{post.author}</span>
                                <span className="post-status">Software Architect</span>
                            </div>
                        </div>
                        <div className="post-stats">
                            <span className="stat-item"><Calendar size={14} />{post.date}</span>
                            <span className="stat-item"><Clock size={14} />{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="post-content-container">
                <div className="post-sidebar-actions">
                    <button className="side-action-btn"><Share2 size={20} /></button>
                    <button className="side-action-btn"><Bookmark size={20} /></button>
                </div>

                <div className="post-body-wrapper">
                    <div
                        className="post-rich-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <footer className="post-footer-minimal">
                        <div className="post-tags-list">
                            {post.tags.map(tag => (
                                <span key={tag} className="footer-tag">#{tag}</span>
                            ))}
                        </div>
                    </footer>
                </div>
            </main>
        </article>
    );
}
