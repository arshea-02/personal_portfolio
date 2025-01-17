import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaPython } from "react-icons/fa6";
import { IoLanguageOutline } from "react-icons/io5";
import "./certifications.css";

const certification = () => {
  return (
    <>
      <div className="container certificates">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certifications
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#323e4f", color: "#323e4f" }}
            contentArrowStyle={{ borderRight: "7px solid #323e4f" }}
            date="May 2023"
            iconStyle={{ background: "#323e4f", color: "#fff" }}
            icon={<FaPython />}
          >
            <h3 className="vertical-timeline-element-title">
              Python Elementry Course
            </h3>
            <h5 className="vertical-timeline-element-subtitle">AICP, Online</h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#323e4f", color: "#323e4f" }}
            contentArrowStyle={{ borderRight: "7px solid #323e4f" }}
            date="Jul 2019-Aug 2019"
            iconStyle={{ background: "#323e4f", color: "#fff" }}
            icon={<IoLanguageOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              Chinese Language Short Course
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              NUML, Pakistan
            </h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default certification;
