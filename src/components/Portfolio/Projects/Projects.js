import React from "react";
import classes from "./Projects.module.css";

const Projects = (props) => {
  return (
    <div className={classes.container}>
      <a  href={props.href}>
      <img className={classes.image} src={props.image}/>
      </a>
    </div>
  );
};

export default Projects;
