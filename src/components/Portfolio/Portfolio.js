import React from "react";
import classes from "./Portfolio.module.css";
import project_advice from "../../assets/images/project-advice.png";
import project_budget from "../../assets/images/project-budget.png";
import project_dino from "../../assets/images/project-dino.png";
import project_ocean from "../../assets/images/project-ocean.png";
import project_portfolio from "../../assets/images/project-portfolio.png";
import project_youtube from "../../assets/images/project-youtube.png";
import Projects from "./Projects/Projects";

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <div className={classes.projects}>
        <Projects image={project_advice} href={"https://hyago-nsa.github.io/project-advice/"}/>
        <Projects image={project_portfolio} href={"https://hyago-nsa.github.io/react-portfolio/"}/>
        <Projects image={project_youtube} href={"https://hyago-nsa.github.io/project-youtube-clone/"}/>
        <Projects image={project_dino} href={"https://hyago-nsa.github.io/project-dinossaur-game/"}/>
        <Projects image={project_ocean} href={"https://hyago-nsa.github.io/project-ocean/"}/>
        <Projects image={project_budget} href={"https://hyago-nsa.github.io/project-budge-app/"}/>
      </div>
    </div>
  );
};

export default Portfolio;
