// Comprehensive topics data structure mapping all HTML documentation files
export const allTopicsData = {
    frontend: {
        id: 'frontend',
        name: 'Frontend Development',
        description: 'HTML, CSS, React and UI development fundamentals',
        color: '#6366f1',
        icon: 'Layout',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        topics: [
            {
                id: 'html-guide',
                name: 'HTML',
                description: 'Complete HTML documentation covering all elements and concepts',
                difficulty: 'beginner',
                htmlFile: '/html/html/html-guide.html',
                icon: '📄',
                tags: ['markup', 'web', 'structure'],
                estimatedTime: '8 hours'
            },
            {
                id: 'css-guide',
                name: 'CSS',
                description: 'Comprehensive CSS guide for styling and layouts',
                difficulty: 'beginner',
                htmlFile: '/html/CSS/css-guide.html',
                icon: '🎨',
                tags: ['styling', 'design', 'layout'],
                estimatedTime: '10 hours'
            },
            {
                id: 'react-guide',
                name: 'React',
                description: 'Modern React development fundamentals',
                difficulty: 'intermediate',
                htmlFile: '/html/React/react-guide.html',
                icon: '⚛️',
                tags: ['framework', 'components', 'ui'],
                estimatedTime: '12 hours'
            }
        ]
    },
    stateManagement: {
        id: 'state-management',
        name: 'UI State Management',
        description: 'Context API, Redux, Redux Saga, and Redux Toolkit for predictable UI state',
        color: '#764abc',
        icon: 'Layers',
        gradient: 'linear-gradient(135deg, #764abc 0%, #a78bfa 100%)',
        topics: [
            {
                id: 'state-management-overview',
                name: 'State Management Overview',
                description: 'How UI state works and when to choose Context, Redux, Saga, or Toolkit',
                difficulty: 'beginner',
                htmlFile: '/html/State Management/state-management-overview.html',
                icon: '🗺️',
                tags: ['state', 'overview', 'architecture'],
                estimatedTime: '4 hours'
            },
            {
                id: 'context-api',
                name: 'Context API',
                description: 'Built-in React state sharing with Context, Provider, and useContext',
                difficulty: 'beginner',
                htmlFile: '/html/State Management/context-api.html',
                icon: '🔗',
                tags: ['react', 'context', 'hooks'],
                estimatedTime: '5 hours'
            },
            {
                id: 'redux',
                name: 'Redux',
                description: 'Predictable global state with store, actions, reducers, and middleware',
                difficulty: 'intermediate',
                htmlFile: '/html/State Management/redux.html',
                icon: '🟣',
                tags: ['redux', 'store', 'reducers'],
                estimatedTime: '8 hours'
            },
            {
                id: 'redux-saga',
                name: 'Redux Saga',
                description: 'Generator-based side effects for async flows, cancellation, and orchestration',
                difficulty: 'advanced',
                htmlFile: '/html/State Management/redux-saga.html',
                icon: '🧵',
                tags: ['redux', 'saga', 'async', 'side-effects'],
                estimatedTime: '7 hours'
            },
            {
                id: 'redux-toolkit',
                name: 'Redux Toolkit',
                description: 'Official Redux batteries: slices, thunks, Immer, and RTK Query',
                difficulty: 'intermediate',
                htmlFile: '/html/State Management/redux-toolkit.html',
                icon: '🧰',
                tags: ['redux', 'toolkit', 'rtk', 'rtk-query'],
                estimatedTime: '8 hours'
            }
        ]
    },
    javascript: {
        id: 'javascript',
        name: 'JavaScript',
        description: 'Complete JavaScript ecosystem from basics to advanced',
        color: '#f59e0b',
        icon: 'Code2',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        topics: [
            {
                id: 'javascript-basics',
                name: 'JavaScript Basics',
                description: 'Core JavaScript fundamentals and syntax',
                difficulty: 'beginner',
                htmlFile: '/html/Javascript/javascript-basics.html',
                icon: '📚',
                tags: ['fundamentals', 'syntax', 'basics'],
                estimatedTime: '6 hours'
            },
            {
                id: 'javascript-objects',
                name: 'JavaScript Objects',
                description: 'Objects, classes, prototypes, cloning, Map, Proxy, and OOP patterns',
                difficulty: 'intermediate',
                htmlFile: '/html/Javascript/javascript-objects.html',
                icon: '🎯',
                tags: ['objects', 'oop', 'prototypes', 'classes', 'map'],
                estimatedTime: '8 hours'
            },
            {
                id: 'javascript-arrays',
                name: 'JavaScript Arrays',
                description: 'Array methods, manipulation, and iteration',
                difficulty: 'intermediate',
                htmlFile: '/html/Javascript/javascript-arrays.html',
                icon: '📊',
                tags: ['arrays', 'methods', 'iteration'],
                estimatedTime: '4 hours'
            },
            {
                id: 'javascript-functions',
                name: 'JavaScript Functions',
                description: 'Functions, closures, and functional programming',
                difficulty: 'intermediate',
                htmlFile: '/html/Javascript/javascript-functions.html',
                icon: '⚡',
                tags: ['functions', 'closures', 'scope'],
                estimatedTime: '5 hours'
            },
            {
                id: 'javascript-strings',
                name: 'JavaScript Strings',
                description: 'String manipulation and methods',
                difficulty: 'beginner',
                htmlFile: '/html/Javascript/javascript-strings.html',
                icon: '📝',
                tags: ['strings', 'text', 'manipulation'],
                estimatedTime: '3 hours'
            },
            {
                id: 'javascript-es6',
                name: 'JavaScript ES6+',
                description: 'Modern JavaScript features and syntax',
                difficulty: 'intermediate',
                htmlFile: '/html/Javascript/javascript-es6.html',
                icon: '🚀',
                tags: ['es6', 'modern', 'features'],
                estimatedTime: '6 hours'
            },
            {
                id: 'javascript-how-it-works',
                name: 'How JavaScript Works',
                description: 'Engine, heap, call stack, event loop, and internals',
                difficulty: 'advanced',
                htmlFile: '/html/Javascript/javascript-how-it-works.html',
                icon: '🔧',
                tags: ['internals', 'event-loop', 'advanced'],
                estimatedTime: '8 hours'
            },
            {
                id: 'javascript-extra',
                name: 'JavaScript Extra Topics',
                description: 'Events, DOM, CORS, modules, workers, storage, and real-world patterns — illustrated',
                difficulty: 'intermediate',
                htmlFile: '/html/Javascript/javascript-extra.html',
                icon: '💡',
                tags: ['patterns', 'events', 'dom', 'performance', 'extras'],
                estimatedTime: '8 hours'
            },
            {
                id: 'javascript-data-structures',
                name: 'JavaScript Data Structures',
                description: 'Data structures implementation in JavaScript',
                difficulty: 'advanced',
                htmlFile: '/html/Javascript/javascript-data-structures.html',
                icon: '🏗️',
                tags: ['data-structures', 'algorithms', 'advanced'],
                estimatedTime: '8 hours'
            },
            {
                id: 'javascript-methods',
                name: 'JavaScript Methods',
                description: 'Comprehensive guide to built-in methods',
                difficulty: 'intermediate',
                htmlFile: '/html/Javascript/javascript-methods.html',
                icon: '🛠️',
                tags: ['methods', 'built-in', 'reference'],
                estimatedTime: '5 hours'
            },
            {
                id: 'javascript-tools',
                name: 'JavaScript Tools',
                description: 'Development tools and ecosystem',
                difficulty: 'intermediate',
                htmlFile: '/html/Javascript/javascript-tools.html',
                icon: '🧰',
                tags: ['tools', 'ecosystem', 'development'],
                estimatedTime: '4 hours'
            }
        ]
    },
    python: {
        id: 'python',
        name: 'Python',
        description: 'Python from basics to web frameworks, APIs, databases, and testing',
        color: '#3776ab',
        icon: 'Code2',
        gradient: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)',
        topics: [
            {
                id: 'python-basics',
                name: 'Python Basics',
                description: 'Python fundamentals — syntax, variables, control flow, and strings',
                difficulty: 'beginner',
                htmlFile: '/html/Python/python-basics.html',
                icon: '🐍',
                tags: ['python', 'basics', 'fundamentals'],
                estimatedTime: '6 hours'
            },
            {
                id: 'python-data-structures',
                name: 'Python Data Structures',
                description: 'Lists, tuples, sets, dictionaries, and collections module',
                difficulty: 'beginner',
                htmlFile: '/html/Python/python-data-structures.html',
                icon: '📊',
                tags: ['python', 'data-structures', 'collections'],
                estimatedTime: '4 hours'
            },
            {
                id: 'python-functions-modules',
                name: 'Python Functions & Modules',
                description: 'Functions, decorators, modules, packages, and error handling',
                difficulty: 'beginner',
                htmlFile: '/html/Python/python-functions-modules.html',
                icon: '⚡',
                tags: ['python', 'functions', 'modules', 'decorators'],
                estimatedTime: '5 hours'
            },
            {
                id: 'python-oop',
                name: 'Python OOP',
                description: 'Classes, inheritance, encapsulation, dataclasses, and magic methods',
                difficulty: 'intermediate',
                htmlFile: '/html/Python/python-oop.html',
                icon: '🏗️',
                tags: ['python', 'oop', 'classes', 'inheritance'],
                estimatedTime: '6 hours'
            },
            {
                id: 'python-web-frameworks',
                name: 'Python Web Frameworks',
                description: 'Flask, FastAPI, and Django for backend web development',
                difficulty: 'intermediate',
                htmlFile: '/html/Python/python-web-frameworks.html',
                icon: '🌐',
                tags: ['python', 'flask', 'fastapi', 'django', 'web'],
                estimatedTime: '8 hours'
            },
            {
                id: 'python-async',
                name: 'Python Async',
                description: 'asyncio, async/await, and building high-performance async services',
                difficulty: 'intermediate',
                htmlFile: '/html/Python/python-async.html',
                icon: '⚡',
                tags: ['python', 'async', 'asyncio', 'concurrency'],
                estimatedTime: '5 hours'
            },
            {
                id: 'python-apis',
                name: 'Python REST APIs',
                description: 'Building REST APIs — HTTP methods, auth, middleware, and best practices',
                difficulty: 'intermediate',
                htmlFile: '/html/Python/python-apis.html',
                icon: '🔌',
                tags: ['python', 'rest', 'api', 'fastapi', 'http'],
                estimatedTime: '6 hours'
            },
            {
                id: 'python-databases',
                name: 'Python Databases',
                description: 'PostgreSQL, MongoDB, SQLAlchemy, and database patterns',
                difficulty: 'intermediate',
                htmlFile: '/html/Python/python-databases.html',
                icon: '🗄️',
                tags: ['python', 'database', 'sqlalchemy', 'postgresql', 'mongodb'],
                estimatedTime: '7 hours'
            },
            {
                id: 'python-environment',
                name: 'Python Environment & Tooling',
                description: 'pip, venv, Poetry, project structure, Docker, and deployment',
                difficulty: 'beginner',
                htmlFile: '/html/Python/python-environment.html',
                icon: '🛠️',
                tags: ['python', 'pip', 'venv', 'docker', 'tooling'],
                estimatedTime: '4 hours'
            },
            {
                id: 'python-testing',
                name: 'Python Testing',
                description: 'pytest, fixtures, mocking, and testing REST APIs',
                difficulty: 'intermediate',
                htmlFile: '/html/Python/python-testing.html',
                icon: '🧪',
                tags: ['python', 'testing', 'pytest', 'tdd'],
                estimatedTime: '5 hours'
            }
        ]
    },
    backend: {
        id: 'backend',
        name: 'Backend & Server',
        description: 'Server-side development with Node.js',
        color: '#10b981',
        icon: 'Server',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        topics: [
            {
                id: 'nodejs-documentation',
                name: 'Node.js',
                description: 'Node.js 24/26 guide: architecture, ESM, TypeScript, fetch, SQLite, and production patterns',
                difficulty: 'intermediate',
                htmlFile: '/html/Nodejs/nodejs-documentation.html',
                icon: '🟢',
                tags: ['nodejs', 'backend', 'server', 'typescript', 'esm'],
                estimatedTime: '12 hours'
            }
        ]
    },
    databases: {
        id: 'databases',
        name: 'Databases',
        description: 'Database design, queries, and management',
        color: '#ec4899',
        icon: 'Database',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        topics: [
            {
                id: 'mongodb',
                name: 'MongoDB',
                description: 'NoSQL database with MongoDB',
                difficulty: 'intermediate',
                htmlFile: '/html/Database/mongodb.html',
                icon: '🍃',
                tags: ['nosql', 'database', 'mongodb'],
                estimatedTime: '8 hours'
            },
            {
                id: 'mysql',
                name: 'MySQL',
                description: 'Relational database with MySQL',
                difficulty: 'intermediate',
                htmlFile: '/html/Database/mysql.html',
                icon: '🐬',
                tags: ['sql', 'database', 'relational'],
                estimatedTime: '9 hours'
            }
        ]
    },
    csSystemDesign: {
        id: 'cs-system-design',
        name: 'Computer Science & System Design',
        description: 'Core CS fundamentals, concurrency, backend architecture, and scalable system design',
        color: '#7c3aed',
        icon: 'GraduationCap',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        topics: [
            {
                id: 'computer-science-master',
                name: 'Computer Fundamentals',
                description: 'Hardware, OS, memory, networking, and core CS concepts',
                difficulty: 'intermediate',
                htmlFile: '/html/Computer Science/computer-science-master.html',
                icon: '🖥️',
                tags: ['cs', 'fundamentals', 'hardware', 'theory'],
                estimatedTime: '12 hours'
            },
            {
                id: 'concurrency-parallelism',
                name: 'Concurrency & Parallelism',
                description: 'Software vs hardware: processes, threads, the OS scheduler, Node async, workers, and PM2',
                difficulty: 'intermediate',
                htmlFile: '/html/Computer Science/concurrency-parallelism.html',
                icon: '🔀',
                tags: ['concurrency', 'async', 'threads', 'processes', 'parallelism', 'event-loop', 'workers', 'pm2'],
                estimatedTime: '8 hours'
            },
            {
                id: 'backend-system',
                name: 'Backend Systems',
                description: 'HTTP, REST APIs, auth, caching, middleware, and backend architecture',
                difficulty: 'intermediate',
                htmlFile: '/html/Backend/backend-system.html',
                icon: '⚙️',
                tags: ['backend', 'http', 'rest', 'api', 'architecture'],
                estimatedTime: '15 hours'
            },
            {
                id: 'system-design',
                name: 'System Design',
                description: 'Scalable architecture, caching, CAP, reliability, and interview case studies',
                difficulty: 'advanced',
                htmlFile: '/html/System Design/system-design.html',
                icon: '🏛️',
                tags: ['architecture', 'scalability', 'design', 'distributed'],
                estimatedTime: '18 hours'
            }
        ]
    },
    cloud: {
        id: 'cloud',
        name: 'Cloud & DevOps',
        description: 'Cloud platforms, deployment, and infrastructure',
        color: '#8b5cf6',
        icon: 'Cloud',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        topics: [
            {
                id: 'aws-overview',
                name: 'AWS Overview',
                description: 'Introduction to Amazon Web Services',
                difficulty: 'beginner',
                htmlFile: '/html/AWS/aws-overview.html',
                icon: '☁️',
                tags: ['aws', 'cloud', 'overview'],
                estimatedTime: '4 hours'
            },
            {
                id: 'aws-compute',
                name: 'AWS Compute',
                description: 'EC2, Lambda, and compute services',
                difficulty: 'intermediate',
                htmlFile: '/html/AWS/aws-compute.html',
                icon: '💻',
                tags: ['aws', 'ec2', 'lambda'],
                estimatedTime: '6 hours'
            },
            {
                id: 'aws-storage',
                name: 'AWS Storage',
                description: 'S3, EBS, and storage solutions',
                difficulty: 'intermediate',
                htmlFile: '/html/AWS/aws-storage.html',
                icon: '💾',
                tags: ['aws', 's3', 'storage'],
                estimatedTime: '5 hours'
            },
            {
                id: 'aws-networking',
                name: 'AWS Networking',
                description: 'VPC, Route53, and networking services',
                difficulty: 'advanced',
                htmlFile: '/html/AWS/aws-networking.html',
                icon: '🌐',
                tags: ['aws', 'vpc', 'networking'],
                estimatedTime: '7 hours'
            },
            {
                id: 'aws-security',
                name: 'AWS Security',
                description: 'IAM, security groups, and best practices',
                difficulty: 'advanced',
                htmlFile: '/html/AWS/aws-security.html',
                icon: '🔒',
                tags: ['aws', 'security', 'iam'],
                estimatedTime: '6 hours'
            }
        ]
    },
    tools: {
        id: 'tools',
        name: 'Tools & Advanced Topics',
        description: 'Development tools, AI, and advanced topics',
        color: '#06b6d4',
        icon: 'Wrench',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        topics: [
            {
                id: 'message-queue',
                name: 'Message Queue',
                description: 'Queues, pub/sub, and event streams: SQS, Kafka, RabbitMQ, Pub/Sub, and more',
                difficulty: 'intermediate',
                htmlFile: '/html/Message Queue/message-queue.html',
                icon: '📬',
                tags: ['messaging', 'sqs', 'kafka', 'rabbitmq', 'pubsub'],
                estimatedTime: '8 hours'
            },
            {
                id: 'postman',
                name: 'Postman',
                description: 'API testing and development with Postman',
                difficulty: 'beginner',
                htmlFile: '/html/Postman/postman.html',
                icon: '📮',
                tags: ['api', 'testing', 'tools'],
                estimatedTime: '3 hours'
            },
            {
                id: 'linux',
                name: 'Linux',
                description: 'Linux fundamentals, architecture, commands, and remote access',
                difficulty: 'beginner',
                htmlFile: '/html/Linux/linux.html',
                icon: '🐧',
                tags: ['linux', 'cli', 'devops', 'ssh'],
                estimatedTime: '8 hours'
            },
            {
                id: 'docker',
                name: 'Docker',
                description: 'Containerization with Docker',
                difficulty: 'intermediate',
                htmlFile: '/html/Docker/docker.html',
                icon: '🐳',
                tags: ['docker', 'containers', 'devops'],
                estimatedTime: '8 hours'
            },
            {
                id: 'socket-io',
                name: 'Socket.IO',
                description: 'Real-time bidirectional events, rooms, namespaces, and Node.js internals',
                difficulty: 'intermediate',
                htmlFile: '/html/Socket.IO/socket-io.html',
                icon: '🔌',
                tags: ['socket.io', 'websocket', 'realtime', 'nodejs'],
                estimatedTime: '6 hours'
            },
            {
                id: 'ai-fundamentals',
                name: 'Artificial Intelligence',
                description: 'AI vs ML vs DL, neural nets, transformers, LLMs, RAG, agents, and responsible AI',
                difficulty: 'intermediate',
                htmlFile: '/html/AI/ai-fundamentals.html',
                icon: '🤖',
                tags: ['ai', 'machine-learning', 'transformers', 'rag', 'agents'],
                estimatedTime: '14 hours'
            },
            {
                id: 'large-language-models',
                name: 'Large Language Models',
                description: 'Transformers, tokens, RAG, agents, and production LLM patterns',
                difficulty: 'advanced',
                htmlFile: '/html/AI/large-language-models.html',
                icon: '🧠',
                tags: ['llm', 'ai', 'nlp'],
                estimatedTime: '10 hours'
            }
        ]
    }
};

