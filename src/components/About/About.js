import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.text}>
        <h1>Hello there!</h1>
        <p>
          I’m a Front-End Developer located in Brazil. I have a serious passion
          for UI effects, animations and creating intuitive, dynamic user
          experiences.
        </p>
        <p>
          Well-organised person, problem solver with high attention to detail.
          Experienced in many tecnologies mainly JavaScript, TypeScript,
          React.js; I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <p>
          Interested in the entire frontend spectrum and working with positive people.
        </p>
      </div>

      <div className={classes.container}>
        <div className={classes.box}>
          <span style={{ "--text": 1 }}>
            <i></i>
            <i>Front-End</i>
          </span>
          <span style={{ "--text": 2 }}>
            <i>CSS</i>
          </span>
          <span style={{ "--text": 3 }}>
            <i></i>
            <i>HTML</i>
          </span>
          <span style={{ "--text": 4 }}>
            <i></i>
            <i></i>
            <i>JavaScript</i>
          </span>
          <span style={{ "--text": 5 }}>
            <i>TypeScript</i>
          </span>
          <span style={{ "--text": 6 }}>
            <i></i>
            <i>Next.js</i>
          </span>
          <span style={{ "--text": 7 }}>
            <i></i>
            <i></i>
            <i>React.js</i>
          </span>
          <span style={{ "--text": 8 }}>
            <i></i>
            <i>Front-End</i>
          </span>
          <span style={{ "--text": 9 }}>
            <i>CSS</i>
          </span>
          <span style={{ "--text": 10 }}>
            <i></i>
            <i>HTML</i>
          </span>
          <span style={{ "--text": 11 }}>
            <i></i>
            <i></i>
            <i>JavaScript</i>
          </span>
          <span style={{ "--text": 12 }}>
            <i>TypeScript</i>
          </span>
          <span style={{ "--text": 13 }}>
            <i></i>
            <i>Next.js</i>
          </span>
          <span style={{ "--text": 14 }}>
            <i></i>
            <i></i>
            <i>React.js</i>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
