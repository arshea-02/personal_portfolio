import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assests/docs/Arshea Atif Resume.pdf";
import FullStack from "../../assests/docs/Arshea Atif Resume Full Stack.pdf";
import "./home.css";

const HomePage = () => {
  const phoneNo = process.env.REACT_APP_PHONE_NO;
  const whatsAppURL = `${process.env.REACT_APP_WHATSAPP_URL}${phoneNo}`;
  return (
    <>
      <div id="home" className="container-fluid home-container">
        <div className="container home-content">
          <div className="row home-row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 home-text">
              <h1>Welcome to Arshea Atif's Website</h1>
              <div className="intro">
                <p>
                  <Typewriter
                    options={{
                      strings: [
                        "Hello dear visitors!👋. If you are here, you probably want to know about my work. A brief intro: I have mostly worked in MERN and aspire to enter my professional life as a web developer. However, I have a keen interest for AI and blockchain. Anyways, sit back, grab a cup of coffee (or tea or whatever) and go through my portfolio with a calm demeanor...Please :)",
                      ],
                      autoStart: true,
                      loop: false,
                      delay: 20,
                      deleteSpeed: 100000,
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 my-img">
              <img src="Me_IEEE.png" alt="Profile Pic" />
            </div>
          </div>
          <div className="home-btns">
            <a
              className="btn btn-hire"
              href={whatsAppURL}
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a
              className="btn btn-cv"
              href={FullStack}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
