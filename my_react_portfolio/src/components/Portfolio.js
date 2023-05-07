import React from 'react';
import '../styles/Portfolio.css';



const styles = {
  sectionStyle: {

  },

}


function Portfolio() {


  return (
    <section className="portfolio">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="https://aliyajeylani.github.io/job_finder/">
              <img src="itakeoff_webpage.png" class="d-block w-100" alt="itakeoff webpage" />
            </a>
          </div>
          <div class="carousel-item">
            <a href="https://aliyajeylani.github.io/Code_quiz_app/">
              <img src="code_quiz.png" class="d-block w-100" alt="code quiz challenge" />
            </a>
          </div>
          <div class="carousel-item">
          <a href="https://drive.google.com/file/d/1c_6ipJ8W3_3FVSShYrbeHjrQTMELGq8k/view">
            <img src="team_profile.png" class="d-block w-100" alt="team profile challenge" />
            </a>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


    </section>
  );
}

export default Portfolio;
