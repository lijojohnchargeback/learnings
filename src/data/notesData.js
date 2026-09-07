// Import all notes files and structure them
// This file parses the notes and creates a structured data format
import { htmlTopicsByLevel } from './htmlTopics';

export const topicsData = {
    'html': {
        id: 'html',
        title: 'HTML - HyperText Markup Language',
        category: 'frontend',
        description: 'Complete HTML guide from basics to advanced: structure, forms, semantic elements, and HTML5 features',
        difficulty: 'All Levels',
        tags: ['HTML', 'Web', 'Markup', 'Frontend', 'HTML5'],
        content: {
            introduction: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. Master HTML from beginner fundamentals to advanced HTML5 features with this comprehensive guide. Click on any topic card below to explore detailed explanations, code samples, and interactive playground!`,
            sections: [
                {
                    title: htmlTopicsByLevel.beginner.title,
                    description: htmlTopicsByLevel.beginner.description,
                    topics: htmlTopicsByLevel.beginner.topics
                },
                {
                    title: htmlTopicsByLevel.medium.title,
                    description: htmlTopicsByLevel.medium.description,
                    topics: htmlTopicsByLevel.medium.topics
                },
                {
                    title: htmlTopicsByLevel.advanced.title,
                    description: htmlTopicsByLevel.advanced.description,
                    topics: htmlTopicsByLevel.advanced.topics
                }
            ],
            codeExamples: [
                {
                    title: 'Complete HTML5 Structure',
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn HTML from basics to advanced">
    <title>HTML Complete Guide</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>Welcome Section</h2>
            <p>This is a <strong>complete</strong> HTML example.</p>
        </section>
        
        <article>
            <h2>Article Title</h2>
            <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
            <p>Article content goes here...</p>
        </article>
        
        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`,
                    language: 'html'
                },
                {
                    title: 'Advanced Form with HTML5 Inputs',
                    code: `<form action="/submit" method="POST">
    <fieldset>
        <legend>Personal Information</legend>
        
        <label for="name">Name: *</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email: *</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}">
        
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob">
        
        <label for="website">Website:</label>
        <input type="url" id="website" name="website">
        
        <label for="color">Favorite Color:</label>
        <input type="color" id="color" name="color">
        
        <label for="range">Experience (1-10):</label>
        <input type="range" id="range" name="range" min="1" max="10" value="5">
    </fieldset>
    
    <fieldset>
        <legend>Preferences</legend>
        
        <label>
            <input type="checkbox" name="newsletter" value="yes">
            Subscribe to newsletter
        </label>
        
        <label>Gender:</label>
        <label><input type="radio" name="gender" value="male"> Male</label>
        <label><input type="radio" name="gender" value="female"> Female</label>
        
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="">Select...</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
        </select>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message..."></textarea>
    </fieldset>
    
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
</form>`,
                    language: 'html'
                },
                {
                    title: 'Semantic HTML5 Article with Rich Content',
                    code: `<article>
    <header>
        <h1>Understanding HTML5 Semantic Elements</h1>
        <p>Published by <cite>John Doe</cite> on <time datetime="2024-01-20">January 20, 2024</time></p>
    </header>
    
    <section>
        <h2>Introduction</h2>
        <p>
            Semantic HTML uses <strong>meaningful</strong> tags like 
            <code>&lt;article&gt;</code> and <code>&lt;section&gt;</code> 
            instead of generic <code>&lt;div&gt;</code> elements.
        </p>
        
        <figure>
            <img src="semantic-html.jpg" alt="Diagram showing semantic HTML structure">
            <figcaption>Fig 1. Semantic HTML structure</figcaption>
        </figure>
    </section>
    
    <section>
        <h2>Key Benefits</h2>
        <ul>
            <li><mark>Better SEO</mark> - Search engines understand content better</li>
            <li><mark>Accessibility</mark> - Screen readers navigate easier</li>
            <li><mark>Maintainability</mark> - Code is more readable</li>
        </ul>
    </section>
    
    <section>
        <h2>Example Code</h2>
        <pre><code>&lt;header&gt;
    &lt;h1&gt;Page Title&lt;/h1&gt;
    &lt;nav&gt;Navigation&lt;/nav&gt;
&lt;/header&gt;</code></pre>
    </section>
    
    <details>
        <summary>Additional Resources</summary>
        <ul>
            <li><a href="#">MDN Documentation</a></li>
            <li><a href="#">W3C Specification</a></li>
        </ul>
    </details>
    
    <footer>
        <p>Tags: <span>HTML5</span>, <span>Semantic</span>, <span>Best Practices</span></p>
    </footer>
</article>`,
                    language: 'html'
                },
                {
                    title: 'Interactive Elements & Media',
                    code: `<!-- Collapsible Content -->
<details open>
    <summary>Click to expand/collapse</summary>
    <p>This content can be shown or hidden by clicking the summary.</p>
</details>

<!-- Audio Player -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser doesn't support audio.
</audio>

<!-- Video with Subtitles -->
<video width="640" height="360" controls poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English">
    Your browser doesn't support video.
</video>

<!-- Progress Bar -->
<label for="progress">Download Progress:</label>
<progress id="progress" value="65" max="100">65%</progress>

<!-- Meter Gauge -->
<label for="disk">Disk Usage:</label>
<meter id="disk" value="0.7" min="0" max="1" low="0.5" high="0.9" optimum="0.3">70%</meter>

<!-- Canvas for Graphics -->
<canvas id="myCanvas" width="400" height="200">
    Your browser doesn't support canvas.
</canvas>
<script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#4299e1';
    ctx.fillRect(10, 10, 150, 100);
</script>`,
                    language: 'html'
                }
            ]
        }
    },

    'css': {
        id: 'css',
        title: 'CSS - Cascading Style Sheets',
        category: 'frontend',
        description: 'Master CSS styling, layouts, flexbox, grid, and responsive design',
        difficulty: 'Beginner',
        tags: ['CSS', 'Styling', 'Design', 'Frontend'],
        content: {
            introduction: 'CSS is used to style and layout web pages. It controls colors, fonts, spacing, and responsive design.',
            sections: [
                {
                    title: 'CSS Basics',
                    items: [
                        'CSS stands for Cascading Style Sheets',
                        'Used for styling HTML elements',
                        'Three ways to add CSS: Inline, Internal, External',
                        'Selectors: element, class, id, attribute, pseudo-class'
                    ]
                },
                {
                    title: 'Box Model',
                    items: [
                        'Content - The actual content',
                        'Padding - Space inside border',
                        'Border - Border around padding',
                        'Margin - Space outside border'
                    ]
                },
                {
                    title: 'Layout Techniques',
                    items: [
                        'Flexbox - One-dimensional layouts',
                        'Grid - Two-dimensional layouts',
                        'Position: static, relative, absolute, fixed, sticky',
                        'Float and Clear (legacy)'
                    ]
                },
                {
                    title: 'Responsive Design',
                    items: [
                        'Media queries for different screen sizes',
                        'Mobile-first approach',
                        'Flexible units: %, em, rem, vw, vh',
                        'Responsive images and typography'
                    ]
                }
            ],
            codeExamples: [
                {
                    title: 'Flexbox Layout',
                    code: `.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.item {
    flex: 1;
    padding: 1rem;
    background: #f0f0f0;
}`,
                    language: 'css'
                },
                {
                    title: 'Responsive Media Query',
                    code: `/* Mobile First */
.container {
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        max-width: 720px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
}`,
                    language: 'css'
                }
            ]
        }
    },

    'react-basic': {
        id: 'react-basic',
        title: 'React - Basics',
        category: 'frontend',
        description: 'React fundamentals: components, JSX, props, state, and lifecycle',
        difficulty: 'Intermediate',
        tags: ['React', 'JavaScript', 'Frontend', 'Components'],
        content: {
            introduction: 'React is a JavaScript library for building user interfaces with reusable components.',
            sections: [
                {
                    title: 'What is React?',
                    items: [
                        'Open-source JavaScript library for UIs',
                        'Created by Facebook (Meta) in 2013',
                        'Component-based architecture',
                        'Uses Virtual DOM for performance',
                        'Declarative programming approach',
                        'Unidirectional data flow'
                    ]
                },
                {
                    title: 'Key Features',
                    items: [
                        'Virtual DOM - Faster updates',
                        'Server-side rendering support',
                        'Reusable components',
                        'One-way data binding',
                        'JSX - JavaScript XML syntax',
                        'Rich ecosystem and community'
                    ]
                },
                {
                    title: 'Components',
                    items: [
                        'Functional Components - JavaScript functions',
                        'Class Components - ES6 classes',
                        'Props - Data passed from parent to child',
                        'State - Internal component data',
                        'Pure Components - Performance optimization'
                    ]
                },
                {
                    title: 'JSX',
                    items: [
                        'JavaScript XML syntax',
                        'Write HTML in JavaScript',
                        'Babel transpiles JSX to React.createElement()',
                        'Expressions in curly braces {}',
                        'Must return single root element'
                    ]
                },
                {
                    title: 'Lifecycle Methods',
                    items: [
                        'Mounting: constructor, render, componentDidMount',
                        'Updating: shouldComponentUpdate, render, componentDidUpdate',
                        'Unmounting: componentWillUnmount',
                        'Error Handling: componentDidCatch'
                    ]
                }
            ],
            codeExamples: [
                {
                    title: 'Functional Component',
                    code: `import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;`,
                    language: 'javascript'
                },
                {
                    title: 'Class Component with State',
                    code: `import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;`,
                    language: 'javascript'
                }
            ]
        }
    },

    'react-hooks': {
        id: 'react-hooks',
        title: 'React - Hooks',
        category: 'frontend',
        description: 'Modern React with Hooks: useState, useEffect, useContext, and custom hooks',
        difficulty: 'Intermediate',
        tags: ['React', 'Hooks', 'useState', 'useEffect'],
        content: {
            introduction: 'React Hooks let you use state and other React features in functional components.',
            sections: [
                {
                    title: 'Why Hooks?',
                    items: [
                        'Use React features without classes',
                        'No need for "this" keyword',
                        'Easier to reuse stateful logic',
                        'Introduced in React 16.8',
                        'Rules: Only at top level, only in React functions'
                    ]
                },
                {
                    title: 'useState',
                    items: [
                        'Manages state in functional components',
                        'Returns array: [state, setState]',
                        'Can hold any type of value',
                        'setState can take callback with previous state',
                        'Does not merge state automatically (unlike class setState)'
                    ]
                },
                {
                    title: 'useEffect',
                    items: [
                        'Replaces lifecycle methods',
                        'Runs after every render by default',
                        'Dependency array controls when it runs',
                        'Empty array [] = runs once (componentDidMount)',
                        'Return cleanup function (componentWillUnmount)',
                        'Can have multiple useEffect hooks'
                    ]
                },
                {
                    title: 'Other Hooks',
                    items: [
                        'useContext - Access context values',
                        'useReducer - Complex state management',
                        'useCallback - Memoize callbacks',
                        'useMemo - Memoize computed values',
                        'useRef - Access DOM elements',
                        'Custom Hooks - Reusable logic'
                    ]
                }
            ],
            codeExamples: [
                {
                    title: 'useState Example',
                    code: `import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(prev => prev - 1)}>
                Decrement
            </button>
        </div>
    );
}`,
                    language: 'javascript'
                },
                {
                    title: 'useEffect Example',
                    code: `import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // This runs once on mount
        fetch('/api/data')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
            
        // Cleanup function
        return () => {
            console.log('Component unmounting');
        };
    }, []); // Empty dependency array
    
    if (loading) return <p>Loading...</p>;
    
    return (
        <ul>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    );
}`,
                    language: 'javascript'
                }
            ]
        }
    },

    'javascript-basic': {
        id: 'javascript-basic',
        title: 'JavaScript - Basics',
        category: 'javascript',
        description: 'JavaScript fundamentals: variables, data types, operators, and control flow',
        difficulty: 'Beginner',
        tags: ['JavaScript', 'Programming', 'Basics'],
        content: {
            introduction: 'JavaScript is a high-level, object-oriented, multi-paradigm programming language.',
            sections: [
                {
                    title: 'Introduction',
                    items: [
                        'Created by Brendan Eich in May 1995',
                        'Originally named Mocha, then LiveScript',
                        'High-level, interpreted language',
                        'Multi-paradigm (imperative, declarative)',
                        'Essential for web development'
                    ]
                },
                {
                    title: 'Data Types',
                    items: [
                        'Primitive: String, Number, Boolean, Undefined, Null, BigInt, Symbol',
                        'Non-primitive: Object, Array, Function',
                        'typeof operator to check types',
                        'Dynamic typing - variables can change types'
                    ]
                },
                {
                    title: 'Variables',
                    items: [
                        'var - Function scoped (old way)',
                        'let - Block scoped (ES6)',
                        'const - Block scoped, cannot reassign',
                        'Use descriptive names',
                        'Avoid reserved keywords'
                    ]
                },
                {
                    title: 'Operators',
                    items: [
                        'Arithmetic: +, -, *, /, %, **',
                        'Comparison: ==, ===, !=, !==, <, >, <=, >=',
                        'Logical: &&, ||, !',
                        'Assignment: =, +=, -=, *=, /=',
                        'Increment/Decrement: ++, --'
                    ]
                },
                {
                    title: 'Control Flow',
                    items: [
                        'if, else if, else statements',
                        'switch statement',
                        'Ternary operator: condition ? true : false',
                        'for loop, while loop, do-while loop',
                        'break and continue'
                    ]
                }
            ],
            codeExamples: [
                {
                    title: 'Variables and Data Types',
                    code: `// Variables
let name = "John";      // String
const age = 25;         // Number
var isStudent = true;   // Boolean
let salary;             // Undefined
let data = null;        // Null

// Arrays and Objects
const colors = ['red', 'green', 'blue'];
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

console.log(typeof name);    // "string"
console.log(typeof age);     // "number"
console.log(typeof person);  // "object"`,
                    language: 'javascript'
                },
                {
                    title: 'Control Flow',
                    code: `// If-Else
let score = 85;

if (score >= 90) {
    console.log('A grade');
} else if (score >= 80) {
    console.log('B grade');
} else {
    console.log('C grade');
}

// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// Switch Statement
const day = 'Monday';
switch(day) {
    case 'Monday':
        console.log('Start of week');
        break;
    case 'Friday':
        console.log('End of week');
        break;
    default:
        console.log('Midweek');
}`,
                    language: 'javascript'
                }
            ]
        }
    },

    'node': {
        id: 'node',
        title: 'Node.js',
        category: 'backend',
        description: 'Server-side JavaScript with Node.js: modules, npm, async patterns, and APIs',
        difficulty: 'Intermediate',
        tags: ['Node.js', 'Backend', 'Server', 'JavaScript'],
        content: {
            introduction: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine for building scalable server-side applications.',
            sections: [
                {
                    title: 'What is Node.js?',
                    items: [
                        'JavaScript runtime environment',
                        'Built on V8 JavaScript engine',
                        'Created by Ryan Dahl',
                        'Event-driven, non-blocking I/O',
                        'Single-threaded with event loop',
                        'Perfect for I/O intensive applications'
                    ]
                },
                {
                    title: 'Core Concepts',
                    items: [
                        'V8 Engine - Executes JavaScript',
                        'Libuv - Event loop and thread pool',
                        'Event Loop - Handles async operations',
                        'Thread Pool - Heavy operations (default 4 threads)',
                        'Non-blocking I/O',
                        'CommonJS module system'
                    ]
                },
                {
                    title: 'Built-in Modules',
                    items: [
                        'fs - File system operations',
                        'http - Create web servers',
                        'path - File path utilities',
                        'os - Operating system info',
                        'events - Event emitter',
                        'stream - Streaming data'
                    ]
                },
                {
                    title: 'NPM',
                    items: [
                        'Node Package Manager',
                        'Largest ecosystem of libraries',
                        'package.json - Project configuration',
                        'npm install - Install dependencies',
                        'Semantic versioning (semver)'
                    ]
                }
            ],
            codeExamples: [
                {
                    title: 'Simple HTTP Server',
                    code: `const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Node.js!</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});`,
                    language: 'javascript'
                },
                {
                    title: 'File System Operations',
                    code: `const fs = require('fs');

// Read file asynchronously
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Write file
fs.writeFile('output.txt', 'Hello World', (err) => {
    if (err) throw err;
    console.log('File written successfully');
});`,
                    language: 'javascript'
                }
            ]
        }
    }
};

// Get topic by ID
export const getTopicById = (id) => {
    return topicsData[id] || null;
};

// Get all topics
export const getAllTopics = () => {
    return Object.values(topicsData);
};

// Get topics by category
export const getTopicsByCategory = (categoryId) => {
    return Object.values(topicsData).filter(topic => topic.category === categoryId);
};

// Search topics
export const searchTopics = (query) => {
    const lowerQuery = query.toLowerCase();
    return Object.values(topicsData).filter(topic =>
        topic.title.toLowerCase().includes(lowerQuery) ||
        topic.description.toLowerCase().includes(lowerQuery) ||
        topic.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
};
