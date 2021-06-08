import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";
import Bounce from "react-reveal/Bounce";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";
import Particles from "./Particles";
import useWindowDimensions from "../../MyWorks/useWindowsDimention";
const Banner = () => {
  const { height, width } = useWindowDimensions();
  console.log(height, " ", width);
  //   const [smallScreen, setSmallScreen] = useState(false);
  let smallScreen = false;
  if (width < 700) {
    smallScreen = true;
  }
  return (
    <div className="bannerSize">
      <div className="row bgImage">
        <div className="col-lg-7 col-md-6 col-sm-12">
          {!smallScreen && (
            <div className="banner-text">
              <h1>
                <Bounce top cascade>
                  Yay, welcome, Peace be upon you.
                </Bounce>
              </h1>
              <h2>
                <Bounce left>
                  I am S M Ruhan Kabir, a junior web developer.
                </Bounce>
              </h2>
              <h3>
                <Bounce left>Recently, I'm open to work.</Bounce>
              </h3>
              <Bounce bottom>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1oua7qUtookOB6Gfr01Mcodh75kBLABr5/view?usp=sharing"
                >
                  {" "}
                  <motion.button
                    initial={{ y: 0 }}
                    animate={{ y: [10, -10] }}
                    transition={{ type: "spring", duration: 2, yoyo: Infinity }}
                    className="banner-button"
                  >
                    My Resume Here
                  </motion.button>
                </a>
              </Bounce>
            </div>
          )}
          {smallScreen && (
            <div className="banner-text">
              <h1>
                <Bounce top cascade>
                  Peace be upon you.
                </Bounce>
              </h1>
              <h2>
                <Bounce left>I am S M Ruhan Kabir.</Bounce>
              </h2>
              <h3>
                <Bounce left>Seeking job</Bounce>
              </h3>
              <Bounce bottom>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1oua7qUtookOB6Gfr01Mcodh75kBLABr5/view?usp=sharing"
                >
                  {" "}
                  <motion.button
                    initial={{ y: 0 }}
                    animate={{ y: [10, -10] }}
                    transition={{ type: "spring", duration: 2, yoyo: Infinity }}
                    className="banner-button"
                  >
                    Resume
                  </motion.button>
                </a>
              </Bounce>
            </div>
          )}
        </div>

        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="outer-box">
            <div className="inner-box">
              <Bounce top>
                <motion.img
                  initial={{ x: 0 }}
                  animate={{ x: [20, -20] }}
                  transition={{ type: "spring", duration: 2, yoyo: Infinity }}
                  className="banner-image"
                  src="https://i.ibb.co/RpBwSsT/Ruhan-fancy.png"
                  alt="Snow"
                  style={{ width: "80%" }}
                />
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
