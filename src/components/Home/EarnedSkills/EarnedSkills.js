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
        <div style={{ textAlign: "center" }} className="col-lg-6 col-sm-12">
          <Bouncer left>
            <ProgressBars></ProgressBars>
          </Bouncer>
        </div>
        <div style={{ textAlign: "center" }} className="col-lg-6 col-sm-12">
          <img
            className="img-fluid"
            src="https://nandankumar.in/wp-content/uploads/2020/09/website-development-company-in-agra.gif"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default EarnedSkills;
