import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import './TopicCard.css';

const TopicCard = ({ topic }) => {
    const navigate = useNavigate();

    const getDifficultyColor = (difficulty) => {
        switch (difficulty?.toLowerCase()) {
            case 'beginner':
                return 'var(--success)';
            case 'intermediate':
                return 'var(--warning)';
            case 'advanced':
                return 'var(--error)';
            default:
                return 'var(--text-tertiary)';
        }
    };

    return (
        <div className="topic-card" onClick={() => navigate(`/topic/${topic.id}`)}>
            <div className="topic-header">
                <BookOpen size={24} className="topic-icon" />
                <span
                    className="difficulty-badge"
                    style={{ backgroundColor: `${getDifficultyColor(topic.difficulty)}20`, color: getDifficultyColor(topic.difficulty) }}
                >
                    {topic.difficulty || 'Beginner'}
                </span>
            </div>

            <h3 className="topic-title">{topic.title}</h3>
            <p className="topic-description">{topic.description}</p>

            <div className="topic-tags">
                {topic.tags?.slice(0, 3).map((tag, index) => (
                    <span key={index} className="topic-tag">{tag}</span>
                ))}
            </div>

            <div className="topic-footer">
                <span className="read-more">
                    Read More <ArrowRight size={16} />
                </span>
            </div>
        </div>
    );
};

export default TopicCard;
