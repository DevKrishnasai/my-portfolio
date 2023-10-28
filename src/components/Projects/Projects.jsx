import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  const style = {
    height: "10px",
    border: "0",
    boxShadow: "0 10px 10px -10px #8c8c8c inset",
  };
  return (
    <>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">
            Projects
            <hr style={style} />
          </div>

          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
