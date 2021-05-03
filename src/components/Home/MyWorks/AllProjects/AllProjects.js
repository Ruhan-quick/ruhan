import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import Bounce from "react-reveal/Bounce";
const AllProjects = () => {
  const projects = [
    {
      pName: "Explore Teams",
      pFunctions: {
        f1: "Lorem ipsum dolor sit.",
        f2: "Lorem ipsum dolor sit amet.",
        f3: "Lorem ipsum dolor sit amet consectetur.",
      },
      pImage:
        "https://i.ibb.co/NL2J85c/screenshot-604a41c550d9dc1c27ff9467-upbeat-hawking-366714-netlify-app-2021-05-03-14-14-45.png",
      pDetails: "",
      pLive: "",
      pGit: "",
      pTools: "",
    },
    {
      pName: "Fast Medicine",
      pFunctions: {
        f1: "Lorem ipsum dolor sit.",
        f2: "Lorem ipsum dolor sit amet.",
        f3: "Lorem ipsum dolor sit amet consectetur.",
      },
      pImage: "https://i.ibb.co/5106rzk/dev-support-2.png",
      pDetails: "",
      pLive: "",
      pGit: "",
      pTools: "",
    },
    {
      pName: "Fast Medicine",
      pFunctions: {
        f1: "Lorem ipsum dolor sit.",
        f2: "Lorem ipsum dolor sit amet.",
        f3: "Lorem ipsum dolor sit amet consectetur.",
      },
      pImage:
        "https://i.ibb.co/nDMYH9x/screenshot-604a41c550d9dc1c27ff9467-upbeat-hawking-366714-netlify-app-2021-05-03-14-14-45.png",
      pDetails: "",
      pLive: "",
      pGit: "",
      pTools: "",
    },
    {
      pName: "Fast Medicine",
      pFunctions: {
        f1: "Lorem ipsum dolor sit.",
        f2: "Lorem ipsum dolor sit amet.",
        f3: "Lorem ipsum dolor sit amet consectetur.",
      },
      pImage: "https://i.ibb.co/xsdbPDN/Fast-Medicine.png",
      pDetails: "",
      pLive: "",
      pGit: "",
      pTools: "",
    },
  ];
  return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ textAlign: "center", margin: "20px" }}>MERN PROJECTS</h1>
      <Bounce random cascade>
        <div className="row">
          {projects.map((ps) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ProjectCard
                pName={ps.pName}
                pImage={ps.pImage}
                pFunctions={ps.pFunctions}
              ></ProjectCard>
            </div>
          ))}
        </div>
      </Bounce>
    </div>
  );
};

export default AllProjects;
