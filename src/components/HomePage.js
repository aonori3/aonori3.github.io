import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="fira-sans-medium">Aoi Otani</h1>

      <div className="bio">
        <p className="fira-sans-regular">
          I am currently a senior (fourth-year) at Harvard, studying Biology and Computer Science. 
        </p>
        <p className="fira-sans-regular">
          My interests include, but are not limited to:
        </p>
        <ul className="list">
          <li className="fira-sans-regular">Mitigating catastrophic forgetting in machine learning models</li>
          <li className="fira-sans-regular">The intersection between artificial and natural intelligence</li>
          <li className="fira-sans-regular">Improving the quality of text-to-image models</li>
          <li className="fira-sans-regular">Software tools that accelerate biological discovery</li>
          <li className="fira-sans-regular">Software tools to improve healthcare</li>
        </ul>
      </div>

      <div className="projects-section">
        <h2 className="fira-sans-medium">Projects</h2>
        <ul className="list">
          <li><Link to="/projects" className="fira-sans-regular">Symbia</Link></li>
          <li><Link to="/projects" className="fira-sans-regular">Mitigating Catastrophic Forgetting in Continual Learning</Link></li>
          <li><Link to="/projects" className="fira-sans-regular">LungTech</Link></li>
          <li><Link to="/projects" className="fira-sans-regular">Recipe Generator App</Link></li>
          <li><Link to="/projects" className="fira-sans-regular">Splice Predictor</Link></li>
        </ul>
      </div>
      
    </div>
  );
};

export default HomePage;
