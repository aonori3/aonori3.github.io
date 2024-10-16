import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Writing from './components/Writing';
import { Moon, Sun } from 'lucide-react';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li><Link to="/" className="fira-sans-medium">Home</Link></li>
              <li><Link to="/projects" className="fira-sans-medium">Projects</Link></li>
              <li><Link to="/writing" className="fira-sans-medium">Writing</Link></li>
            </ul>
          </nav>
          <button onClick={toggleDarkMode} className="theme-toggle nav-link">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <main className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writing" element={<Writing />} />
          </Routes>
        </main>
        
        <footer>
          <div className="social-links">
            <a href="https://x.com/bigvalleyblue" target="_blank" rel="noopener noreferrer" className="fira-sans-regular">X/Twitter</a>
            <a href="https://www.linkedin.com/in/aoi-otani-ab3a1b205/" target="_blank" rel="noopener noreferrer" className="fira-sans-regular">LinkedIn</a>
            <a href="https://github.com/aonori3" target="_blank" rel="noopener noreferrer" className="fira-sans-regular">GitHub</a>
            <a href="mailto: aoiotani@college.harvard.edu" className="fira-sans-regular">Email</a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;