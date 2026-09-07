import { useParams, Link } from 'react-router-dom';
import { getCategoryById } from '../data/categories';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './CategoryPage.css';

export default function CategoryPage() {
    const { categoryId } = useParams();
    const category = getCategoryById(categoryId);

    if (!category) {
        return (
            <div className="category-page">
                <div className="error-container">
                    <h1>Category Not Found</h1>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="category-page">
            <header className="category-header-minimal" style={{ '--accent': category.color }}>
                <div className="category-header-content">
                    <Link to="/topics" className="minimal-back-link">
                        <ArrowLeft size={16} />
                        <span>Directory</span>
                    </Link>
                    <div className="category-badge-icon">{category.icon}</div>
                    <h1 className="category-title">{category.name}</h1>
                    <p className="category-summary">{category.description}</p>
                </div>
            </header>

            <main className="category-content-container">
                <div className="topics-directory-grid">
                    {category.topics.map((topic) => (
                        <Link
                            key={topic.id}
                            to={`/learn/${topic.id}`}
                            className="topic-tile-elegant"
                            style={{ '--accent': category.color }}
                        >
                            <div className="topic-tile-header">
                                <span className="topic-tile-name">{topic.title}</span>
                                <ArrowUpRight className="tile-arrow-icon" size={16} />
                            </div>
                            <div className="topic-tile-accent-line"></div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
