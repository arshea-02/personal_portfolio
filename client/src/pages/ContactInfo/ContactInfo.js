import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

import "./contact_info.css";

const ContactForm = () => {
  const formspreeId = process.env.REACT_APP_FORMSPREE_ID;
  const [state, handleSubmit] = useForm({ formspreeId });

  if (state.succeeded) {
    return <p>Email Sent!☺</p>;
  }
  return (
    <form className="form m-3" onSubmit={handleSubmit}>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter Your Email"
        className="mb-3"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="Message..."
        className="mb-3"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="btn btn-primary"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
};

const ContactInfo = () => {
  const linkedInURL = process.env.REACT_APP_LINKEDIN_URL;
  const githubURL = process.env.REACT_APP_GITHUB_URL;

  return (
    <>
      <div id="contact" className="container contact">
        <h2>CONTACT ME</h2>
        <div className="card1 d-flex card border-0">
          <h2>
            <a href={linkedInURL} target="_blank" rel="noreferrer">
              <FaLinkedin color="#323e4f" className="m-3" />
            </a>
            <a href={githubURL} target="_blank" rel="noreferrer">
              <FaGithub color="#323e4f" className="m-3" />
            </a>
          </h2>
          <div className="line" />
          <small className="or text-center">OR</small>
          <div className="line" />

          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
