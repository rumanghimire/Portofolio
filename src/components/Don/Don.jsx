import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Don.module.css";



export const Don = () =>{
    return<section className={styles.container} id = "about">
        <div className={styles.content} >
            <h1 className={styles.title}>Hello, I'm Ruman</h1>
            <p className={styles.description}>Senior in Computer Science seeking opportunities in Software Engineering or Web Development. Passionate about applying technical skills and innovation to contribute to dynamic projects. </p>
            <a href='/Users/rumanghimire/Desktop/Portofolio/assets/don/Ruman Resume updated-2.pdf' className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">My Resume</a>

            <a href='mailto: rumanghimire2058@gmail.com' className = {styles.contactBtn}>Get in touch</a>
            
    
            

        </div>
        <img src = {getImageUrl("don/don.png")} alt= "Picture of coding" className={styles.donImg}/>
        
        <div className= {styles.topBlur}/>
        <div className = {styles.bottomBlur}/>
        

    </section>
}

