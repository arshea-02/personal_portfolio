import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsClipboard2Fill } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-scroll";

import "./menu.css";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="profile-pic">
            <img src="arshea_atif.jpg" alt="pp" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  offset={-100}
                  duration={500}
                  smooth={true}
                >
                  <GoHomeFill color="white" size="25px" />
                  Home
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="edu"
                  spy={true}
                  offset={-100}
                  duration={500}
                  smooth={true}
                >
                  <RiGraduationCapFill color="white" size="25px" />
                  Education
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="skill"
                  spy={true}
                  offset={-100}
                  duration={500}
                  smooth={true}
                >
                  <BsFillLaptopFill color="white" size="25px" />
                  Skills Set
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  offset={-100}
                  duration={500}
                  smooth={true}
                >
                  <BsFillLightbulbFill color="white" size="25px" />
                  Projects
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="exp"
                  spy={true}
                  offset={-100}
                  duration={500}
                  smooth={true}
                >
                  <BsClipboard2Fill color="white" size="25px" />
                  Experience
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="certification"
                  spy={true}
                  offset={-100}
                  duration={500}
                  smooth={true}
                >
                  <FaCertificate color="white" size="25px" />
                  Certifications
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  offset={-100}
                  duration={500}
                  smooth={true}
                >
                  <BsFillTelephoneFill color="white" size="25px" />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item align">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                offset={-100}
                duration={500}
                smooth={true}
              >
                <GoHomeFill color="white" title="Home Page" size="25px" />
              </Link>
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <Link
                to="edu"
                spy={true}
                offset={-100}
                duration={500}
                smooth={true}
              >
                <RiGraduationCapFill
                  color="white"
                  title="Education"
                  size="25px"
                />
              </Link>
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <Link
                to="skill"
                spy={true}
                offset={-100}
                duration={500}
                smooth={true}
              >
                <BsFillLaptopFill
                  color="white"
                  title="Skills Set"
                  size="25px"
                />
              </Link>
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <Link
                to="project"
                spy={true}
                offset={-100}
                duration={500}
                smooth={true}
              >
                <BsFillLightbulbFill
                  color="white"
                  title="Projects"
                  size="25px"
                />
              </Link>
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <Link
                to="exp"
                spy={true}
                offset={-100}
                duration={500}
                smooth={true}
              >
                <BsClipboard2Fill
                  color="white"
                  title="Work Experience"
                  size="25px"
                />
              </Link>
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <Link
                to="certification"
                spy={true}
                offset={-100}
                duration={500}
                smooth={true}
              >
                <FaCertificate
                  color="white"
                  title="certifications"
                  size="25px"
                />
              </Link>
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                offset={-100}
                duration={500}
                smooth={true}
              >
                <BsFillTelephoneFill
                  color="white"
                  title="Contact Info"
                  size="25px"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
