import ReactFullpage from "@fullpage/react-fullpage";
import classes from "./App.module.css";
import React from "react";
import Mainpage from "./components/Mainpage/Mainpage";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div>
      <ReactFullpage
        //fullpage options
        loopHorizontal={false}
        controlArrows={true}
        continuousVertical={true}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>

              <div className="section" data-water="down">
                <div className="slide">
                  <Mainpage />
                  <div className={classes.buttons}>
                    <button
                      className={classes.buttonLeft}
                      onClick={() => {
                        fullpageApi.moveTo(2, 1);
                        fullpageApi.moveSectionUp();
                      }}
                    >
                      Contact
                    </button>
                    <button
                      className={classes.buttonRight}
                      onClick={() => fullpageApi.moveTo(1, 1)}
                    >
                      Portfolio
                    </button>
                  </div>
                </div>

                <div className="slide">
                  <Portfolio />
                </div>
              </div>
              <div id="contact" className="section">
                <div className="slide">
                  <About />
                  <div className={classes.specialContainer}>
                    <div className={classes.somethingspecial}>
                      <a
                        className={classes.specialclick}
                        onClick={() => fullpageApi.moveTo(2, 1)}
                      >
                        Let's make something special.
                      </a>
                    </div>
                    <div className={classes.specialBlank}></div>
                  </div>
                </div>
                <div className="slide">
                  <Contact />
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
