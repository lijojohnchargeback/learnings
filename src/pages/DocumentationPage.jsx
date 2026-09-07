import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTopicById } from '../data/categories';
import { ChevronRight, List, ArrowLeft, X } from 'lucide-react';
import './DocumentationPage.css';

const splitSectionTitle = (title = '') => {
    const trimmed = title.trim();
    const [maybeIcon, ...rest] = trimmed.split(/\s+/);
    if (rest.length && /\p{Extended_Pictographic}/u.test(maybeIcon)) {
        return { icon: maybeIcon, label: rest.join(' ') };
    }
    return { icon: null, label: trimmed };
};

function DocumentationPage() {
    const { topicId } = useParams();
    const navigate = useNavigate();
    const [htmlContent, setHtmlContent] = useState('');
    const [pageSections, setPageSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSection, setActiveSection] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const topic = React.useMemo(() => getTopicById(topicId), [topicId]);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!topic) {
            setError('Topic not found');
            setLoading(false);
            return;
        }

        const loadHtmlFile = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/html/${topic.file}`);

                if (!response.ok) {
                    throw new Error('Failed to load documentation');
                }

                const rawHtml = await response.text();

                // Parse HTML to extract pieces
                const parser = new DOMParser();
                const doc = parser.parseFromString(rawHtml, 'text/html');

                // 1. Extract sidebar links for navigation
                const sections = [];
                const sidebarSections = doc.querySelectorAll('.sidebar-section');

                if (sidebarSections.length > 0) {
                    sidebarSections.forEach(section => {
                        const title = section.querySelector('.sidebar-section-title')?.textContent || 'General';
                        const links = Array.from(section.querySelectorAll('.sidebar-link')).map(link => ({
                            text: link.textContent,
                            href: link.getAttribute('href')
                        }));
                        sections.push({ title, links });
                    });
                } else {
                    const h2s = doc.querySelectorAll('h2');
                    if (h2s.length > 0) {
                        const links = Array.from(h2s).map(h2 => {
                            const id = h2.getAttribute('id') || h2.textContent.toLowerCase().replace(/\s+/g, '-');
                            if (!h2.getAttribute('id')) h2.setAttribute('id', id);
                            return {
                                text: h2.textContent,
                                href: `#${id}`
                            };
                        });
                        sections.push({ title: 'On this page', links });
                    }
                }
                setPageSections(sections);

                // 2. Clean content: remove sidebar, header, scripts from the body
                const container = doc.querySelector('.container') || doc.body;

                const toRemove = [
                    '.sidebar',
                    'header',
                    '.mobile-toggle',
                    'script',
                    '.back-button'
                ];
                toRemove.forEach(selector => {
                    container.querySelectorAll(selector).forEach(el => el.remove());
                });

                setHtmlContent(container.innerHTML);
                setError(null);
            } catch (err) {
                console.error('Error loading HTML:', err);
                setError('Failed to load documentation. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        loadHtmlFile();
    }, [topicId, topic]);

    useEffect(() => {
        // Handle inner scroll highlighting
        const handleScroll = () => {
            if (!contentRef.current) return;
            const sections = contentRef.current.querySelectorAll('section[id], h2[id]');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current || sections[0]?.getAttribute('id') || '');
        };

        // Add copy buttons to code blocks
        if (htmlContent && contentRef.current) {
            const blocks = contentRef.current.querySelectorAll('.code-block');
            blocks.forEach(block => {
                if (block.querySelector('.copy-btn')) return;

                const btn = document.createElement('button');
                btn.className = 'copy-btn';
                btn.innerHTML = 'Copy Content';
                btn.onclick = (e) => {
                    e.stopPropagation();
                    const text = block.innerText.replace('Copy Content', '').trim();
                    navigator.clipboard.writeText(text);
                    btn.innerHTML = '✅ Copied!';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.innerHTML = 'Copy Content';
                        btn.classList.remove('copied');
                    }, 2000);
                };
                block.appendChild(btn);
            });
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [htmlContent]);

    useEffect(() => {
        setSidebarOpen(false);
        setActiveSection('');
    }, [topicId]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.startsWith('#') ? href.slice(1) : href;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 140,
                behavior: 'smooth'
            });
            setActiveSection(targetId);
            setSidebarOpen(false);
        }
    };

    if (loading) {
        return (
            <div className="documentation-page loading">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading Documentation...</p>
                </div>
            </div>
        );
    }

    if (error || !topic) {
        return (
            <div className="documentation-page error">
                <div className="error-container">
                    <h2>⚠️ Documentation Not Found</h2>
                    <p>{error || 'The requested documentation could not be loaded.'}</p>
                    <button onClick={() => navigate('/topics')} className="back-button">
                        <ArrowLeft size={18} /> Back to Topics
                    </button>
                </div>
            </div>
        );
    }

    const isAwsTopic = topic.categoryId === 'aws';
    const isDockerTopic = topicId === 'docker';
    const isNodejsTopic = topicId === 'nodejs-documentation';
    const isSystemDesignTopic = topicId === 'system-design';
    const isLlmTopic = topicId === 'large-language-models';
    const isAiFundamentalsTopic = topicId === 'ai-fundamentals';
    const isPaiGenAiTopic = topicId === 'pai-generative-ai';
    const isJsHowItWorksTopic = topicId === 'javascript-how-it-works';
    const isJsExtraTopic = topicId === 'javascript-extra';
    const isSocketIoTopic = topicId === 'socket-io';
    const isMessageQueueTopic = topicId === 'message-queue';
    const docThemeClass = isAwsTopic ? ' doc-aws' : isDockerTopic ? ' doc-docker' : isNodejsTopic ? ' doc-nodejs' : isSystemDesignTopic ? ' doc-system-design' : isLlmTopic ? ' doc-llm' : isPaiGenAiTopic ? ' doc-pai-genai' : isSocketIoTopic ? ' doc-socketio' : isMessageQueueTopic ? ' doc-message-queue' : '';
    const isAwsComputeTopic = topicId === 'aws-compute';
    const hasHeroCover = topicId === 'aws-overview' || isAwsComputeTopic || isNodejsTopic || isSystemDesignTopic || isLlmTopic || isPaiGenAiTopic || isJsHowItWorksTopic || isJsExtraTopic || isSocketIoTopic || isMessageQueueTopic;

    const sectionCount = pageSections.reduce((sum, section) => sum + section.links.length, 0);

    return (
        <div className={`documentation-page${docThemeClass}`}>
            {sidebarOpen && (
                <button
                    type="button"
                    className="doc-sidebar-backdrop"
                    aria-label="Close contents"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <button
                type="button"
                className="doc-sidebar-toggle"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open contents"
            >
                <List size={18} />
                <span>Contents</span>
            </button>

            <aside className={`doc-sidebar ${sidebarOpen ? 'is-open' : ''}`}>
                <div className="doc-sidebar-header">
                    <button onClick={() => navigate(-1)} className="back-btn" title="Go Back">
                        <ArrowLeft size={18} />
                    </button>
                    <div className="doc-sidebar-title">
                        <span className="doc-sidebar-kicker">{topic.category}</span>
                        <span className="doc-sidebar-heading">Contents</span>
                    </div>
                    <button
                        type="button"
                        className="doc-sidebar-close"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close contents"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="doc-sidebar-nav">
                    <div
                        className="doc-topic-card"
                        style={{ '--doc-topic-color': topic.categoryColor }}
                    >
                        <span className="doc-topic-icon" aria-hidden="true">{topic.categoryIcon}</span>
                        <div className="doc-topic-copy">
                            <span className="doc-topic-name">{topic.title}</span>
                            <span className="doc-topic-hint">
                                {sectionCount} {sectionCount === 1 ? 'section' : 'sections'}
                            </span>
                        </div>
                    </div>

                    {pageSections.map((section, idx) => {
                        const { icon, label } = splitSectionTitle(section.title);
                        return (
                            <div key={idx} className="nav-section">
                                <h4 className="nav-section-title">
                                    {icon && <span className="nav-section-icon">{icon}</span>}
                                    <span>{label}</span>
                                </h4>
                                <div className="nav-links">
                                    {section.links.map((link, lIdx) => {
                                        const sectionId = link.href.replace('#', '');
                                        return (
                                            <a
                                                key={lIdx}
                                                href={link.href}
                                                onClick={(e) => scrollToSection(e, link.href)}
                                                className={`nav-link-item ${activeSection === sectionId ? 'active' : ''}`}
                                            >
                                                <span className="nav-link-index">
                                                    {String(lIdx + 1).padStart(2, '0')}
                                                </span>
                                                <span className="nav-link-text">{link.text}</span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </aside>

            <main className="doc-main">
                <div className="doc-content-wrapper">
                    <div className="doc-header-glass">
                        {topicId === 'aws-overview' && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/aws/aws-architecture-overview.png"
                                    alt="How a request travels on AWS: users through Route 53, CloudFront, and a load balancer to compute, then S3, RDS, and DynamoDB"
                                />
                            </div>
                        )}
                        {isAwsComputeTopic && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/aws/aws-compute.jpg"
                                    alt="Processor on a circuit board representing AWS compute hardware"
                                />
                            </div>
                        )}
                        {isNodejsTopic && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/nodejs/nodejs-hero.png"
                                    alt="Node.js runtime connecting servers, APIs, databases, and packages"
                                />
                            </div>
                        )}
                        {isSystemDesignTopic && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/system-design/sd-architecture-overview.png"
                                    alt="System architecture from clients through CDN and load balancer to app servers, cache, database, and queues"
                                />
                            </div>
                        )}
                        {isLlmTopic && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/llm/llm-hero.png"
                                    alt="How a large language model turns a prompt into tokens, runs transformer layers, and predicts the next token"
                                />
                            </div>
                        )}
                        {isPaiGenAiTopic && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/genai/genai-hero.png"
                                    alt="Production LLM pipeline from the user app through a prompt builder and model API to JSON output and token, cost, and latency traces"
                                />
                            </div>
                        )}
                        {isJsHowItWorksTopic && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/javascript/js-runtime-architecture.png"
                                    alt="JavaScript runtime: engine with call stack and heap, Web APIs, queues, and the event loop"
                                />
                            </div>
                        )}
                        {isJsExtraTopic && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/javascript/js-extra-hero.png"
                                    alt="JavaScript extra concepts around a page: debounce, events, DOM, CORS, modules, workers, and storage"
                                />
                            </div>
                        )}
                        {isMessageQueueTopic && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/message-queue/mq-hero.png"
                                    alt="Three messaging models: a work queue, pub/sub fan-out, and a Kafka-style event stream"
                                />
                            </div>
                        )}
                        {isSocketIoTopic && (
                            <div className="doc-hero-cover">
                                <img
                                    src="/images/socket-io/socketio-hero.png"
                                    alt="Socket.IO connecting browsers to a Node.js server over a bidirectional WebSocket, with the event loop below"
                                />
                            </div>
                        )}
                        <div className={hasHeroCover ? 'doc-header-copy' : undefined}>
                            <div className="doc-breadcrumb">
                                <span onClick={() => navigate('/')}>Dashboard</span>
                                <ChevronRight size={14} />
                                <span onClick={() => navigate(`/category/${topic.categoryId}`)}>{topic.category}</span>
                                <ChevronRight size={14} />
                                <span className="current">{topic.title}</span>
                            </div>
                            <h1 className="doc-title-large">{topic.title}</h1>
                            {topicId === 'aws-overview' && (
                                <p className="doc-header-lead">
                                    Amazon Web Services is a toolkit of on-demand building blocks, not one product.
                                    Follow a request from DNS to data, then go deeper on regions and AZs, IAM,
                                    compute, storage, databases, VPCs, and serverless — with diagrams that name
                                    every hop and the trade-offs that show up in production.
                                </p>
                            )}
                            {isAwsComputeTopic && (
                                <p className="doc-header-lead">
                                    From EC2 virtual machines to Lambda functions: how AWS runs your code, who patches
                                    the OS, and how to choose among ECS, EKS, Fargate, Batch, and Beanstalk — with
                                    architecture diagrams, pricing levers, and production checklists.
                                </p>
                            )}
                            {isNodejsTopic && (
                                <p className="doc-header-lead">
                                    The JavaScript runtime for servers, CLIs, and APIs — updated for Node.js 24 LTS
                                    and Node.js 26. Architecture, the event loop, ESM, native TypeScript, fetch,
                                    SQLite, permissions, streams, and production patterns with diagrams.
                                </p>
                            )}
                            {isSystemDesignTopic && (
                                <p className="doc-header-lead">
                                    Architecture for systems that stay fast, available, and affordable under real load.
                                    Performance, scaling, reliability, CAP, APIs, and a URL-shortener case study —
                                    with diagrams you can reuse in interviews and production design.
                                </p>
                            )}
                            {isLlmTopic && (
                                <p className="doc-header-lead">
                                    Next-token prediction at scale: transformers, tokens, context windows, embeddings,
                                    RAG, agents, and MCP — with diagrams and a 2026 snapshot of models, APIs, and
                                    the failure modes that show up in production.
                                </p>
                            )}
                            {isAiFundamentalsTopic && (
                                <p className="doc-header-lead">
                                    A practical map of AI: machine learning, neural nets, transformers, LLMs, RAG,
                                    and agents — with diagrams, corrected history, and the advanced ideas you need
                                    after the basics.
                                </p>
                            )}
                            {isPaiGenAiTopic && (
                                <p className="doc-header-lead">
                                    Productize next-token prediction: tokens, context budgets, versioned prompts,
                                    structured output, vendor wrappers, and inference knobs — with diagrams that
                                    name every stage, including the existing LLM loop and context-window budget.
                                </p>
                            )}
                            {isJsHowItWorksTopic && (
                                <p className="doc-header-lead">
                                    What happens after you hit run: the JS engine, heap vs stack, execution contexts,
                                    <code>this</code>, the event loop, microtasks vs macrotasks, scope, closures,
                                    and garbage collection — with diagrams for every stage.
                                </p>
                            )}
                            {isJsExtraTopic && (
                                <p className="doc-header-lead">
                                    The practical extras between syntax and a shipped app: debounce and throttle,
                                    event flow and delegation, the DOM, CORS, modules, storage, service workers,
                                    web workers, copies, and XSS — with illustrations and detailed walkthroughs.
                                </p>
                            )}
                            {isMessageQueueTopic && (
                                <p className="doc-header-lead">
                                    SQS, Kafka, and RabbitMQ are not the same kind of “message queue.” Work queues,
                                    pub/sub, and event logs — compared for Node.js backends, with diagrams for
                                    fan-out, visibility timeout, consumer groups, and dead-letter queues.
                                </p>
                            )}
                            {isSocketIoTopic && (
                                <p className="doc-header-lead">
                                    Bidirectional, low-latency events on top of WebSocket (with HTTP long-polling
                                    fallback). How Socket.IO sits above the Node.js event loop, why a socket is not
                                    a thread, and how rooms, namespaces, and Redis adapters scale real-time apps.
                                </p>
                            )}
                            <div className="doc-meta">
                                <span className="doc-badge" style={{
                                    background: `linear-gradient(135deg, ${topic.categoryColor} 0%, #000 150%)`,
                                    border: `1px solid ${topic.categoryColor}44`
                                }}>
                                    {topic.categoryIcon} {topic.category} Specialist
                                </span>
                                <span className="doc-read-time">
                                    {topicId === 'aws-overview' ? '45 min read' : isAwsComputeTopic ? '30 min read' : topicId === 'docker' ? '40 min read' : topicId === 'backend-system' ? '25 min read' : isNodejsTopic ? '40 min read' : isSystemDesignTopic ? '35 min read' : isLlmTopic || isAiFundamentalsTopic || isPaiGenAiTopic || isJsHowItWorksTopic || isJsExtraTopic || isSocketIoTopic || isMessageQueueTopic ? '40 min read' : '12 min read'}
                                </span>
                                <span className="doc-read-time">
                                    {topicId === 'aws-overview' ? 'Visual Deep Dive' : isAwsComputeTopic || topicId === 'docker' || isMessageQueueTopic ? 'Illustrated Guide' : topicId === 'backend-system' || isNodejsTopic || isSystemDesignTopic || isLlmTopic || isAiFundamentalsTopic || isPaiGenAiTopic || isJsHowItWorksTopic || isJsExtraTopic || isSocketIoTopic ? 'Illustrated Guide' : 'Advanced Level'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={contentRef}
                        className="doc-content-body"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />

                    <footer className="doc-footer">
                        <div className="doc-footer-content">
                            <p>© 2025 Learning Platform. All rights reserved.</p>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-top">
                                Back to Top
                            </button>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default DocumentationPage;
