import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';  // Create this component
import Projects from './Projects';  // Create this component
import Contact from './Contact';  // Create this component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
