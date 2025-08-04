import React from "react";
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 about-img">
            <img src="arshea_atif.jpg" alt="Picture" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              I am a fresh graduate with an interest in web development
              particularly MERN. Through internships, college projects and
              personal projects, I have sharpened my skills to collaborate
              within teams and communicate complex ideas with clarity. Through
              these projects, I polished my problem-solving skills and developed
              a strong technical foundation. Stepping into professional life I
              look forward to learning and growing more in the field of web
              development. In future my goal is to explore fields like AI,
              Blockchain and crypto, and to provide ground-breaking solutions to
              real-world problems.
            </p>
            <p>
              Beyond my academic and professional endeavors, I have volunteered
              for various social improvement programs, where I engaged with
              individuals from diverse backgrounds and contributed to meaningful
              change. I volunteered to help set up Dastarkhawan for NGO, during
              the Ramadan of 2023. Moreover, in the last quarter of 2024, me and
              my team voluteered to give technical education to the orphaned
              children, where we conducted weekly sessions to educate the
              children about the easy-to-use softwares for freelancing. As an advocate for social justice, I am dedicated
              to making a positive impact in the world through my work and
              contributions.
            </p>
            <p>
              Committed to continuous learning and professional growth, I am
              motivated to drive success and deliver value in the tech industry
              of Pakistan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
