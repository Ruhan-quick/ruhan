import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({ pName, pImage, pFunctions }) => {
  return (
    <div className="on-hover">
      <div className="project-card">
        <img
          className="project-card-image"
          style={{ width: "100%" }}
          src={pImage}
          alt=""
        />
        <h1>Project Card{pName}</h1>
        <h5>{pFunctions.f1}</h5>
        <h5>{pFunctions.f2}</h5>
        <h5>{pFunctions.f3}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
