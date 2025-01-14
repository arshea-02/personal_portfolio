import React from "react";

import "./about.css";
const AboutPage = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 about-img">
            <img src="Me_IEEE.jpg" alt="Profile Pic" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem adipisci, quis vitae sapiente explicabo accusantium
              quibusdam molestiae sequi quod minima harum laudantium, ex quo
              facere assumenda in nihil? Incidunt, perferendis?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
