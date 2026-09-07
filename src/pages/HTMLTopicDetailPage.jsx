import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Code2, Link as LinkIcon, Play, ArrowLeft, Lightbulb, CheckCircle, RotateCcw, Copy, Check } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import { getHTMLTopicDetails } from '../data/htmlTopicsDetailed';
import './HTMLTopicDetailPage.css';

const HTMLTopicDetailPage = () => {
    const { topicId } = useParams();
    const [activeTab, setActiveTab] = useState('explanation');
    const [playgroundCode, setPlaygroundCode] = useState('');
    const [previewCode, setPreviewCode] = useState('');
    const [copied, setCopied] = useState(false);
    const topic = getHTMLTopicDetails(topicId);

    useEffect(() => {
        if (topic?.playground?.defaultCode) {
            setPlaygroundCode(topic.playground.defaultCode);
            setPreviewCode(topic.playground.defaultCode);
        }
    }, [topic]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [topicId, activeTab]);

    const runCode = () => {
        setPreviewCode(playgroundCode);
    };

    const resetCode = () => {
        if (topic?.playground?.defaultCode) {
            setPlaygroundCode(topic.playground.defaultCode);
            setPreviewCode(topic.playground.defaultCode);
        }
    };

    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(playgroundCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    if (!topic) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Topic not found</h2>
                <Link to="/topic/html" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Back to HTML Topics
                </Link>
            </div>
        );
    }

    const tabs = [
        { id: 'explanation', label: 'Explanation', icon: BookOpen },
        { id: 'samples', label: 'Code Samples', icon: Code2 },
        { id: 'related', label: 'Related Topics', icon: LinkIcon },
        { id: 'playground', label: 'Playground', icon: Play }
    ];

    return (
        <div className="html-topic-detail-page">
            {/* Breadcrumb */}
            <div className="container">
                <nav className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">Home</Link>
                    <ChevronRight size={16} />
                    <Link to="/topic/html" className="breadcrumb-link">HTML Topics</Link>
                    <ChevronRight size={16} />
                    <span className="breadcrumb-current">{topic.name}</span>
                </nav>
            </div>

            {/* Header */}
            <div className="container">
                <div className="topic-detail-header">
                    <Link to="/topic/html" className="back-link">
                        <ArrowLeft size={20} />
                        Back to Topics
                    </Link>
                    <div className="topic-header-content">
                        <span className={`difficulty-badge difficulty-${topic.difficulty}`}>
                            {topic.difficulty}
                        </span>
                        <h1 className="topic-detail-title">{topic.name}</h1>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="topic-tabs-container">
                <div className="container">
                    <div className="topic-tabs">
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <Icon size={20} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'playground' ? (
                // Playground tab - full width
                <div className="tab-content playground-content full-width">
                    <div className="playground-container">
                        <div className="playground-header">
                            <div className="playground-title-section">
                                <h2 className="content-title">
                                    <Play size={24} />
                                    Interactive Playground
                                </h2>
                                <p className="playground-instructions">
                                    {topic.playground.instructions}
                                </p>
                            </div>
                            <div className="playground-controls">
                                <button
                                    className="control-btn run-btn"
                                    onClick={runCode}
                                    title="Run Code (Ctrl+Enter)"
                                >
                                    <Play size={18} />
                                    <span>Run Code</span>
                                </button>
                                <button
                                    className="control-btn reset-btn"
                                    onClick={resetCode}
                                    title="Reset to Default"
                                >
                                    <RotateCcw size={18} />
                                    <span>Reset</span>
                                </button>
                                <button
                                    className="control-btn copy-btn"
                                    onClick={copyCode}
                                    title="Copy Code"
                                >
                                    {copied ? <Check size={18} /> : <Copy size={18} />}
                                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                                </button>
                            </div>
                        </div>
                        <div className="playground-workspace">
                            <div className="playground-editor-section">
                                <div className="editor-header">
                                    <div className="header-left">
                                        <Code2 size={18} />
                                        <span>HTML Editor</span>
                                    </div>
                                    <div className="editor-stats">
                                        <span className="stat-item">
                                            {playgroundCode.split('\n').length} lines
                                        </span>
                                        <span className="stat-item">
                                            {playgroundCode.length} chars
                                        </span>
                                    </div>
                                </div>
                                <textarea
                                    className="playground-textarea"
                                    value={playgroundCode}
                                    onChange={(e) => setPlaygroundCode(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.ctrlKey && e.key === 'Enter') {
                                            e.preventDefault();
                                            runCode();
                                        }
                                    }}
                                    placeholder="Write your HTML code here..."
                                    spellCheck="false"
                                />
                            </div>
                            <div className="playground-preview-section">
                                <div className="editor-header">
                                    <div className="header-left">
                                        <Play size={18} />
                                        <span>Live Preview</span>
                                    </div>
                                    <div className="preview-badge">
                                        <span className="status-dot"></span>
                                        Ready
                                    </div>
                                </div>
                                <iframe
                                    className="playground-preview-frame"
                                    srcDoc={previewCode}
                                    title="Live Preview"
                                    sandbox="allow-scripts"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // Other tabs - contained width
                <div className="container">
                    <div className="tab-content-container">
                        {/* Explanation Tab */}
                        {activeTab === 'explanation' && (
                            <div className="tab-content explanation-content">
                                <div className="content-card">
                                    <h2 className="content-title">
                                        <BookOpen size={24} />
                                        {topic.explanation.title}
                                    </h2>
                                    <div className="explanation-text">
                                        {topic.explanation.content.split('\n\n').map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>

                                    {/* Key Points */}
                                    {topic.explanation.keyPoints && (
                                        <div className="key-points-section">
                                            <h3 className="section-subtitle">
                                                <Lightbulb size={20} />
                                                Key Points
                                            </h3>
                                            <ul className="key-points-list">
                                                {topic.explanation.keyPoints.map((point, index) => (
                                                    <li key={index}>
                                                        <CheckCircle size={16} />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Additional Info (versions, elements, linkTypes, bestPractices, etc.) */}
                                    {topic.explanation.versions && (
                                        <div className="info-section">
                                            <h3 className="section-subtitle">HTML Versions</h3>
                                            <div className="info-grid">
                                                {Object.entries(topic.explanation.versions).map(([version, description]) => (
                                                    <div key={version} className="info-item">
                                                        <strong>{version}:</strong> {description}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {topic.explanation.elements && (
                                        <div className="info-section">
                                            <h3 className="section-subtitle">Essential Elements</h3>
                                            <div className="info-grid">
                                                {Object.entries(topic.explanation.elements).map(([element, description]) => (
                                                    <div key={element} className="info-item">
                                                        <code className="inline-code">{element}</code>
                                                        <span>{description}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {topic.explanation.linkTypes && (
                                        <div className="info-section">
                                            <h3 className="section-subtitle">Link Types</h3>
                                            <div className="info-grid">
                                                {Object.entries(topic.explanation.linkTypes).map(([type, example]) => (
                                                    <div key={type} className="info-item">
                                                        <strong>{type}:</strong>
                                                        <code className="inline-code">{example}</code>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {topic.explanation.bestPractices && (
                                        <div className="info-section best-practices">
                                            <h3 className="section-subtitle">
                                                <CheckCircle size={20} />
                                                Best Practices
                                            </h3>
                                            <ul className="best-practices-list">
                                                {topic.explanation.bestPractices.map((practice, index) => (
                                                    <li key={index}>{practice}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Samples Tab */}
                        {activeTab === 'samples' && (
                            <div className="tab-content samples-content">
                                <div className="content-card">
                                    <h2 className="content-title">
                                        <Code2 size={24} />
                                        Code Samples
                                    </h2>
                                    <div className="samples-grid">
                                        {topic.samples.map((sample, index) => (
                                            <div key={index} className="sample-card">
                                                <h3 className="sample-title">{sample.title}</h3>
                                                <p className="sample-description">{sample.description}</p>
                                                <CodeBlock
                                                    code={sample.code}
                                                    language={sample.language}
                                                />
                                                <button
                                                    className="try-in-playground-btn"
                                                    onClick={() => {
                                                        setPlaygroundCode(sample.code);
                                                        setActiveTab('playground');
                                                    }}
                                                >
                                                    <Play size={16} />
                                                    Try in Playground
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Related Topics Tab */}
                        {activeTab === 'related' && (
                            <div className="tab-content related-content">
                                <div className="content-card">
                                    <h2 className="content-title">
                                        <LinkIcon size={24} />
                                        Related Topics
                                    </h2>
                                    <p className="related-intro">
                                        Explore these related topics to deepen your understanding:
                                    </p>
                                    <div className="related-topics-grid">
                                        {topic.relatedTopics.map((relatedTopic, index) => (
                                            <Link
                                                key={index}
                                                to={`/html-topic/${relatedTopic.id}`}
                                                className="related-topic-card"
                                            >
                                                <BookOpen size={20} />
                                                <div className="related-topic-info">
                                                    <h3>{relatedTopic.name}</h3>
                                                    <span className="learn-more">
                                                        Learn more
                                                        <ChevronRight size={16} />
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HTMLTopicDetailPage;
