import React from "react";
import projects from "../assets/projects";

export function ProjectCard() {
  return (
    <>
      {projects.map((project, i) => {
        return (
          <div className="card-container" id={i}>
          <div className="project-card" id={project.id} key={project.id}>
            <div>
            <h4 className="project-name">
              {project.name} <span className="arrow">&#10138;</span>
            </h4>
            <a href={project.link} target="blank">
              <img src={project.imgSrc} alt="" className="project-img" />
            </a>
            <p className="project-text">{project.description}</p>
            <div className="stack-container" key={project.name}>
              {project.stack.map((tech) => {
                return <span key={tech}>{tech}</span>;
              })}
            </div>
            </div>
          </div>
          </div>
        );
      })}
    </>
  );
}
