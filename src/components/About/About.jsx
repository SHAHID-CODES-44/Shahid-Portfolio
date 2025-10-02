import React from "react";
import styles from "./About.module.css";
import { aboutImage, cursorIcon, aiIcon, uiIcon } from "../../data/about"; // ✅ import from data/about.js

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm a full stack developer with experience in building responsive, optimized, and scalable web applications using the MERN stack (MySQL, Express.js, React, Node.js).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={aiIcon} alt="AI icon"/>
            <div className={styles.aboutItemText}>
              <h3>AI-ML Interest</h3>
              <p>
               I have a strong interest in Artificial Intelligence and Machine Learning. I want to learn and develop real-world projects in AI/ML to contribute to innovative tech solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I also have experience in designing user-friendly and visually appealing pages.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
