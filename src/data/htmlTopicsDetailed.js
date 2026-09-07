// Detailed HTML Topics with Explanation, Samples, Related Topics, and Playground

export const htmlTopicsDetailed = {
    // BEGINNER TOPICS
    "introduction": {
        id: "introduction",
        name: "Introduction to HTML",
        difficulty: "beginner",
        category: "html",

        explanation: {
            title: "What is HTML?",
            content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document.

HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.`,

            keyPoints: [
                "HTML stands for HyperText Markup Language",
                "It is the building block of all websites",
                "HTML uses tags to define elements like headings, paragraphs, links, and more",
                "HTML5 is the latest version with new semantic elements",
                "HTML works together with CSS (styling) and JavaScript (behavior)"
            ],

            versions: {
                "HTML 4.01": "Released in 1999, last major version before HTML5",
                "XHTML": "XML-based version of HTML 4.01",
                "HTML5": "Current standard, introduced in 2014 with new semantic elements, multimedia support, and APIs"
            }
        },

        samples: [
            {
                title: "Basic HTML Document",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is my first web page.</p>
</body>
</html>`,
                language: "html",
                description: "A complete minimal HTML document structure"
            },
            {
                title: "HTML with Multiple Elements",
                code: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Example</title>
</head>
<body>
    <h1>Main Heading</h1>
    <h2>Subheading</h2>
    <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
    <a href="https://www.example.com">Click here to visit Example.com</a>
</body>
</html>`,
                language: "html",
                description: "HTML document with various text formatting elements"
            }
        ],

        relatedTopics: [
            { id: "basic-structure", name: "Basic HTML Structure" },
            { id: "text-basics", name: "Text & Headings" },
            { id: "semantic-html", name: "Semantic HTML5" }
        ],

        playground: {
            defaultCode: `<!DOCTYPE html>
<html>
<head>
    <title>My Playground</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        h1 { color: #ffd700; }
    </style>
</head>
<body>
    <h1>Hello, HTML World!</h1>
    <p>Edit this code and see the changes live!</p>
</body>
</html>`,
            instructions: "Try modifying the text, colors, or adding new elements to see how HTML works!"
        }
    },

    "basic-structure": {
        id: "basic-structure",
        name: "Basic HTML Structure",
        difficulty: "beginner",
        category: "html",

        explanation: {
            title: "Understanding HTML Document Structure",
            content: `Every HTML document follows a basic structure that tells the browser how to interpret and display the content. The structure consists of several key elements that work together to create a valid HTML page.

The DOCTYPE declaration defines the document type and HTML version. The <html> element is the root element that contains all other elements. The <head> contains metadata, while the <body> contains the visible page content.`,

            keyPoints: [
                "<!DOCTYPE html> - Declares the document as HTML5",
                "<html> - Root element that wraps all content",
                "<head> - Contains metadata and page information",
                "<title> - Sets the page title shown in browser tab",
                "<body> - Contains all visible content",
                "Proper nesting and indentation are important for readability"
            ],

            elements: {
                "<!DOCTYPE html>": "Document type declaration for HTML5",
                "<html>": "Root element, typically includes lang attribute",
                "<head>": "Container for metadata and links to external resources",
                "<title>": "Page title displayed in browser tab",
                "<body>": "Contains all visible page content"
            }
        },

        samples: [
            {
                title: "Complete HTML5 Template",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A complete HTML5 template">
    <meta name="author" content="Your Name">
    <title>Complete HTML5 Template</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Website Header</h1>
    </header>
    
    <main>
        <h2>Main Content</h2>
        <p>This is the main content area.</p>
    </main>
    
    <footer>
        <p>&copy; 2024 Your Website</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>`,
                language: "html",
                description: "A professional HTML5 document structure with semantic elements"
            },
            {
                title: "Minimal Valid HTML",
                code: `<!DOCTYPE html>
<html>
<head>
    <title>Minimal HTML</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>`,
                language: "html",
                description: "The minimum required elements for a valid HTML document"
            }
        ],

        relatedTopics: [
            { id: "introduction", name: "Introduction to HTML" },
            { id: "meta-seo", name: "Meta Tags & SEO" },
            { id: "semantic-html", name: "Semantic HTML5" }
        ],

        playground: {
            defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Structure Playground</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f0f4f8;
        }
        header {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 2rem;
            text-align: center;
        }
        main {
            max-width: 800px;
            margin: 2rem auto;
            padding: 2rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        footer {
            background: #2d3748;
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>My Structured Page</h1>
        <p>Demonstrating HTML structure</p>
    </header>
    
    <main>
        <h2>Welcome!</h2>
        <p>This page shows the basic structure of an HTML document.</p>
        <p>Try adding more content here!</p>
    </main>
    
    <footer>
        <p>&copy; 2024 HTML Learning</p>
    </footer>
</body>
</html>`,
            instructions: "Experiment with adding more semantic elements like <nav>, <article>, or <section>!"
        }
    },

    "text-basics": {
        id: "text-basics",
        name: "Text & Headings",
        difficulty: "beginner",
        category: "html",

        explanation: {
            title: "Working with Text and Headings in HTML",
            content: `HTML provides various elements for structuring and formatting text content. Headings (h1-h6) create a hierarchy of importance, while paragraphs (<p>) contain blocks of text. Line breaks and horizontal rules help with visual organization.

Headings are crucial for both SEO and accessibility. Search engines use them to understand page structure, and screen readers use them to help users navigate content. Always use headings in order (don't skip levels) and use only one <h1> per page.`,

            keyPoints: [
                "Six heading levels: <h1> to <h6>",
                "<h1> is the most important, used once per page",
                "<p> creates paragraphs with automatic spacing",
                "<br> creates line breaks within text",
                "<hr> creates horizontal divider lines",
                "Proper heading hierarchy improves SEO and accessibility"
            ],

            bestPractices: [
                "Use only one <h1> per page for the main title",
                "Don't skip heading levels (don't jump from h2 to h4)",
                "Use headings to create a logical document outline",
                "Keep headings concise and descriptive",
                "Avoid using headings just for visual styling"
            ]
        },

        samples: [
            {
                title: "Heading Hierarchy",
                code: `<h1>Main Page Title</h1>
<p>Introduction paragraph for the page.</p>

<h2>Section 1: Getting Started</h2>
<p>This section covers the basics.</p>

<h3>Subsection 1.1: Installation</h3>
<p>Details about installation...</p>

<h3>Subsection 1.2: Configuration</h3>
<p>Configuration details...</p>

<h2>Section 2: Advanced Topics</h2>
<p>More advanced content here.</p>

<hr>

<p>Footer content after horizontal rule.</p>`,
                language: "html",
                description: "Proper heading hierarchy with paragraphs"
            },
            {
                title: "Text with Line Breaks",
                code: `<h1>Contact Information</h1>

<p>
    John Doe<br>
    123 Main Street<br>
    Anytown, ST 12345<br>
    Email: john@example.com
</p>

<hr>

<h2>Office Hours</h2>
<p>
    Monday - Friday: 9:00 AM - 5:00 PM<br>
    Saturday: 10:00 AM - 2:00 PM<br>
    Sunday: Closed
</p>`,
                language: "html",
                description: "Using line breaks for addresses and formatted text"
            }
        ],

        relatedTopics: [
            { id: "basic-formatting", name: "Basic Text Formatting" },
            { id: "semantic-html", name: "Semantic HTML5" },
            { id: "accessibility", name: "Accessibility (A11y)" }
        ],

        playground: {
            defaultCode: `<!DOCTYPE html>
<html>
<head>
    <title>Headings & Text</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: #fafafa;
            line-height: 1.6;
        }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem; }
        h2 { color: #34495e; margin-top: 2rem; }
        h3 { color: #7f8c8d; }
        p { color: #555; }
        hr { border: none; border-top: 2px dashed #bdc3c7; margin: 2rem 0; }
    </style>
</head>
<body>
    <h1>The Art of HTML Typography</h1>
    <p>This is an introduction to working with headings and text in HTML.</p>
    
    <h2>Chapter 1: Understanding Headings</h2>
    <p>Headings create structure and hierarchy in your document.</p>
    
    <h3>The Importance of H1</h3>
    <p>The H1 tag should be used once per page for the main title.</p>
    
    <hr>
    
    <h2>Chapter 2: Working with Paragraphs</h2>
    <p>Paragraphs are the building blocks of content.<br>
    You can use line breaks within them as needed.</p>
</body>
</html>`,
            instructions: "Try creating your own document structure with different heading levels!"
        }
    },

    "links-images": {
        id: "links-images",
        name: "Links & Images",
        difficulty: "beginner",
        category: "html",

        explanation: {
            title: "Creating Hyperlinks and Displaying Images",
            content: `Links and images are fundamental to the web. The <a> (anchor) element creates hyperlinks that connect web pages together, while the <img> element displays images. Understanding these elements is crucial for building interactive and visually appealing websites.

Links can point to other pages on your site (relative URLs), external websites (absolute URLs), specific parts of the same page (anchor links), or trigger actions like sending emails or making phone calls.`,

            keyPoints: [
                "<a> creates clickable hyperlinks using the href attribute",
                "target='_blank' opens links in a new tab",
                "<img> displays images using the src attribute",
                "alt attribute provides text description for images (crucial for accessibility)",
                "width and height attributes control image dimensions",
                "Always include descriptive alt text for accessibility"
            ],

            linkTypes: {
                "Absolute URL": "https://www.example.com/page.html",
                "Relative URL": "../images/photo.jpg or /about/team.html",
                "Anchor Link": "#section-id (jumps to element with that ID)",
                "Email Link": "mailto:email@example.com",
                "Phone Link": "tel:+1234567890"
            }
        },

        samples: [
            {
                title: " Different Link Types",
                code: `<!-- External link (opens in new tab) -->
<a href="https://www.google.com" target="_blank" rel="noopener">
    Visit Google
</a>

<!-- Internal link (same website) -->
<a href="/about.html">About Us</a>

<!-- Anchor link (jump to section) -->
<a href="#contact">Jump to Contact Section</a>

<!-- Email link -->
<a href="mailto:info@example.com">Email Us</a>

<!-- Phone link -->
<a href="tel:+1-234-567-8900">Call: (234) 567-8900</a>

<!-- Download link -->
<a href="/files/document.pdf" download>Download PDF</a>`,
                language: "html",
                description: "Various types of hyperlinks and their uses"
            },
            {
                title: "Images with Different Attributes",
                code: `<!-- Basic image -->
<img src="photo.jpg" alt="A beautiful sunset">

<!-- Image with size control -->
<img src="logo.png" 
     alt="Company Logo" 
     width="200" 
     height="100">

<!-- Responsive image -->
<img src="banner.jpg" 
     alt="Welcome banner" 
     style="max-width: 100%; height: auto;">

<!-- Image as a link -->
<a href="https://www.example.com">
    <img src="button.png" alt="Click here">
</a>

<!-- Image with loading optimization -->
<img src="large-photo.jpg" 
     alt="Large photo" 
     loading="lazy"
     width="800" 
     height="600">`,
                language: "html",
                description: "Different ways to use and optimize images"
            }
        ],

        relatedTopics: [
            { id: "advanced-media", name: "Advanced Media" },
            { id: "accessibility", name: "Accessibility (A11y)" },
            { id: "semantic-html", name: "Semantic HTML5" }
        ],

        playground: {
            defaultCode: `<!DOCTYPE html>
<html>
<head>
    <title>Links & Images Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
        }
        .card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        a {
            color: #00796b;
            text-decoration: none;
            font-weight: bold;
            padding: 0.5rem 1rem;
            background: #e0f2f1;
            border-radius: 5px;
            display: inline-block;
            margin: 0.5rem 0;
            transition: all 0.3s;
        }
        a:hover {
            background: #00796b;
            color: white;
            transform: translateY(-2px);
        }
        img {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>🔗 Exploring Links</h1>
        <p>Click the links below:</p>
        <a href="https://www.github.com" target="_blank">Visit GitHub</a>
        <a href="mailto:hello@example.com">Send Email</a>
        <a href="#bottom">Jump to Bottom</a>
    </div>
    
    <div class="card">
        <h2>🖼️ Working with Images</h2>
        <p>Images make web pages more engaging!</p>
        <img src="https://via.placeholder.com/600x300/667eea/ffffff?text=Beautiful+Placeholder+Image" 
             alt="Placeholder image">
    </div>
    
    <div class="card" id="bottom">
        <p>You jumped here using an anchor link!</p>
    </div>
</body>
</html>`,
            instructions: "Try adding your own links and images. Experiment with different image sizes and link targets!"
        }
    },

    "basic-formatting": {
        id: "basic-formatting",
        name: "Basic Text Formatting",
        difficulty: "beginner",
        category: "html",

        explanation: {
            title: "Text Formatting in HTML",
            content: `HTML provides various elements for styling and emphasizing text. Understanding the difference between visual and semantic formatting is crucial for creating accessible and meaningful web content.

While visual elements like <b> and <i> only change appearance, semantic elements like <strong> and <em> convey meaning about the content's importance or emphasis. Screen readers and search engines use this semantic information to better understand your content.`,

            keyPoints: [
                "<strong> provides semantic emphasis (important) and bold styling",
                "<em> provides semantic emphasis (stress) and italic styling",
                "<b> and <i> are for stylistic purposes only",
                "<u> creates underlined text (use sparingly)",
                "<small> represents side-comments and fine print",
                "Always prefer semantic elements over purely visual ones for better accessibility"
            ],

            bestPractices: [
                "Use <strong> for important text instead of <b>",
                "Use <em> for emphasized text instead of <i>",
                "Avoid <u> as it can be confused with links",
                "Use CSS for styling, HTML for meaning",
                "Consider screen reader users when choosing elements"
            ]
        },

        samples: [
            {
                title: "Semantic vs Visual Elements",
                code: `<!-- Semantic elements (RECOMMENDED) -->
<p>This is <strong>very important</strong> information!</p>
<p>Please <em>do not</em> ignore this warning.</p>

<!-- Visual elements (less semantic) -->
<p>This text is <b>bold</b> for visual emphasis only.</p>
<p>This text is <i>italic</i> for stylistic purposes.</p>

<!-- Mixed example -->
<p>
    The <strong>deadline</strong> is approaching! 
    <em>Please</em> submit your work by <b>Friday</b>.
</p>`,
                language: "html",
                description: "Comparison between semantic and visual formatting elements"
            },
            {
                title: "Common Text Formatting",
                code: `<h2>Product Features</h2>

<!-- Strong emphasis -->
<p><strong>New!</strong> This product is now available.</p>

<!-- Emphasis -->
<p>This is <em>absolutely</em> the best choice.</p>

<!-- Underline (use sparingly) -->
<p>Book title: <u>The Great Gatsby</u></p>

<!-- Small print -->
<p>Price: $99.99 <small>(taxes not included)</small></p>

<!-- Combined formatting -->
<p>
    <strong>Warning:</strong> This action <em>cannot</em> be undone.
    <small>Please proceed with caution.</small>
</p>`,
                language: "html",
                description: "Practical examples of text formatting in content"
            },
            {
                title: "Complex Formatting Example",
                code: `<article>
    <h1>Understanding HTML Formatting</h1>
    
    <p>
        HTML provides <strong>powerful</strong> formatting capabilities. 
        When you need to <em>emphasize</em> certain words, use the 
        appropriate semantic tags.
    </p>
    
    <p>
        <strong>Important Note:</strong> Never use formatting tags 
        <em>just</em> for visual styling. That's what CSS is for!
    </p>
    
    <p>
        Discounted price: <del>$100</del> <strong>$79.99!</strong>
        <small>Limited time offer</small>
    </p>
    
    <p>
        The formula is H<sub>2</sub>O and Einstein's equation is 
        E=mc<sup>2</sup>.
    </p>
</article>`,
                language: "html",
                description: "Real-world article with various formatting elements"
            }
        ],

        relatedTopics: [
            { id: "text-basics", name: "Text & Headings" },
            { id: "introduction", name: "Introduction to HTML" },
            { id: "advanced-formatting", name: "Advanced Text Formatting" }
        ],

        playground: {
            defaultCode: `<!DOCTYPE html>
<html>
<head>
    <title>Text Formatting Demo</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 700px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            line-height: 1.8;
        }
        .info-box {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin: 1rem 0;
        }
        strong {
            color: #d63031;
        }
        em {
            color: #0984e3;
            font-weight: 600;
        }
        small {
            color: #636e72;
        }
    </style>
</head>
<body>
    <div class="info-box">
        <h1>Text Formatting Playground</h1>
        
        <p>
            This is <strong>very important</strong> information that you 
            <em>must</em> pay attention to!
        </p>
        
        <p>
            Regular price: <del>$199.99</del><br>
            <strong>Sale Price: $149.99</strong><br>
            <small>Offer valid until end of month</small>
        </p>
        
        <p>
            Chemical formula: H<sub>2</sub>O + CO<sub>2</sub><br>
            Mathematical expression: x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup>
        </p>
    </div>
</body>
</html>`,
            instructions: "Try different formatting combinations! Modify the text, add your own examples, or change the styling with CSS."
        }
    },

    "lists-basic": {
        id: "lists-basic",
        name: "Basic Lists",
        difficulty: "beginner",
        category: "html",

        explanation: {
            title: "Working with Lists in HTML",
            content: `Lists are fundamental HTML elements used to group related items. HTML provides three types of lists: unordered lists (bullet points), ordered lists (numbered), and description lists (terms and definitions).

Lists are not just for navigation menus - they're useful for any collection of related items: features, steps in a process, ingredients, team members, and much more. Proper use of lists improves content structure and accessibility.`,

            keyPoints: [
                "<ul> creates unordered (bullet) lists",
                "<ol> creates ordered (numbered) lists",
                "<li> represents each list item",
                "Lists can be nested for hierarchical data",
                "Default styling can be customized with CSS",
                "List items can contain any HTML content (paragraphs, links, images, etc.)"
            ],

            bestPractices: [
                "Use ordered lists for sequential steps or rankings",
                "Use unordered lists for non-sequential groupings",
                "Always close list items and list containers properly",
                "Keep list items parallel in structure and length when possible",
                "Use CSS to customize list markers instead of images in HTML"
            ]
        },

        samples: [
            {
                title: "Unordered List Example",
                code: `<h2>Shopping List</h2>
<ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Bread</li>
    <li>Butter</li>
    <li>Coffee</li>
</ul>

<h2>Features</h2>
<ul>
    <li>Fast performance</li>
    <li>Easy to use</li>
    <li>Mobile responsive</li>
    <li>24/7 support</li>
</ul>`,
                language: "html",
                description: "Basic unordered lists for grouping related items"
            },
            {
                title: "Ordered List Example",
                code: `<h2>Recipe Instructions</h2>
<ol>
    <li>Preheat oven to 350°F (175°C)</li>
    <li>Mix dry ingredients in a bowl</li>
    <li>Add wet ingredients and stir until combined</li>
    <li>Pour batter into greased pan</li>
    <li>Bake for 30-35 minutes</li>
    <li>Let cool before serving</li>
</ol>

<h2>Top 3 Movies</h2>
<ol>
    <li>The Shawshank Redemption</li>
    <li>The Godfather</li>
    <li>The Dark Knight</li>
</ol>`,
                language: "html",
                description: "Ordered lists for sequential steps or rankings"
            },
            {
                title: "Nested Lists",
                code: `<h2>Course Outline</h2>
<ul>
    <li>Introduction
        <ul>
            <li>What is Web Development?</li>
            <li>Tools and Setup</li>
        </ul>
    </li>
    <li>HTML Basics
        <ul>
            <li>Document Structure</li>
            <li>Common Elements</li>
            <li>Forms and Input</li>
        </ul>
    </li>
    <li>CSS Fundamentals
        <ul>
            <li>Selectors</li>
            <li>Box Model</li>
            <li>Flexbox and Grid</li>
        </ul>
    </li>
</ul>`,
                language: "html",
                description: "Nested lists create hierarchical structures"
            },
            {
                title: "Lists with Rich Content",
                code: `<h2>Team Members</h2>
<ul>
    <li>
        <strong>John Doe</strong> - <em>CEO</em><br>
        <small>Email: john@example.com</small>
    </li>
    <li>
        <strong>Jane Smith</strong> - <em>CTO</em><br>
        <small>Email: jane@example.com</small>
    </li>
    <li>
        <strong>Bob Johnson</strong> - <em>Lead Developer</em><br>
        <small>Email: bob@example.com</small>
    </li>
</ul>`,
                language: "html",
                description: "List items can contain complex HTML content"
            }
        ],

        relatedTopics: [
            { id: "advanced-lists", name: "Description Lists" },
            { id: "text-basics", name: "Text & Headings" },
            { id: "semantic-html", name: "Semantic HTML5" }
        ],

        playground: {
            defaultCode: `<!DOCTYPE html>
<html>
<head>
    <title>Lists Playground</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }
        .card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        h2 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 0.5rem;
        }
        ul {
            list-style-type: '✓ ';
            padding-left: 2rem;
        }
        ol {
            counter-reset: item;
            list-style: none;
            padding-left: 2rem;
        }
        ol li {
            counter-increment: item;
            margin-bottom: 0.5rem;
        }
        ol li::before {
            content: counter(item) ". ";
            color: #e74c3c;
            font-weight: bold;
            margin-right: 0.5rem;
        }
        li {
            margin: 0.75rem 0;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="card">
        <h2>🛒 Shopping List</h2>
        <ul>
            <li>Fresh vegetables</li>
            <li>Whole grain bread</li>
            <li>Organic milk</li>
            <li>Free-range eggs</li>
        </ul>
    </div>
    
    <div class="card">
        <h2>📝 How to Make Coffee</h2>
        <ol>
            <li>Boil water to 200°F</li>
            <li>Grind coffee beans</li>
            <li>Add coffee to filter</li>
            <li>Pour water slowly over grounds</li>
            <li>Wait 3-4 minutes</li>
            <li>Enjoy your perfect cup!</li>
        </ol>
    </div>
</body>
</html>`,
            instructions: "Create your own lists! Try nesting lists, adding more items, or styling them with CSS."
        }
    },

    "comments": {
        id: "comments",
        name: "HTML Comments",
        difficulty: "beginner",
        category: "html",

        explanation: {
            title: "Using Comments in HTML",
            content: `HTML comments allow you to add notes and documentation directly in your code that won't be displayed in the browser. Comments are essential for documenting complex code, leaving TODO notes, temporarily disabling code, and communicating with other developers.

While comments are hidden from visual display, they are visible in the page source code. Never put sensitive information like passwords or private notes in HTML comments as anyone can view them by inspecting the page source.`,

            keyPoints: [
                "Comments use <!-- comment --> syntax",
                "Everything between <!-- and --> is ignored by the browser",
                "Comments can span multiple lines",
                "Comments are visible in page source/developer tools",
                "Useful for documentation, TODOs, and temporarily disabling code",
                "Cannot be nested inside other comments"
            ],

            bestPractices: [
                "Use comments to explain complex or non-obvious code",
                "Document why you did something, not just what",
                "Add TODO comments for future improvements",
                "Remove commented-out code before deploying to production",
                "Never include sensitive information in comments",
                "Keep comments concise and relevant"
            ]
        },

        samples: [
            {
                title: "Basic Comment Usage",
                code: `<!-- This is a simple comment -->
<h1>Welcome to My Website</h1>

<!-- 
    Multi-line comment
    for longer explanations
    or documentation
-->
<p>This paragraph is visible.</p>

<!-- TODO: Add navigation menu here -->

<!-- <p>This paragraph is commented out and won't display</p> -->`,
                language: "html",
                description: "Different ways to use comments in HTML"
            },
            {
                title: "Documentation Comments",
                code: `<!-- 
=====================================
HEADER SECTION
Author: John Doe
Last Updated: 2024-01-20
Description: Main header with logo and navigation
=====================================
-->
<header>
    <img src="logo.png" alt="Company Logo">
    
    <!-- Primary Navigation Menu -->
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
</header>

<!-- 
NOTE: The footer styles are defined in footer.css
Changing anything here may affect mobile responsiveness
-->
<footer>
    <p>&copy; 2024 Company Name</p>
</footer>`,
                language: "html",
                description: "Using comments for documentation and notes"
            },
            {
                title: "Temporary Disable Code",
                code: `<div class="product-card">
    <h2>Product Name</h2>
    <p>Product description goes here.</p>
    
    <!-- Temporarily disabled until pricing is finalized
    <div class="pricing">
        <span class="price">$99.99</span>
        <button>Add to Cart</button>
    </div>
    -->
    
    <!-- TODO: Add product reviews section -->
    <!-- TODO: Implement wishlist functionality -->
    
    <!-- FIXME: Image not loading on mobile devices -->
    <img src="product.jpg" alt="Product Image">
</div>`,
                language: "html",
                description: "Comments for disabling code and tracking tasks"
            }
        ],

        relatedTopics: [
            { id: "introduction", name: "Introduction to HTML" },
            { id: "basic-structure", name: "Basic HTML Structure" },
            { id: "text-basics", name: "Text & Headings" }
        ],

        playground: {
            defaultCode: `<!DOCTYPE html>
<html>
<head>
    <title>Comments Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 2rem;
            background: #f7f7f7;
        }
        .visible {
            background: #4CAF50;
            color: white;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 5px;
        }
        /* 
            Note: CSS comments use different syntax
            They use forward slash and asterisk like this
        */
    </style>
</head>
<body>
    <!-- ========================================
         Welcome Section
         This displays a greeting to users
         ======================================== -->
    <div class="visible">
        <h1>Hello! This text is visible</h1>
        <p>Comments help document your code!</p>
    </div>
    
    <!-- 
        The paragraph below is commented out.
        It won't appear on the page, but you can see it 
        in the page source code.
    -->
    <!--
    <div class="visible">
        <h2>This section is hidden</h2>
        <p>Because it's inside a comment!</p>
    </div>
    -->
    
    <!-- TODO: Add more content here -->
    <!-- NOTE: Check browser compatibility for new features -->
    
    <div class="visible">
        <p>Right-click and "View Page Source" to see all comments!</p>
    </div>
</body>
</html>`,
            instructions: "Try adding your own comments, or comment out different sections to see what happens!"
        }
    }
};

// Helper function to get topic by ID
export const getHTMLTopicDetails = (topicId) => {
    return htmlTopicsDetailed[topicId] || null;
};

// Get all topic IDs
export const getAllHTMLTopicIds = () => {
    return Object.keys(htmlTopicsDetailed);
};
