import React, { useEffect, useState } from "react";
import projectFinder from "../api/projectFinder";
import ProjectsCSS from "./Projects.module.css";
import * as mdIcons from "react-icons/md";

const ListProjects = () => {
    // Set variable for project objects. Set function for setting project objects
    const [projects, setProjects] = useState([]);

    const getData = async () => {
      const { data } = await projectFinder.get(`/projects`);
      setProjects(data);
    }

    useEffect(() => {
      getData();
    }, []);

    // Print all project objects
    return (
    <div>
      <div className={ProjectsCSS.container}>
        {projects.map((project) => (
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

export default ListProjects;