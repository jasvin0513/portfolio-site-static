import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import projectFinder from "../api/projectFinder.js";

//Styles
import ProjectCSS from "./Project.module.css";
import * as mdIcons from "react-icons/md";
import UnknownCSS from "./Unknown.module.css";

const ListProject = () => {
  // Set variable for project objects. Set function for setting project objects
  const [project, setProject] = useState([]);
  let { id } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await projectFinder.get(`/projects/${id}`);
        console.log(response.data);
        setProject(response.data);
      } catch (err) { console.log(err) }
    }

    fetchData();
  }, []);

  //Redirect to Unknown page for invalid project IDs
  if (project.length === 0) {
    return (
      <div className={UnknownCSS.message}>
        <h1 className={UnknownCSS.warning}>You've entered uncharted territories...</h1>
        <p className={UnknownCSS.advice}>Use the navigation bar to return where you came from</p>
      </div>
    )
  }

  //Render tools section if existent
  let tools;
  if (project.tools !== null) {
    tools = <p className={ProjectCSS.tools}>{project.tools}</p>;
  }
  else {
    tools = <span />;
  }

  if (typeof project.icon !== "undefined") {
    const icon = project.icon;
    // Showcase project
    // Properties: title, about, icon, progress, github
    return (
      <div className={ProjectCSS.post}>
        <div className={ProjectCSS.icon}>
          {React.createElement(mdIcons[`${icon}`])}
        </div>
        <div className={ProjectCSS.text}>
          <h1 className={ProjectCSS.title}>{project.title}</h1>
          <p className={ProjectCSS.blurb}>{project.blurb}</p>
          {tools}
          <p className={ProjectCSS.description}>{project.description}</p>
          <a className={ProjectCSS.source} href={project.source}>Check it out</a>
          <p className={ProjectCSS.progress}>{project.progress}</p>
        </div>
      </div>
    )
  }
}

export default ListProject;