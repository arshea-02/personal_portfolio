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
            <p>As a motivated individual with a strong passion for web development and Python programming, I bring a proven ability to collaborate effectively within teams and communicate complex ideas with clarity. My experience includes working on diverse academic projects, internships and extracurricular initiatives, where I honed my problem-solving skills and developed a strong technical foundation. Beyond my academic and professional endeavors, I have also volunteered for various social improvement programs, where I engaged with individuals from diverse backgrounds and contributed to meaningful change.</p>
            <p>Committed to continuous learning and professional growth, I am motivated to drive success and deliver value in the tech industry of Pakistan.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
