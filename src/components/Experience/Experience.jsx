import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.hai} id="experience">
    <h1 className={styles.experience1}>Experience</h1>
     <div>
        <ul className = {styles.experienceItem}>
          <li className={styles.experienceItem1}>
            <img src={getImageUrl("experience/LSBDC.jpeg")} alt="ULM_Logo" className={styles.LSBDClogo}/> 
              <div className = {styles.experienceItem2}>
              <h3 className = {styles.IBM}>IBM Technology LED Grant</h3>
              <h3 className = {styles.IBMposition}>Web Developer (Aug 2023 - Present)</h3>
              
              <p>
                - Lead the LED-funded technology team for small business website
                development, emphasizing improved project efficiency and timely
                delivery.
                </p>
                <p>
                - Implement strategic measures to reduce project rework
                and ensure high-quality outcomes throughout the Software
                Development Life Cycle (SDLC).
              </p>
            </div>
            </li>
            <li className={styles.experienceItem1}>
            <img src={getImageUrl("experience/ulm.png")} alt="ULM_Logo" className={styles.LSBDClogo}/> 
              <div className = {styles.experienceItem2}>
              <h3 className = {styles.IBM}>Information Technology Help Desk, ULM</h3>
              <h3 className = {styles.IBMposition}>IT Helpdesk Assistant (Aug 2022 - Aug 2023)</h3>
              
              <p>
                - Delivered efficient technical support for university staff and students, addressing hardware/software issues, network connectivity, and account management.
                </p>
                <p>
                - Played a key role in enhancing IT support processes by suggesting and implementing solutions for common issues.
              </p>
            </div>
            </li>
            <li className={styles.experienceItem1}>
            <img src={getImageUrl("experience/ulm.png")} alt="ULM_Logo" className={styles.LSBDClogo}/> 
              <div className = {styles.experienceItem2}>
              <h3 className = {styles.IBM}>Department of Computer Science, ULM</h3>
              <h3 className = {styles.IBMposition}>Undergraduate Teaching Assistant (Aug 2022 - Dec 2022)</h3>
              
              <p>
                - Assisted a professor in facilitating and mentoring daily 2-hour lectures on introductory programming using Java and Python for 30 freshman students
                </p>
                <p>
                - Provided comprehensive guidance and solutions for programming challenges, addressing inquiries and clarifying doubts related to programming concepts.
              </p>
            </div>
            </li>


        </ul>
      </div>
    </section>
  );
};


