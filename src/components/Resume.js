import React from 'react';
import '../styles/Resume.css';




function Resume() {
  

    return (
      <section className="resume">
        <h3> Click <a href='https://docs.google.com/document/d/1CvuHDsxD7-ShQFpvYaCoVtNYCDObmXIh/edit?usp=share_link&ouid=107595826134448905207&rtpof=true&sd=true' download>here </a>to download my resume</h3>
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL,Sequelize</li>
          <li>MongoDB,Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </section>
    );
  }
  
  export default Resume;