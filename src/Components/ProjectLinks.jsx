import React, { useState } from "react";
import projects from "../assets/projects";
import styles from "../assets/ProjectLinks.module.css";
import ButtonLink from "./ButtonLink";

export function ProjectLinks({}) {
  const [activeButton, setActiveButton] = useState('');

  const handleClick = (id) => {
    setActiveButton(id);
    console.log(activeButton);
  };
  const scrollToTarget = (targetId) => {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <ul className={styles["project-links"]}>
        <li className={`${styles["list-item"]} ${styles["about-btn"]}`}>
          <ButtonLink
          id={'about'}
            activeButton={activeButton} 
            name={'about me'}
            onClick={() => {
              scrollToTarget("about");
              handleClick("about");
            }}
          >
            <span className={`${styles["link-span"]}`}></span>
            <span>about me</span>
          </ButtonLink>
        </li>
        
          <h4 className={styles["list-item"]}>projects</h4>
       
        {projects.map((project) => {
          return (
            <li className={styles["list-item"]} key={project.id}>
              <ButtonLink
                id={project.id}
                name={project.name}
                activeButton={activeButton} 
                className="link-btn"
                onClick={() => {
                  scrollToTarget(project.id);
                  handleClick(project.id);
                }}
              ></ButtonLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
