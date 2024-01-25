import { Contacts } from "./Components/Contacts";
import { ProjectLinks } from "./Components/ProjectLinks";
import { ProjectCard } from "./Components/ProjectCard";
import tagLogo from "./assets/tag2.png";
import "./App.css";

function App() {
  
  return (
    <div className="page-body" >
        <div className="side-bar">
          <div className="header-card">
            <div className="name-container">
              <h1>Marius</h1>
              <h1>Slepetys</h1>
              <h3>software developer</h3>
              <img src={tagLogo} alt="logo" className="tg-logo" />
            </div>
            <ProjectLinks />
            <Contacts />
          </div>
        </div>
        <div className="project-side">
          <div className="about-card"> 
          <div className="about" id="about">
            Hello there! I'm Marius, a passionate software engineer with a love
            for tech. I recently completed a rigorous software development boot
            camp, marking my transition from an operational manager in
            e-commerce furniture company. Throughout my life, I've been
            interested in coding and its potential. My experience in operational
            management honed my. Notably, I proactively introduced automation
            to increase efficiency in daily tasks, showcasing my problem-solving
            ability. My background in operational management also provided
            insights into planning and organisation system design, a foundation
            I'm eager to build upon in my journey as a web developer. My
            interest in coding drives my ambition to become a successful web
            developer. I'm excited to apply my skills and collaborate with
            dynamic teams on innovative projects, contributing effectively and
            aiding business growth.
          </div>
          </div>
          <ProjectCard />
        </div>
    </div>
  );
}

export default App;
