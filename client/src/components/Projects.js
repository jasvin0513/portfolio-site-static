import React, { useEffect, useState } from "react";
import ProjectsCSS from "./Projects.module.css";
import * as mdIcons from "react-icons/md";

const ListProjects = () => {
  // Set variable for project objects. Set function for setting project objects
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/projects`);
        const data = await (response.json());
        console.log(data);
        setProjects(data);
      } catch (err) { console.log(err) }
    }

    fetchData();
  }, []);

  // Print all project objects
  if (projects !== undefined) {
    return (
      <div>
        <div className={ProjectsCSS.container}>
          {projects && projects.map((project) => (
            <a key={project.project_id} className={ProjectsCSS.tile} href={"/projects/" + project.project_id}>
              <div>
                <h1 className={ProjectsCSS.title}>{project.title}</h1>
                <div className={ProjectsCSS.icon}>
                  {React.createElement(mdIcons[`${project.icon}`])}
                </div>
                <h2 className={ProjectsCSS.blurb}>{project.blurb}</h2>
                <p className={ProjectsCSS.progress}>{project.progress}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }
}

export default ListProjects;