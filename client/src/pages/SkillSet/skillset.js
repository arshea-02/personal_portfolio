import React from "react";
import "./skillset.css";
import { SkillSetList } from "../../utils/SkillSetList";

const skillset = () => {
  return (
    <>
      <div id="skill" className="container skillset">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Skill Set</h2>
        <hr />
        <p className="pb-3 text-center">
          Through different courses throughout my degree, internships and short courses, I gained the following skills. Having familiarity with below mentioned tools necessary for web development, I am always eager to learn new technologies and tools to enhance my skill set.
        </p>

        <div className="row">
          {SkillSetList.map((skill) => (
            <div key={skill._id} className="col-md-4">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <skill.icon className="skill-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{skill.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default skillset;
