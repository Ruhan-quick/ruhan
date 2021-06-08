import React from "react";
import ProjectCard from "../../../ProjectCard/ProjectCard";
import Bounce from "react-reveal/Bounce";
const AllProjects = () => {
  const projects = [
    {
      pName: "Explore Teams",
      pFunctions: {
        f1: "Multi teams portfolio",
        f2: "React router, Material-UI",
        f3: "Calls api and dynamically shoes data.",
      },

      pImage:
        "https://i.ibb.co/NL2J85c/screenshot-604a41c550d9dc1c27ff9467-upbeat-hawking-366714-netlify-app-2021-05-03-14-14-45.png",
      pDetails: "",
      pLive:
        "https://604a41c550d9dc1c27ff9467--upbeat-hawking-366714.netlify.app/",
      pGit: "https://github.com/Ruhan-quick/Explore-Teams",
      pTools: "",
    },
    {
      pName: "Dev-Support",
      pFunctions: {
        f1: "Instan't support request.",
        f2: "MongoDB, Express, React, Node",
        f3: "Secured Admin panel to manage services",
      },
      pImage: "https://i.ibb.co/5106rzk/dev-support-2.png",
      pDetails: "",
      pLive: "https://dev-support-d0da3.web.app/",
      pGit: "",
      pTools: "",
    },
    {
      pName: "Fast Medicine",
      pFunctions: {
        f1: "Safe Medicine order",
        f2: "Firebase, MongoDB, React",
        f3: "Admin panel to add/delete medicines.",
      },

      pImage: "https://i.ibb.co/xsdbPDN/Fast-Medicine.png",
      pDetails: "",
      pLive: "https://fastmedicine-2f70a.web.app/",
      pGit: "https://github.com/Ruhan-quick/fast-medicine-client",
      pTools: "",
    },
    {
      pName: "Hi-Coder",
      pFunctions: {
        f1: "Just frontend design",
        f2: "React based",
        f3: "Functional component based decoration",
      },
      pImage:
        "https://i.ibb.co/Thr6bKD/screenshot-vibrant-dubinsky-37ab5f-netlify-app-2021-06-04-11-24-43.png",
      pDetails: "",
      pLive: "https://vibrant-dubinsky-37ab5f.netlify.app/",
      pGit: "https://github.com/Ruhan-quick/hi-coder-clone-client",
      pTools: "",
    },
    {
      pName: "Trek-Tracker",
      pFunctions: {
        f1: "Routing Routs of journey",
        f2: "React based",
        f3: "Functional component based decoration",
      },
      pImage:
        "https://i.ibb.co/xsvb9fr/screenshot-localhost-3000-2021-06-04-11-40-39.png",
      pDetails: "",
      pLive: "https://react-auth-ruhan-quick.web.app/",
      pGit: "https://github.com/Ruhan-quick/trek-tracker",
      pTools: "",
    },
  ];
  return (
    <div style={{ margin: "40px", textAlign: "center" }}>
      <h1
        style={{
          margin: "20px",
          color: "white",
          //   textShadow: "3px 5px 2px #474747",
        }}
      >
        MERN PROJECTS
      </h1>
      <h4 style={{ margin: "20px", color: "white" }}>
        These are some of my projects done with React
      </h4>
      <Bounce random cascade>
        <div className="row">
          {projects.map((ps) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ProjectCard
                pName={ps.pName}
                pImage={ps.pImage}
                pFunctions={ps.pFunctions}
                pLive={ps.pLive}
                pGit={ps.pGit}
              ></ProjectCard>
            </div>
          ))}
        </div>
      </Bounce>
    </div>
  );
};

export default AllProjects;
