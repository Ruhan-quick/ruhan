import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="row bgImage">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div className="banner-text">
            <h1>Wow you entered my website.</h1>
            <h2>I am S M Ruhan Kabir, a junior web developer.</h2>
            <h3>You can call by the short name Ruhan</h3>
            <button className="banner-button">Wanna Know More</button>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="outer-box">
            <div className="inner-box">
              <motion.img
                initial={{ x: 0 }}
                animate={{ x: [20, -20] }}
                transition={{ type: "spring", duration: 2, yoyo: Infinity }}
                className="banner-image"
                src="https://i.ibb.co/RpBwSsT/Ruhan-fancy.png"
                alt="Snow"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
