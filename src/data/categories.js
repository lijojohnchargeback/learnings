export const categories = [
    // SE path: 1. Start
    {
        id: 'software-engineering',
        name: 'Software Engineering',
        icon: '🧑‍💻',
        color: '#0f766e',
        description: 'Category introduction: hardware, OS, internet, DSA, frontend, backend, data science, AI, cloud, and how you ship production software',
        topics: [
            { id: 'pai-software-engineering', title: 'Introduction', file: 'Production AI/software-engineering.html' }
        ]
    },
    // SE path: 2. Computer foundations only
    {
        id: 'computer-fundamentals',
        name: 'Computer Fundamentals',
        icon: '💻',
        color: '#2563eb',
        description: 'Hardware, OS, memory, networking, and core computer science basics',
        topics: [
            { id: 'computer-science-master', title: 'Computer Fundamentals', file: 'Computer Science/computer-science-master.html' }
        ]
    },
    // SE path: Engineering basics — DSA
    {
        id: 'dsa',
        name: 'DSA',
        icon: '📐',
        color: '#0891b2',
        description: 'Data structures, algorithms, Big-O, searching, sorting, and common problem patterns',
        topics: [
            { id: 'dsa-fundamentals', title: 'Data Structures & Algorithms', file: 'DSA/dsa-fundamentals.html' }
        ]
    },
    // SE path: Problem solving practice — Python + JavaScript
    {
        id: 'problem-solving',
        name: 'Problem Solving',
        icon: '🧩',
        color: '#0d9488',
        description: '105 coding problems for daily practice (beginner → advanced) — every solution in Python and JavaScript',
        topics: [
            { id: 'ps-beginner', title: 'Beginner (40)', file: 'Problem Solving/ps-beginner.html' },
            { id: 'ps-medium', title: 'Medium (35)', file: 'Problem Solving/ps-medium.html' },
            { id: 'ps-advanced', title: 'Advanced (30)', file: 'Problem Solving/ps-advanced.html' }
        ]
    },
    // SE path: Domains — Frontend
    {
        id: 'frontend',
        name: 'Frontend Technology',
        icon: '🖥️',
        color: '#6366f1',
        description: 'HTML, CSS, React and UI development fundamentals',
        topics: [
            { id: 'html-guide', title: 'HTML Guide', file: 'html/html-guide.html' },
            { id: 'css-guide', title: 'CSS Guide', file: 'CSS/css-guide.html' },
            { id: 'react-guide', title: 'React Guide', file: 'React/react-guide.html' }
        ]
    },
    {
        id: 'state-management',
        name: 'UI State Management',
        icon: '🔄',
        color: '#764abc',
        description: 'Context API, Redux, Redux Saga, and Redux Toolkit for predictable UI state',
        topics: [
            { id: 'state-management-overview', title: 'Overview', file: 'State Management/state-management-overview.html' },
            { id: 'context-api', title: 'Context API', file: 'State Management/context-api.html' },
            { id: 'redux', title: 'Redux', file: 'State Management/redux.html' },
            { id: 'redux-saga', title: 'Redux Saga', file: 'State Management/redux-saga.html' },
            { id: 'redux-toolkit', title: 'Redux Toolkit', file: 'State Management/redux-toolkit.html' }
        ]
    },
    // SE path: 4. Languages — Python, JS/TS, Node
    {
        id: 'python',
        name: 'Python',
        icon: '🐍',
        color: '#3776ab',
        description: 'Python from basics to internals, advanced patterns, concurrency, typing, and backends',
        topics: [
            { id: 'python-basics', title: 'Python Basics', file: 'Python/python-basics.html' },
            { id: 'python-data-structures', title: 'Python Data Structures', file: 'Python/python-data-structures.html' },
            { id: 'python-functions-modules', title: 'Python Functions & Modules', file: 'Python/python-functions-modules.html' },
            { id: 'python-oop', title: 'Python OOP', file: 'Python/python-oop.html' },
            { id: 'python-how-it-works', title: 'How Python Works', file: 'Python/python-how-it-works.html' },
            { id: 'python-advanced', title: 'Advanced Python', file: 'Python/python-advanced.html' },
            { id: 'python-typing', title: 'Python Type Hints', file: 'Python/python-typing.html' },
            { id: 'python-web-frameworks', title: 'Python Web Frameworks', file: 'Python/python-web-frameworks.html' },
            { id: 'python-async', title: 'Python Async', file: 'Python/python-async.html' },
            { id: 'python-concurrency', title: 'Python Concurrency', file: 'Python/python-concurrency.html' },
            { id: 'python-apis', title: 'Python REST APIs', file: 'Python/python-apis.html' },
            { id: 'python-databases', title: 'Python Databases', file: 'Python/python-databases.html' },
            { id: 'python-environment', title: 'Python Environment & Tooling', file: 'Python/python-environment.html' },
            { id: 'python-testing', title: 'Python Testing', file: 'Python/python-testing.html' },
            { id: 'python-performance', title: 'Python Performance', file: 'Python/python-performance.html' }
        ]
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        icon: '⚡',
        color: '#f7df1e',
        description: 'Master JavaScript from basics to advanced concepts',
        topics: [
            { id: 'javascript-basics', title: 'JavaScript Basics', file: 'Javascript/javascript-basics.html' },
            { id: 'javascript-objects', title: 'Objects', file: 'Javascript/javascript-objects.html' },
            { id: 'javascript-arrays', title: 'Arrays', file: 'Javascript/javascript-arrays.html' },
            { id: 'javascript-functions', title: 'Functions', file: 'Javascript/javascript-functions.html' },
            { id: 'javascript-strings', title: 'Strings', file: 'Javascript/javascript-strings.html' },
            { id: 'javascript-es6', title: 'ES6 Features', file: 'Javascript/javascript-es6.html' },
            { id: 'javascript-how-it-works', title: 'How It Works', file: 'Javascript/javascript-how-it-works.html' },
            { id: 'javascript-extra', title: 'Extra Concepts', file: 'Javascript/javascript-extra.html' },
            { id: 'javascript-data-structures', title: 'Data Structures', file: 'Javascript/javascript-data-structures.html' },
            { id: 'javascript-methods', title: 'Methods', file: 'Javascript/javascript-methods.html' },
            { id: 'javascript-tools', title: 'Tools', file: 'Javascript/javascript-tools.html' }
        ]
    },
    {
        id: 'backend',
        name: 'Node.js',
        icon: '🟢',
        color: '#10b981',
        description: 'Server-side development with Node.js 24 LTS and Node.js 26',
        topics: [
            { id: 'nodejs-documentation', title: 'Node.js', file: 'Nodejs/nodejs-documentation.html' }
        ]
    },
    // SE path: 5. Application core — Databases
    {
        id: 'database',
        name: 'Databases',
        icon: '🗄️',
        color: '#4db33d',
        description: 'Database management and design',
        topics: [
            { id: 'mongodb', title: 'MongoDB', file: 'Database/mongodb.html' },
            { id: 'mysql', title: 'MySQL', file: 'Database/mysql.html' }
        ]
    },
    // SE path: Domains — Cloud
    {
        id: 'aws',
        name: 'AWS',
        icon: '☁️',
        color: '#ff9900',
        description: 'Amazon Web Services cloud platform',
        topics: [
            { id: 'aws-overview', title: 'AWS Overview', file: 'AWS/aws-overview.html' },
            { id: 'aws-compute', title: 'Compute Services', file: 'AWS/aws-compute.html' },
            { id: 'aws-storage', title: 'Storage Services', file: 'AWS/aws-storage.html' },
            { id: 'aws-networking', title: 'Networking', file: 'AWS/aws-networking.html' },
            { id: 'aws-security', title: 'Security', file: 'AWS/aws-security.html' }
        ]
    },
    {
        id: 'gcp',
        name: 'GCP',
        icon: '☁️',
        color: '#4285f4',
        description: 'Google Cloud Platform — compute, storage, networking, and security',
        topics: [
            { id: 'gcp-overview', title: 'GCP Overview', file: 'GCP/gcp-overview.html' },
            { id: 'gcp-compute', title: 'Compute Services', file: 'GCP/gcp-compute.html' },
            { id: 'gcp-storage', title: 'Storage Services', file: 'GCP/gcp-storage.html' },
            { id: 'gcp-networking', title: 'Networking', file: 'GCP/gcp-networking.html' },
            { id: 'gcp-security', title: 'Security', file: 'GCP/gcp-security.html' }
        ]
    },
    // SE path: Domains — AI & ML, then Production AI path
    {
        id: 'ai-ml',
        name: 'AI & ML',
        icon: '🤖',
        color: '#ff6f00',
        description: 'Artificial intelligence concepts, machine learning, and large language models',
        topics: [
            { id: 'ai-fundamentals', title: 'Artificial Intelligence', file: 'AI/ai-fundamentals.html' },
            { id: 'large-language-models', title: 'Large Language Models', file: 'AI/large-language-models.html' }
        ]
    },
    {
        id: 'ai',
        name: 'Production AI Engineer',
        icon: '🚀',
        color: '#7c3aed',
        description: 'AI Engineer → Production AI Engineer: software, ML, LLMs, RAG, agents, MCP, voice, cloud, LLMOps, and enterprise architecture',
        topics: [
            { id: 'pai-ml-fundamentals', title: 'AI / ML Fundamentals', file: 'Production AI/ml-fundamentals.html' },
            { id: 'pai-deep-learning', title: 'Deep Learning & Transformers', file: 'Production AI/deep-learning.html' },
            { id: 'pai-generative-ai', title: 'Generative AI & LLM Engineering', file: 'Production AI/generative-ai.html' },
            { id: 'pai-rag', title: 'RAG & Knowledge Engineering', file: 'Production AI/rag.html' },
            { id: 'pai-agents', title: 'AI Agents & Multi-Agent Systems', file: 'Production AI/agents.html' },
            { id: 'pai-mcp-automation', title: 'MCP, Tools & AI Automation', file: 'Production AI/mcp-automation.html' },
            { id: 'pai-voice-multimodal', title: 'Voice AI & Multimodal AI', file: 'Production AI/voice-multimodal.html' },
            { id: 'pai-ai-coding', title: 'AI Coding & Application Development', file: 'Production AI/ai-coding.html' },
            { id: 'pai-cloud-ai', title: 'Cloud AI & AI Infrastructure', file: 'Production AI/cloud-ai.html' },
            { id: 'pai-llmops', title: 'Production AI / LLMOps / MLOps', file: 'Production AI/llmops.html' },
            { id: 'pai-enterprise-ai', title: 'Enterprise AI Architecture', file: 'Production AI/enterprise-ai.html' }
        ]
    },
    // SE path: Daily craft + production tooling
    {
        id: 'tools',
        name: 'Tools',
        icon: '🛠️',
        color: '#ff6c37',
        description: 'Development tools and utilities',
        topics: [
            { id: 'linux', title: 'Linux', file: 'Linux/linux.html' },
            { id: 'docker', title: 'Docker', file: 'Docker/docker.html' },
            { id: 'redis', title: 'Redis', file: 'Redis/redis.html' },
            { id: 'message-queue', title: 'Message Queue', file: 'Message Queue/message-queue.html' },
            { id: 'postman', title: 'Postman', file: 'Postman/postman.html' },
            { id: 'socket-io', title: 'Socket.IO', file: 'Socket.IO/socket-io.html' }
        ]
    },
    // Last: CS scale / system design (remaining topics)
    {
        id: 'cs-system-design',
        name: 'Computer Science & System Design',
        icon: '🎓',
        color: '#7c3aed',
        description: 'Concurrency, backend architecture, engineering concepts, and scalable system design',
        topics: [
            { id: 'backend-system', title: 'Backend Systems', file: 'Backend/backend-system.html' },
            { id: 'concurrency-parallelism', title: 'Concurrency & Parallelism', file: 'Computer Science/concurrency-parallelism.html' },
            { id: 'essential-engineering-concepts', title: 'Essential Engineering Concepts', file: 'System Design/essential-engineering-concepts.html' },
            { id: 'system-design', title: 'System Design', file: 'System Design/system-design.html' }
        ]
    }
];

export const getAllTopics = () => {
    return categories.flatMap(category =>
        category.topics.map(topic => ({
            ...topic,
            category: category.name,
            categoryId: category.id,
            categoryIcon: category.icon,
            categoryColor: category.color
        }))
    );
};

export const getCategoryById = (id) => {
    return categories.find(cat => cat.id === id);
};

/** Category page, or the sole topic when a category has only one subtopic. */
export const getCategoryHref = (category) => {
    if (category?.topics?.length === 1) {
        return `/learn/${category.topics[0].id}`;
    }
    return `/category/${category.id}`;
};

export const getTopicById = (topicId) => {
    for (const category of categories) {
        const topic = category.topics.find(t => t.id === topicId);
        if (topic) {
            return {
                ...topic,
                category: category.name,
                categoryId: category.id,
                categoryIcon: category.icon,
                categoryColor: category.color
            };
        }
    }
    return null;
};
