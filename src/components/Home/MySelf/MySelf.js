import React, { useEffect, useState } from "react";
import "./MySelf.css";
import MyTimeline from "./MyTimeline/MyTimeline";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";
import Typewriter from "typewriter-effect";
const MySelf = () => {
  const [state] = useState({
    title: "Hi",
    titleTwo: "I'm",
    titleThree: "Code&Coding",
  });
  return (
    <div className="my-self" style={{ textAlign: "center", color: "white" }}>
      <div className="row">
        <div className="col-10 mx-auto glass-test">
          <div className="glass-body">
            <motion.h1
              style={{ padding: "20px" }}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2] }}
              transition={{
                type: "tween",

                duration: 2,
                yoyo: Infinity,
              }}
              className="myself-head"
            >
              MY SELF
            </motion.h1>
            <div className="type-intro">
              <h3 id="myself-head-2" style={{ marginBottom: "20px" }}>
                <div className="text">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      strings: [
                        "I'm a Youtuber",
                        "I'm a Web Developer",
                        "I'm an Entrepreneur",
                        "I'm a Tech Enthusiast",
                      ],
                    }}
                  />
                </div>
              </h3>
            </div>

            <p
              className="my-text"
              style={{ fontSize: "20px", marginBottom: "60px" }}
            >
              <Bounce left opposite cascade>
                My name is S M Ruhan Kabir. I am a student and I’m studying
                Computer Science & Engineering in a University since 2019.
                Recently I got passionate about web development. I worked hard
                during the last 5 months with the mission to get 1-year
                equivalent experience within 6 months so that I can get a job in
                this pandemic. I have done more than 13 different project on
                web-development. Moreover, I am a tech enthusiastic person. I
                really like learning new creative skills. I love photography,
                videography, reading, writing, drawing, traveling, and many
                more.
              </Bounce>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-11 mx-auto">
          <MyTimeline></MyTimeline>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default MySelf;
