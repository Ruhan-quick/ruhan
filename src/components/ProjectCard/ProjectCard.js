import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ pName, pImage, pFunctions, pLive }) => {
  return (
    <div className="project-card">
      <img
        className="project-card-image"
        style={{ width: "100%" }}
        src={pImage}
        alt=""
      />
      <h1 style={{ textAlign: "center" }}>{pName}</h1>
      <div>
        <h5 style={{ textAlign: "left" }}>{pFunctions.f1}</h5>
        <h5 style={{ textAlign: "right" }}>{pFunctions.f2}</h5>
        <h5 style={{ textAlign: "left" }}>{pFunctions.f3}</h5>
      </div>
      <div style={{ marginTop: "25px" }} className="row">
        <div style={{ textAlign: "left" }} className="col-4">
          <a href={pLive} target="_blank">
            <button className="btn btn-info">Live Site</button>
          </a>
        </div>
        <div style={{ textAlign: "center" }} className="col-4">
          <button className="btn btn-info">Github</button>
        </div>
        <div style={{ textAlign: "right" }} className="col-4">
          <button className="btn btn-info">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
