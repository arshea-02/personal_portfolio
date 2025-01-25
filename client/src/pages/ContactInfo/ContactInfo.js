import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import "./contact_info.css";

const ContactInfo = () => {
  return (
    <>
      <div className="container contact">
        <h2>CONTACT ME</h2>
        <div className="card1 d-flex card border-0">
          <h2>
            <a href="https://www.linkedin.com/in/arshea-atif-6a26b5248">
              <FaLinkedin color="#323e4f" className="m-3" />
            </a>
            <a href="https://github.com/arshea-02">
              <FaGithub color="#323e4f" className="m-3" />
            </a>
          </h2>
          <div className="line" />
          <small className="or text-center">OR</small>
          <div className="line" />

          <form className="form m-3">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="mb-3"
            />
            <textarea
              type="text"
              name="msg"
              placeholder="Message..."
              className="mb-3"
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
