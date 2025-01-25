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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, animi
          atque. Molestiae, autem. Ullam corporis blanditiis quasi enim, nam,
          numquam vitae animi quibusdam asperiores aliquam quas voluptatibus
          commodi. Eaque, nulla.
        </p>

        <div className="row">
          {SkillSetList.map((skill) => (
            <div key={skill._id} className="col-md-3">
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
