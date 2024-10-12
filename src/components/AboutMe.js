import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
return (
    <div className="about-container">
        <p>
        Hi, I am Aoi.
        </p>
        <p>
        I am currently a senior (fourth-year) at Harvard, studying Biology and Computer Science. My interests include, but are not limited to:
        <li>Mitigating catastrophic forgetting in machine learning models</li>
        <li>The intersection between artificial and natural intelligence</li>
        <li>Improving the quality of text-to-image models</li>
        <li>Software tools that accelerate biological discovery</li>
        <li>Software tools to improve healthcare</li>
        </p>
        <h2>Skills</h2>
        <ul className="skills-list">
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Node.js</li>
            <li>Git</li>
        </ul>
    </div>
);
};

export default AboutMe;