import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsClipboard2Fill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import "./workexp.css";

const WorkExperience = () => {
  return (
    <>
      <div className="container work">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#323e4f", color: "#323e4f" }}
            contentArrowStyle={{ borderRight: "7px solid #323e4f" }}
            date="June 2024-Aug 2024"
            iconStyle={{ background: "#323e4f", color: "#fff" }}
            icon={<RiReactjsFill />}
          >
            <h3 className="vertical-timeline-element-title">SE Internship</h3>
            <h5 className="vertical-timeline-element-subtitle">
              Devsinc Lahore, Pakistan
            </h5>
            <p className="timeline-content">
              MERN Internship, User Centric Design, Best Practices in SE,
              Project Management, Code Optimisation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#323e4f", color: "#323e4f" }}
            contentArrowStyle={{ borderRight: "7px solid #323e4f" }}
            date="Nov 2023-Jul 2024"
            iconStyle={{ background: "#323e4f", color: "#fff" }}
            icon={<FaThumbsUp />}
          >
            <h3 className="vertical-timeline-element-title">
              Social Media Manager
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Artificial Intelligence Community of Pakistan
            </h5>
            <p className="timeline-content">
              Content Writing, SEO, Digital Marketing, Team Work, Leadrship
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#323e4f", color: "#323e4f" }}
            contentArrowStyle={{ borderRight: "7px solid #323e4f" }}
            date="Aug 2023-Sep 2023"
            iconStyle={{ background: "#323e4f", color: "#fff" }}
            icon={<SiCplusplus />}
          >
            <h3 className="vertical-timeline-element-title">
              C++ Online Internship
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              CodSoft, Online
            </h5>
            <p className="timeline-content">Logic Building, Problem Solving</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExperience;
