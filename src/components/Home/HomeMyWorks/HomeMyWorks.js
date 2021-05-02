import React from "react";
import useWindowDimensions from "../MyWorks/useWindowsDimention";
import ProjectSlider from "../MyWorks/ProjectsSlider/ProjectSlider";
import ProjectSliderSmall from "../MyWorks/ProjectsSlider/ProjectsSliderSmall/ProjectSliderSmall";
import "./HomeMyWorks.css";
const HomeMyWorks = () => {
  const { height, width } = useWindowDimensions();
  console.log(height, " ", width);
  //   const [smallScreen, setSmallScreen] = useState(false);
  let smallScreen = false;
  if (width < 600) {
    smallScreen = true;
  }
  return (
    <div className="home-my-works">
      {!smallScreen && <ProjectSlider></ProjectSlider>}
      {smallScreen && <ProjectSliderSmall></ProjectSliderSmall>}
    </div>
  );
};

export default HomeMyWorks;