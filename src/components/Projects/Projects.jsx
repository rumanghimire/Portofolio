import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Projects.module.css';
import { getImageUrl } from '../../utils';

export const Projects = () => {
  const images = [
    getImageUrl('project/Image.jpeg'),
    getImageUrl('project/image1.jpeg'),
    getImageUrl('project/image2.jpeg'),
    getImageUrl('project/image3.jpeg'),
  ];

  const image1 = [
    getImageUrl('project/image4.jpg'),
    getImageUrl('project/image5.jpeg'),

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>Browse My Recent Works</h1>
      
      <div className={styles.projectItem}>
        <ul className={styles.projectList}>
          <li className={styles.projectItems1}>
            <div className={styles.sliderContainer}>
            <h2 className={styles.projectheading}>Liz's Angels Project</h2> {/* Container for slider and info */}
              <div className={styles.slider}> {/* Slider */}
                <Slider {...settings}>
                  {images.map((imageUrl, index) => (
                    <div key={index}>
                      <img src={imageUrl} alt={`Slide ${index}`} className={styles.lizPhoto} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.info}> {/* Info section */}
                
                <p className={styles.projectDescription}> * Made a website using WordPress for the non-profit organization, based on the client's requirements and design details.</p>
                <p className = {styles.more}> * Implemented responsive design principles for optimal viewing across various devices and screen sizes.</p>
                <div className = {styles.a}>
                <a href = "https://lizangels.com" className= "styles.link">Link</a>
                  </div>

              </div>
              
            </div>
          </li>
          <li className={styles.projectItems1}>
            <div className={styles.sliderContainer}>
            <h2 className={styles.projectheading}>TodoList </h2> {/* Container for slider and info */}
            <div className={styles.slider}> {/* Slider */}
                <Slider {...settings}>
                  {image1.map((imageUrl, index) => (
                    <div key={index}>
                      <img src={imageUrl} alt={`Slide ${index}`} className={styles.Photo} />
                    </div>
                  ))}
                </Slider>
              </div>
              
              </div>
              <div className={styles.info}> 
              
                <p className={styles.projectDescription}> * keep track of our to-do list. Users can mark tasks as done, and the system can either display a "done" sign or allow users to delete tasks based on their preferences..</p>
                <p className = {styles.more}> * Tools: HTML, CSS, JavaScript, React.</p>
                <div className = {styles.a}>
                <a href = "https://github.com/rumanghimire/ToDoList.git" className= "styles.link">Link</a>
                  </div>

              </div>
           
          </li>

          <li className={styles.projectItems1}>
            <div className={styles.sliderContainer}>
            <h2 className={styles.projectheading}>ULM Baseball Project </h2> 
            
              
              </div>
              <div className={styles.info}> 
              
                <p className={styles.projectDescription}> * Currently, working on a project where we track files from a file server, transfer them into our database, and process the output in the form of graphs using Power BI</p>
                <p className = {styles.more}> * Tools: Python, Microsoft Power BI.</p>
                

              </div>
           
          </li>

        </ul>
      </div>
    </section>
  );
  
  
};
