import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Symbia",
      description: "Building an AI image generation tool that translates scientific text prompt / image of a rough, hand-drawn sketch into figures for publications and conferences. I have been experimenting with fine-tuning of image generation models, ControlNet, post-generation processing tools like InstructPix2Pix, and more!",
      link: null  
    },
    {
      title: "Mitigating Catastrophic Forgetting in Continual Learning",
      description: "Implementing methods to mitigate catastrophic forgetting in continual learning of LLMs while keeping computation efficient. Currently expanding it to multimodal language models and diffusion models. Researching under mentorship of Professor Gabriel Kreiman at Harvard.",
      link: null  
    },
    {
      title: "LungTech",
      description: "Built an iOS app with an integrated ML model achieving 80%+ accuracy in detecting lung disease through cough recordings.",
      link: "https://github.com/aonori3/LungTech"
    },
    {
      title: "Recipe Generator App",
      description: "Built an iOS app for AI-generated recipes using Swift.",
      link: "https://github.com/aonori3/recipie"
    },
    {
      title: "Splice Predictor",
      description: "Implemented RNN-based model for splice site prediction in DNA seqs, achieving 95%+ accuracy. This was supervised by Professor Martin A. Nowak at Harvard.",
      link: "https://github.com/aonori3/SplicePredictor"
    }
  ];

  return (
    <div className="projects-container">
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index}>
            {project.link ? (
              <a href={project.link} className="project-title fira-sans-semibold" target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            ) : (
              <span className="project-title fira-sans-semibold">{project.title}</span>
            )}
            <p className="project-description fira-sans-regular">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
