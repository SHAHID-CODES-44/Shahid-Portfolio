import React from "react";

import styles from "./Contact.module.css";
import email from "../../assets/contact/emailIcon.png";
import github from "../../assets/contact/githubIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import contact from "../../assets/contact/contactIcon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:shahidfirozaba@gmail.com">shahidfirozaba@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={github}
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/shahidfirozabad">www.linkedin.com/in/shahidfirozabad</a>
        </li>
        <li className={styles.link}>
          <img src={linkedin} alt="Github icon" />
          <a href="https://github.com/SHAHID-CODES-44">github.com/SHAHID-CODES-44</a>
        </li>
        <li className={styles.link}>
          <img src={contact} alt="Github icon" className="contactIcon-footer"/>
          <a href="7249280617">7249280617</a>
        </li>
      </ul>
    </footer>
  );
};
