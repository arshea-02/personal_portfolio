import React from "react";
import Typewriter from 'typewriter-effect'
import Resume from "../../assests/docs/Arshea Atif Resume.pdf";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>Greetings Noble Visitors!</h1>
          <div className="intro">
            <p>
              <Typewriter
                options={{
                  strings: [
                    "A most heartfelt welcome to my humble page. I am a devoted craftsperson of the digital realm. With particular mastery in the craft of the MERN stack, I weave code and innovation to bring forth creations both functional and fair. Pray, linger awhile and discover the fruits of my labour.",
                  ],
                  autoStart: true,
                  loop: false,
                  delay: 30,
                  deleteSpeed: 100000,
                }}
              />
            </p>
          </div>
          <div className="home-btns">
            <button className="btn btn-hire">Hire Me</button>
            <a href={Resume} className="btn btn-cv">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
