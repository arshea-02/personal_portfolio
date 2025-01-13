import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsClipboard2Fill } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

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
                <GoHomeFill color="white" size="25px" />
                Home
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <BsClipboard2Fill color="white" size="25px" />
                Experience
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <BsFillLaptopFill color="white" size="25px" />
                Skills Set
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <RiGraduationCapFill color="white" size="25px" />
                Education
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <BsFillLightbulbFill color="white" size="25px" />
                Projects
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaCertificate color="white" size="25px" />
                Certifications
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <BsFillTelephoneFill color="white" size="25px" />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item align">
            <div className="nav-link">
              <GoHomeFill color="white" title="Home Page" size="25px" />
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <BsClipboard2Fill
                color="white"
                title="Work Experience"
                size="25px"
              />
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <BsFillLaptopFill color="white" title="Skills Set" size="25px" />
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <RiGraduationCapFill
                color="white"
                title="Education"
                size="25px"
              />
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <BsFillLightbulbFill color="white" title="Projects" size="25px" />
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <FaCertificate color="white" title="certifications" size="25px" />
            </div>
          </div>
          <div className="nav-item align">
            <div className="nav-link">
              <BsFillTelephoneFill
                color="white"
                title="Contact Info"
                size="25px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
