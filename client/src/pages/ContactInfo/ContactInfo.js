import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import "./contact_info.css";

const ContactInfo = () => {
  return (
    <>
      <div className="container contact">
        <h2>Contact Me</h2>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xs-4 col-sm-12">
            <a href="#" className="card border-0">
              <div className="card-content">
                <div className="media d-flex justify-content-center">
                  <FaLinkedin className="contact-icon" />
                  <div className="contact-name">
                    <p className="contact-link">Arshea Atif</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-lg-3 col-xs-3 col-sm-12">
            <a href="#" className="card border-0">
              <div className="card-content">
                <div className="media d-flex justify-content-center">
                    <FaGithub className="contact-icon"/>
                  <div className="contact-name">
                    <p className="contact-link">
                      arshea-02
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-4 col-xs-4 col-sm-12">
            <a href="#" className="card border-0">
              <div className="card-content">
                <div className="media d-flex justify-content-center">
                    <BiLogoGmail className="contact-icon"/>
                  <div className="contact-name">
                    <p className="contact-link">
                      arsheaatif04@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
