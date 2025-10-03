import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero/heroImage.png";
import Resume from "../../assets/pdfs/Shahid-Firozabad_Resume.pdf";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shahid</h1>
        <div className="hero-desc">
          <p className={styles.description}>
            I am an IT student passionate about Artificial Intelligence, full-stack development, and innovative technologies. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js), and I’m exploring advanced projects that combine AI, web development, and multimedia. I aim to build a career in AI-driven web applications, creating impactful and smart solutions that merge intelligence, interactivity, and cutting-edge technology.
          </p>
        </div>
        <div className="hero-buttons-container">
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href={Resume} target="_blank" rel="noopener noreferer" className={styles.resumeBtn}>
            Veiw Resume
          </a>
        </div>
      </div>
      <img src={heroImg} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
