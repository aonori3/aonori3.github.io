import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "LungTech",
      description: "Developed ML model with 80% accuracy for lung disease detection via cough recordings. Integrated model into Swift-based app. Click here for model, Click here for app demo.",
      link: "https://github.com/aonori3/LungTech"
    },
    {
      title: "Recipe Generator App",
      description: "Developed an iOS app for AI-generated recipes using Swift, OpenAI API, and Firebase. Click here for app demo.",
      link: "https://github.com/aonori3/recipie.git"
    },
    {
      title: "Splice Predictor",
      description: "Implemented RNN-based model for splice site prediction in DNA seqs, achieving 95%+ accuracy.",
      link: "https://github.com/yourusername/healthcare-ai-assistant"
    },
    {
      title: "Symbia Co.",
      description: "Developing an AI image generation tool that translates scientific descriptions into figures for publications/conferences.",
      link: "https://github.com/yourusername/generative-art-platform"
    }
  ];

  return (
    <div className="projects-container">
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} className="project-title" target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
            <p className="project-description">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;