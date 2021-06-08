import React from "react";
import useWindowDimensions from "../MyWorks/useWindowsDimention";
import ProjectSlider from "../MyWorks/ProjectsSlider/ProjectSlider";
import ProjectSliderSmall from "../MyWorks/ProjectsSlider/ProjectsSliderSmall/ProjectSliderSmall";
import "./HomeMyWorks.css";
import { Link } from "react-router-dom";
const HomeMyWorks = () => {
  const { height, width } = useWindowDimensions();
  console.log(height, " ", width);
  //const [smallScreen, setSmallScreen] = useState(false);
  let smallScreen = false;
  if (width < 600) {
    smallScreen = true;
  }
  return (
    <div className="home-my-works" style={{ textAlign: "center" }}>
      <h1 style={{ color: "white", paddingTop: "30px" }}>MY WORKS</h1>
      {!smallScreen && <ProjectSlider></ProjectSlider>}
      {smallScreen && <ProjectSliderSmall></ProjectSliderSmall>}
      <a as={Link} to={"/myWorks"} href="/myWorks">
        <button style={{ marginBottom: "10px" }} class="btn btn-warning">
          Show Me All
        </button>
      </a>
    </div>
  );
};

export default HomeMyWorks;
