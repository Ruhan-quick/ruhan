import React from "react";
import ProgressBars from "./ProgressBars/ProgressBars";
import Bouncer from "react-reveal/Bounce";
const EarnedSkills = () => {
  return (
    <div>
      <h1>Earned Skills</h1>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h1>Left side</h1>
          <Bouncer left>
            <ProgressBars></ProgressBars>
          </Bouncer>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1>right side</h1>
        </div>
      </div>
    </div>
  );
};

export default EarnedSkills;
