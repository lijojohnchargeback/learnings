// HTML Topics Categorized by Difficulty Level
export const htmlTopicsByLevel = {
    beginner: {
        title: "Beginner HTML",
        description: "Foundation concepts for starting with HTML",
        color: "#10b981", // Green
        topics: [
            {
                id: "introduction",
                name: "Introduction to HTML",
                items: ["What is HTML?", "HTML Versions (4.1 vs 5.0)", "Browser Basics"]
            },
            {
                id: "basic-structure",
                name: "Basic HTML Structure",
                items: [
                    "<!DOCTYPE> Declaration",
                    "<html> Element",
                    "<head> Element",
                    "<title> Element",
                    "<body> Element"
                ]
            },
            {
                id: "text-basics",
                name: "Text & Headings",
                items: [
                    "<h1> to <h6> Headings",
                    "<p> Paragraphs",
                    "<br> Line Breaks",
                    "<hr> Horizontal Rule"
                ]
            },
            {
                id: "basic-formatting",
                name: "Basic Text Formatting",
                items: [
                    "<b> Bold",
                    "<i> Italic",
                    "<strong> Strong Importance",
                    "<em> Emphasis",
                    "<u> Underline",
                    "<small> Smaller Text"
                ]
            },
            {
                id: "links-images",
                name: "Links & Images",
                items: [
                    "<a> Hyperlinks",
                    "<img> Images",
                    "Image Attributes (src, alt, width, height)"
                ]
            },
            {
                id: "lists-basic",
                name: "Basic Lists",
                items: [
                    "<ul> Unordered Lists",
                    "<ol> Ordered Lists",
                    "<li> List Items"
                ]
            },
            {
                id: "comments",
                name: "HTML Comments",
                items: ["<!--...--> Comment Syntax"]
            }
        ]
    },

    medium: {
        title: "Intermediate HTML",
        description: "Building interactive and structured content",
        color: "#f59e0b", // Orange
        topics: [
            {
                id: "advanced-formatting",
                name: "Advanced Text Formatting",
                items: [
                    "<abbr> Abbreviations",
                    "<address> Contact Information",
                    "<blockquote> & <q> Quotations",
                    "<cite> Citations",
                    "<code> Code Snippets",
                    "<pre> Preformatted Text",
                    "<mark> Highlighted Text",
                    "<del> & <ins> Deleted/Inserted Text",
                    "<sub> & <sup> Subscript/Superscript"
                ]
            },
            {
                id: "tables",
                name: "HTML Tables",
                items: [
                    "<table> Table Structure",
                    "<tr>, <th>, <td> Table Rows & Cells",
                    "<thead>, <tbody>, <tfoot> Table Sections",
                    "<caption> Table Caption",
                    "<colgroup> & <col> Column Grouping"
                ]
            },
            {
                id: "forms-basic",
                name: "Basic Forms",
                items: [
                    "<form> Form Element",
                    "<input> Input Fields",
                    "Input Types: text, password, email, number",
                    "<label> Form Labels",
                    "<button> Buttons",
                    "<textarea> Text Areas",
                    "<select> & <option> Dropdowns"
                ]
            },
            {
                id: "forms-advanced",
                name: "Advanced Form Elements",
                items: [
                    "Input Types: date, time, color, range, file",
                    "<fieldset> & <legend> Form Grouping",
                    "<datalist> Autocomplete",
                    "<output> Form Output",
                    "Form Attributes: required, placeholder, pattern"
                ]
            },
            {
                id: "media",
                name: "Audio & Video",
                items: [
                    "<audio> Audio Element",
                    "<video> Video Element",
                    "<source> Media Sources",
                    "<track> Text Tracks"
                ]
            },
            {
                id: "advanced-lists",
                name: "Description Lists",
                items: [
                    "<dl> Description Lists",
                    "<dt> Terms",
                    "<dd> Descriptions"
                ]
            },
            {
                id: "special-elements",
                name: "Special Elements",
                items: [
                    "<meter> Gauges",
                    "<progress> Progress Bars",
                    "<time> Time/Date",
                    "<kbd> Keyboard Input",
                    "<samp> Sample Output",
                    "<var> Variables"
                ]
            }
        ]
    },

    advanced: {
        title: "Advanced HTML",
        description: "Modern HTML5 features and best practices",
        color: "#ef4444", // Red
        topics: [
            {
                id: "semantic-html",
                name: "Semantic HTML5",
                items: [
                    "<header> Page/Section Header",
                    "<nav> Navigation",
                    "<main> Main Content",
                    "<article> Independent Content",
                    "<section> Document Sections",
                    "<aside> Sidebar Content",
                    "<footer> Page/Section Footer",
                    "<figure> & <figcaption> Figures with Captions"
                ]
            },
            {
                id: "meta-seo",
                name: "Meta Tags & SEO",
                items: [
                    "<meta charset='UTF-8'>",
                    "<meta name='description'>",
                    "<meta name='keywords'>",
                    "<meta name='viewport'>",
                    "Open Graph Meta Tags",
                    "SEO Best Practices"
                ]
            },
            {
                id: "advanced-media",
                name: "Advanced Media",
                items: [
                    "<canvas> Graphics",
                    "<svg> Vector Graphics",
                    "<picture> Responsive Images",
                    "<map> & <area> Image Maps"
                ]
            },
            {
                id: "embedded-content",
                name: "Embedded Content",
                items: [
                    "<iframe> Inline Frames",
                    "<embed> External Content",
                    "<object> & <param> External Objects"
                ]
            },
            {
                id: "interactive-elements",
                name: "Interactive Elements",
                items: [
                    "<details> & <summary> Collapsible Content",
                    "<dialog> Dialog Boxes",
                    "<template> HTML Templates"
                ]
            },
            {
                id: "text-direction",
                name: "Text Directionality",
                items: [
                    "<bdi> Bi-Directional Isolation",
                    "<bdo> Bi-Directional Override"
                ]
            },
            {
                id: "entities",
                name: "HTML Entities",
                items: [
                    "&nbsp; Non-Breaking Space",
                    "&lt; &gt; &amp; Special Characters",
                    "&copy; &reg; Symbols",
                    "Character Entity References"
                ]
            },
            {
                id: "html4-vs-html5",
                name: "HTML4 vs HTML5",
                items: [
                    "Deprecated Tags",
                    "New HTML5 Elements",
                    "Semantic vs Non-Semantic",
                    "Browser Compatibility"
                ]
            },
            {
                id: "accessibility",
                name: "Accessibility (A11y)",
                items: [
                    "ARIA Attributes",
                    "Alt Text Best Practices",
                    "Keyboard Navigation",
                    "Screen Reader Optimization"
                ]
            }
        ]
    }
};

// Helper function to get difficulty badge color
export const getDifficultyColor = (level) => {
    const colors = {
        beginner: "#10b981",
        medium: "#f59e0b",
        advanced: "#ef4444"
    };
    return colors[level] || "#6b7280";
};

// Get all topics count
export const getHTMLTopicsCount = () => {
    let count = 0;
    Object.values(htmlTopicsByLevel).forEach(level => {
        count += level.topics.length;
    });
    return count;
};