// Helper functions
export const getAllCategories = () => {
    return Object.values(allTopicsData);
};

export const getCategoryById = (categoryId) => {
    return allTopicsData[categoryId];
};

export const getTopicById = (topicId) => {
    for (const category of Object.values(allTopicsData)) {
        const topic = category.topics.find(t => t.id === topicId);
        if (topic) {
            return { ...topic, category: category.name, categoryId: category.id };
        }
    }
    return null;
};

export const getTopicsByCategory = (categoryId) => {
    const category = allTopicsData[categoryId];
    return category ? category.topics : [];
};

export const searchTopics = (query) => {
    const results = [];
    const lowerQuery = query.toLowerCase();

    for (const category of Object.values(allTopicsData)) {
        for (const topic of category.topics) {
            if (
                topic.name.toLowerCase().includes(lowerQuery) ||
                topic.description.toLowerCase().includes(lowerQuery) ||
                topic.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
            ) {
                results.push({
                    ...topic,
                    category: category.name,
                    categoryId: category.id
                });
            }
        }
    }

    return results;
};

export const getTopicsByDifficulty = (difficulty) => {
    const results = [];

    for (const category of Object.values(allTopicsData)) {
        for (const topic of category.topics) {
            if (topic.difficulty === difficulty) {
                results.push({
                    ...topic,
                    category: category.name,
                    categoryId: category.id
                });
            }
        }
    }

    return results;
};

