import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiGraduationCapFill } from "react-icons/ri";
import "./education.css";

const Education = () => {
  return (
    <>
      <div id="edu" className="container education">
        <h2 className="col-12 mt-2 mb-1 text-center text-uppercase">
          Education Background
        </h2>
        <VerticalTimeline className="vertical-timeline-container"> 
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#323e4f", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #323e4f" }}
            date="2021-2025"
            iconStyle={{ background: "#323e4f", color: "#fff" }}
            icon={<RiGraduationCapFill />}
          >
            <h3>BS Computer Science</h3>
            <h5>Kinnaird College for Women Lahore, Pakistan</h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
