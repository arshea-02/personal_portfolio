import React from "react";
import TicketTap from "../../assests/images/TicketTap.jpg";
import FloralFantasia from "../../assests/images/floral_fantasia.png";
import PersonalPortfolio from "../../assests/images/personalportfolio.jpg";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="container projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, animi
          atque. Molestiae, autem. Ullam corporis blanditiis quasi enim, nam,
          numquam vitae animi quibusdam asperiores aliquam quas voluptatibus
          commodi. Eaque, nulla.
        </p>
        <div id="ads" className="row">
          <div className="col-md-4">
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
                <a href="https://github.com/arshea-02/movie-ticket-booking" className="ad-btn">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
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
                  <h5 className="text-uppercase">Flower Shop</h5>
                </div>
                <a href="https://github.com/arshea-02/flower-shop-frontend" className="ad-btn">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
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
                <a href="https://github.com/arshea-02/personal_portfolio" className="ad-btn">
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