export const getStats = () => {
    let totalTopics = 0;
    let totalTime = 0;
    const difficultyCount = { beginner: 0, intermediate: 0, advanced: 0 };

    for (const category of Object.values(allTopicsData)) {
        totalTopics += category.topics.length;

        for (const topic of category.topics) {
            difficultyCount[topic.difficulty]++;
            // Extract hours from estimatedTime string
            const hours = parseInt(topic.estimatedTime);
            if (!isNaN(hours)) {
                totalTime += hours;
            }
        }
    }

    return {
        totalCategories: Object.keys(allTopicsData).length,
        totalTopics,
        totalTime: `${totalTime} hours`,
        difficultyCount
    };
};

export const getDifficultyColor = (difficulty) => {
    const colors = {
        beginner: '#10b981',
        intermediate: '#f59e0b',
        advanced: '#ef4444'
    };
    return colors[difficulty] || '#6b7280';
};

export const getDifficultyBadge = (difficulty) => {
    const badges = {
        beginner: { label: 'Beginner', color: '#10b981', icon: '🌱' },
        intermediate: { label: 'Intermediate', color: '#f59e0b', icon: '🔥' },
        advanced: { label: 'Advanced', color: '#ef4444', icon: '🚀' }
    };
    return badges[difficulty] || badges.beginner;
};
