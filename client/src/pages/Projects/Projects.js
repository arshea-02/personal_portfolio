import React from "react";
import TicketTap from "../../assests/images/TicketTap.jpg";
import FloralFantasia from "../../assests/images/floral_fantasia.png";
import PersonalPortfolio from "../../assests/images/personalportfolio.jpg";
import Perfomix from "../../assests/images/Perfomix.png";
import "./projects.css";

const Projects = () => {
  const movieSiteURL = process.env.REACT_APP_MOVIE_SITE_URL;
  const flowerShopURL = process.env.REACT_APP_FLOWER_SHOP_URL;
  const portfolioURL = process.env.REACT_APP_PORTFOLIO_URL;
  const perfomixURL = process.env.REACT_APP_PERFOMIX_URL;
  return (
    <>
      <div id="project" className="container projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          The following are the top web development projects I have worked on. They showcase my skills in full-stack development, front-end design, and problem-solving abilities. Each project is a testament to my dedication to creating efficient and user-friendly web applications.
        </p>
        <div id="ads" className="row">
          <div className="col-md-4 mb-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={TicketTap} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto mt-2">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Movie Booking Website</h5>
                </div>
                <a
                  href={movieSiteURL}
                  className="ad-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">FrontEnd</span>
                <img src={FloralFantasia} alt="project2" />
              </div>
              <div className="card-image-overlay m-auto mt-2">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">PHP</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">Javascript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Flower Shop Website</h5>
                </div>
                <a
                  href={flowerShopURL}
                  className="ad-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={PersonalPortfolio} alt="project3" />
              </div>
              <div className="card-image-overlay m-auto mt-2">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Personal Portfolio</h5>
                </div>
                <a
                  href={portfolioURL}
                  className="ad-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <span className="card-notify-badge">FYP</span>

                <img src={Perfomix} alt="project4" />
              </div>
              <div className="card-image-overlay m-auto mt-2">
                <span className="card-detail-badge">MERN</span>
                <span className="card-detail-badge">TailwindCSS</span>
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">BERT</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Perfomix; Employee Performance Managememnt System
                  </h5>
                </div>
                <a
                  href={perfomixURL}
                  className="ad-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
