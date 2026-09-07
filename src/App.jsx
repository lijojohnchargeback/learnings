import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AllTopicsPage from './pages/AllTopicsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import DocumentationPage from './pages/DocumentationPage';
import AboutPage from './pages/AboutPage';
import './index.css';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="app">
                    <Navbar />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/topics" element={<AllTopicsPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/blog/:blogId" element={<BlogPostPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/category/:categoryId" element={<CategoryPage />} />
                            {/* Unified Documentation Route */}
                            <Route path="/learn/:categoryId/:topicId" element={<DocumentationPage />} />
                            {/* Fallback/Legacy Redirects if needed - but here we'll just update the links */}
                            <Route path="/learn/:topicId" element={<DocumentationPage />} />
                            <Route path="/topic/:topicId" element={<DocumentationPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
