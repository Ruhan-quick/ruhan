import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";
import Bounce from "react-reveal/Bounce";
const Banner = () => {
  return (
    <div>
      <div className="row bgImage">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div className="banner-text">
            <h1>
              <Bounce top cascade>
                Wow you entered my website.
              </Bounce>
            </h1>
            <h2>
              <Bounce left>
                I am S M Ruhan Kabir, a junior web developer.
              </Bounce>
            </h2>
            <h3>
              <Bounce left>You can call by the short name Ruhan</Bounce>
            </h3>
            <Bounce bottom>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1YkJ4WiLJ8SgoigUwHKEoA2qxAxTjJHmA/view?usp=sharing"
              >
                {" "}
                <button className="banner-button">My Resume Here</button>
              </a>
            </Bounce>
          </div>
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
