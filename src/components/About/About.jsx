import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.skill}>
        <h1> My Skills</h1>
        <ul>
          <li><h3>HTML</h3>
            <span className={styles.bar}>
              <span className={styles.html}></span>
              
            </span>
          </li>
          <li>
            <h3>CSS</h3>
            <span className={styles.bar}>
              <span className={styles.css}></span>
              </span>
          </li>
          <li>
            <h3>JavaScript</h3>
            <span className={styles.bar}>
              <span className={styles.javascript}></span>
            </span> 
          </li>
          <li>
            <h3>Java</h3>
            <span className={styles.bar}><span className={styles.java}></span></span>
          </li>
          <li>
            <h3>React</h3>
            <span className={styles.bar}><span className={styles.react}></span></span>
          </li>
          <li>
            <h3>Python</h3>
            <span className={styles.bar}><span className={styles.python}></span></span>
          </li>
          <li>
            <h3>Wordpress</h3>
            <span className={styles.bar}><span className={styles.wordpress}></span></span>
          </li>
          <li>
            <h3>Node.js</h3>
            <span className={styles.bar}><span className={styles.nodejs}></span></span>
          </li>
          <li>
            <h3>Django</h3>
            <span className={styles.bar}><span className={styles.django}></span></span>
          </li>
        </ul>
      </div>
    </section>
  );
};
