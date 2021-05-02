import React, { useState } from "react";
import NavBar from "../Header/NavBar/NavBar";
import AllProjects from "./AllProjects/AllProjects";
import ProjectSlider from "./ProjectsSlider/ProjectSlider";
import ProjectSliderSmall from "./ProjectsSlider/ProjectsSliderSmall/ProjectSliderSmall";

import useWindowDimensions from "./useWindowsDimention";

const MyWorks = () => {
  const { height, width } = useWindowDimensions();
  console.log(height, " ", width);
  //   const [smallScreen, setSmallScreen] = useState(false);
  let smallScreen = false;
  if (width < 600) {
    smallScreen = true;
  }
  return (
    <div>
      {!smallScreen && <ProjectSlider></ProjectSlider>}
      {smallScreen && <ProjectSliderSmall></ProjectSliderSmall>}
      <NavBar></NavBar>
      <AllProjects></AllProjects>
    </div>
  );
};

export default MyWorks;
