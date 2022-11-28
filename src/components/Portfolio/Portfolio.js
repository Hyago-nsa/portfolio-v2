import React from "react";
import classes from "./Portfolio.module.css";
import image1 from "../../assets/images/U_Fig_Farewell_ashen_one._Mayst_thou_thy_peace_discovr._86093366-b923-4cd7-92c8-685567a0f29c.png";
import image2 from "../../assets/images/U_Fig_Flaming_circle_in_the_moonsky_a4d6bbe1-f6ab-4ab1-b958-c48096309607.png";
import image3 from "../../assets/images/U_Fig_U_Fig_a2182dee-e0db-42ab-b22a-d339aa502fce.png";

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <div className={classes.projects}>
        <div>
          <img className={classes.image} src={image1} />
        </div>
        <div>
          <img className={classes.image} src={image2} />
        </div>
        <div>
          <img className={classes.image} src={image3} />
        </div>
        <div>
          <img className={classes.image} src={image1} />
        </div>
        <div>
          <img className={classes.image} src={image2} />
        </div>
        <div>
          <img className={classes.image} src={image3} />
        </div>
        <div>
          <img className={classes.image} src={image1} />
        </div>
        <div>
          <img className={classes.image} src={image2} />
        </div>
        <div>
          <img className={classes.image} src={image3} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
