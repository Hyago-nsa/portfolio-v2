import React from "react";
import classes from "./Projects.module.css";

const Projects = (props) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={props.image} />
    </div>
  );
};

export default Projects;
