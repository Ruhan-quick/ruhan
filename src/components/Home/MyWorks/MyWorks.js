import React, { useState } from "react";
import NavBar from "../Header/NavBar/NavBar";
import AllProjects from "./AllProjects/AllProjects";
import ProjectSlider from "./ProjectsSlider/ProjectSlider";
import ProjectSliderSmall from "./ProjectsSlider/ProjectsSliderSmall/ProjectSliderSmall";
import "./MyWorks.css";
import useWindowDimensions from "./useWindowsDimention";
import Footer from "../Footer/Footer";

const MyWorks = () => {
  const { height, width } = useWindowDimensions();
  console.log(height, " ", width);
  //   const [smallScreen, setSmallScreen] = useState(false);
  let smallScreen = false;
  if (width < 700) {
    smallScreen = true;
  }
  return (
    <div className="projects-bg">
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "15px",
          margin: 0,
        }}
      >
        MY WORKS
      </h1>
      {!smallScreen && <ProjectSlider></ProjectSlider>}
      {smallScreen && <ProjectSliderSmall></ProjectSliderSmall>}
      <NavBar></NavBar>

      <AllProjects></AllProjects>
      <Footer></Footer>
    </div>
  );
};

export default MyWorks;
