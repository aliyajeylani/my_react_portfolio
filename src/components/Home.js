import React from 'react';
import '../styles/Home.css';



const styles = {
  sectionStyles: {
    // background: 'f3e5f5',
  },
};

function About() {

  return (
    <section style={styles.sectionStyles} className="about_me">
      <img src="IMG_1030.jpg" alt="picture of aliya" />
      <p>
        I am a goal-oriented, motivated developer looking to build my experience in the software development arena. I recently completed a full stack web development program through the University of Minnesota, where I received my certificate in full stack web development. I would like to leverage what I learned to make an impact in the world. I have excellent communication and problem solving skills and leverage these abilities effectively. My curiosity has no limits. I am constantly looking for new experiences and challenges to help develop my technical skills to become a great web developer.
      </p>

    </section>
  );
}

export default About;
