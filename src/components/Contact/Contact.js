import React, { Fragment } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <Fragment id="#contact">
      <section className={classes.grain} />

      <div className={classes.contact}>
        <div className={classes.stayintouch}>
          <p>STAY IN TOUCH</p>
        </div>
        <div className={classes.contact_form}>
          <div className={classes.contact_text}>
            <div className={classes.contact_description}>
              I’m interested in work and freelance opportunities – Small and
              large projects. However, if you have other request or question,
              don’t hesitate to contact me.
            </div>
            <div className={classes.contact_info}>
              <p>Remotely available UTC−8 to UTC+1.</p>
              <p>hyago.eurico.nsa@gmail.com</p>
            </div>
          </div>

          <div className={classes.contactForm}>
            <form autoComplete="off">
              <ul>
                <li>
                  <label>
                    <input
                      id="name"
                      placeholder="Name"
                      className={classes.input_field}
                      type="text"
                    ></input>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      id="email"
                      placeholder="Email"
                      className={classes.input_field}
                      type="text"
                    ></input>
                  </label>
                </li>
                <li>
                  <label>
                    <textarea
                      id="message"
                      placeholder="Message"
                      rows="7"
                      className={classes.input_field}
                      type="text"
                    ></textarea>
                  </label>
                </li>
                <li>
                  <label className={classes.input_field_send}>
                    <button className={classes.input_field_button} type="text">
                      Send message!
                    </button>
                  </label>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
