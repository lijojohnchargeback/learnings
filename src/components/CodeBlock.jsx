import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './CodeBlock.css';

const CodeBlock = ({ code, language = 'javascript', title }) => {
    const { theme } = useTheme();
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className="code-block">
            {title && <div className="code-block-title">{title}</div>}
            <div className="code-block-header">
                <span className="code-language">{language}</span>
                <button
                    onClick={handleCopy}
                    className="copy-button"
                    title={copied ? 'Copied!' : 'Copy code'}
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
            </div>
            <SyntaxHighlighter
                language={language}
                style={theme === 'dark' ? vscDarkPlus : vs}
                customStyle={{
                    margin: 0,
                    borderRadius: '0 0 0.75rem 0.75rem',
                    fontSize: '0.9rem',
                }}
                showLineNumbers
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
