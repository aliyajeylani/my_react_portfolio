
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../styles/Portfolio.css';



const styles = {
  text: {
    textAlign: 'center',
  },

}


function Portfolio() {


  return (
    <section className="portfolio">
      <Carousel>
        <Carousel.Item>
          <a href="https://aliyajeylani.github.io/job_finder/">
            <img
              className="d-block w-100"
              src="itakeoff_webpage.png"
              alt="iTakeoff Webpage"
            />
          </a>
          <Carousel.Caption>
            <h3 styles={styles.text}>iTakeOff</h3>
            <p>I created a job explorer website called iTakeoff for people who are new to tech and would like to learn more about some of the most popular jobs in the tech industry.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="code_quiz.png"
            alt="Code Quiz Challenge"
          />

          <Carousel.Caption>
            <h3>Code Quiz</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="team_profile.png"
            alt="Team Profile Challenge"
          />

          <Carousel.Caption>
            <h3>Team Profile</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </section>

  );
}

export default Portfolio;
