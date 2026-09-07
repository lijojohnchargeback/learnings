import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();
    const IconComponent = Icons[category.icon] || Icons.Folder;

    return (
        <div
            className="category-card"
            onClick={() => navigate(`/category/${category.id}`)}
            style={{ '--category-color': category.color }}
        >
            <div className="category-icon" style={{ backgroundColor: `${category.color}15` }}>
                <IconComponent size={32} style={{ color: category.color }} />
            </div>

            <div className="category-content">
                <h3 className="category-title">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-meta">
                    <span className="topic-count">{category.topics.length} {category.topics.length === 1 ? 'topic' : 'topics'}</span>
                </div>
            </div>

            <div className="category-arrow">
                <Icons.ArrowRight size={20} />
            </div>
        </div>
    );
};

export default CategoryCard;
