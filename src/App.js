import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import { Twitter, Linkedin, Github } from 'lucide-react';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Aoi Otani</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Me</Link></li>
            </ul>
          </nav>
        </header>

        <main className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>

        <footer>
          <div className="social-links">
            <a href="https://x.com/bigvalleyblue" target="_blank" rel="noopener noreferrer"><Twitter /></a>
            <a href="https://www.linkedin.com/in/aoi-otani-ab3a1b205/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="https://github.com/aonori3" target="_blank" rel="noopener noreferrer"><Github /></a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;