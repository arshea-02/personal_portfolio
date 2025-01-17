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
      <div className="container education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Background
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#c7d4e5", color: "#323e4f" }}
            contentArrowStyle={{ borderRight: "7px solid #c7d4e5" }}
            date="2021-2025"
            iconStyle={{ background: "#323e4f", color: "#fff" }}
            icon={<RiGraduationCapFill />}
          >
            <h3>
              BS Computer Science
            </h3>
            <h5>
              Kinnaird College for Women Lahore, Pakistan
            </h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
