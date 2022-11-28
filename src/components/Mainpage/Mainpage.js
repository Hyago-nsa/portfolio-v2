import React, { Fragment } from "react";
import classes from "./Mainpage.module.css";

const Mainpage = () => {
  return (
    <Fragment>
      <section className={classes.grain} />

      <div className={classes.introduction}>
        <h2>Hi,</h2>
        <h2>I'm Hyago.</h2>
        <p>Front End Developer</p>
      </div>
    </Fragment>
  );
};

export default Mainpage;
