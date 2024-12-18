import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="fira-sans-medium">Aoi Otani</h1>
      {/* <img src="/pfp.jpg" alt="Aoi Otani" className="profile-pic" />*/}
      <div className="bio">
        <p className="fira-sans-regular">
        I am a senior (fourth-year) at Harvard, studying Biology and Computer Science. 
        My mission is to enhance human quality of life through technology through startup(s) 
        and research.

        </p>
        <p className="fira-sans-regular">
          My interests include, but are not limited to:
        </p>
        <ul className="list">
          <li className="fira-sans-regular">Tackling Catastrophic Forgetting in AI models</li>
          <li className="fira-sans-regular">LLM safety - improving robustness against adversarial attacks</li>
          <li className="fira-sans-regular">Tools and models that accelerate biological discovery (e.g. transformer models for molecular dynamics simulations) </li>
          <li className="fira-sans-regular">Software tools to improve healthcare. Applications in hospitals, clinical trials, telehealth.</li>
          <li className="fira-sans-regular">How the human brain works</li>
          <li className="fira-sans-regular">Emotionally intelligent AI and AI companions </li>
          <li className="fira-sans-regular">Integrating biometric data and wearables for health monitoring and analysis</li>
        </ul>
      </div>
{/* 
      <div className="projects-section">
        <h2 className="fira-sans-medium">Projects</h2>
        <ul className="list">
          <li><Link to="/projects" className="fira-sans-regular">Symbia</Link></li>
          <li><Link to="/projects" className="fira-sans-regular">PolicyMART</Link></li>
          <li><Link to="/projects" className="fira-sans-regular">Mitigating Catastrophic Forgetting in Continual Learning</Link></li>
          <li><Link to="/projects" className="fira-sans-regular">LungTech</Link></li>
          <li><Link to="/projects" className="fira-sans-regular">Recipe Generator App</Link></li>
          <li><Link to="/projects" className="fira-sans-regular">Splice Predictor</Link></li>
        </ul>
      </div> */}
      
    </div>
  );
};

export default HomePage;
