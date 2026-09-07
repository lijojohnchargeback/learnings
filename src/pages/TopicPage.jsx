import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTopicById } from '../data/categories';
import './TopicPage.css';

export default function TopicPage() {
    const { topicId } = useParams();
    const [htmlContent, setHtmlContent] = useState('');
    const [loading, setLoading] = useState(true);
    const topic = getTopicById(topicId);

    useEffect(() => {
        if (topic) {
            // Load the HTML file content
            fetch(`/html/${topic.file}`)
                .then(response => response.text())
                .then(html => {
                    setHtmlContent(html);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error loading HTML:', error);
                    setLoading(false);
                });
        }
    }, [topic]);

    useEffect(() => {
        // Execute scripts after HTML is loaded
        if (htmlContent && !loading) {
            const scripts = document.querySelectorAll('.topic-content-frame script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                script.parentNode.replaceChild(newScript, script);
            });
        }
    }, [htmlContent, loading]);

    if (!topic) {
        return (
            <div className="topic-page">
                <div className="error-container">
                    <h1>Topic Not Found</h1>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="topic-page">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading documentation...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="topic-page">
            <div className="topic-header" style={{ '--category-color': topic.categoryColor }}>
                <div className="topic-header-content">
                    <Link to={`/category/${topic.categoryId}`} className="back-link">
                        <span>←</span> Back to {topic.category}
                    </Link>
                    <div className="topic-badge">
                        <span className="topic-category-icon">{topic.categoryIcon}</span>
                        <span>{topic.category}</span>
                    </div>
                    <h1 className="topic-title-main">{topic.title}</h1>
                </div>
            </div>

            <div
                className="topic-content-frame"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </div>
    );
}
