import React from "react";
import ProgressBars from "./ProgressBars/ProgressBars";
import Bouncer from "react-reveal/Bounce";
import "./EarnedSkill.css";
const EarnedSkills = () => {
  return (
    <div className="earned-skills">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Earned Skills
      </h1>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h1 style={{ textAlign: "center" }}>Left side</h1>
          <Bouncer left>
            <ProgressBars></ProgressBars>
          </Bouncer>
        </div>
        <div
          style={{ marginBottom: "25px", padding: "60px" }}
          className="col-lg-6 col-sm-12"
        >
          <img
            src="https://i.ibb.co/4KSvNmz/do-any-node-js-or-mern-stack-job.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EarnedSkills;
