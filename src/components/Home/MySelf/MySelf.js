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
        <div className="col-9 mx-auto glass-test">
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
              My Self
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
                        "I'am a Web Developer",
                        "I'm a Tech Enthusiast",
                      ],
                    }}
                  />
                </div>
              </h3>
            </div>

            <p style={{ fontSize: "20px", marginBottom: "60px" }}>
              <Bounce left opposite cascade>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                eaque temporibus illum excepturi molestiae assumenda repellendus
                blanditiis facere rem vitae doloremque nemo commodi rerum
                reprehenderit nesciunt sunt suscipit dignissimos voluptatibus
                voluptatem? Repellat veritatis totam quidem expedita fuga nobis
                obcaecati repudiandae consequuntur dolore dignissimos.
                Blanditiis, a cupiditate nam modi iure illo in ut cumque alias
                tenetur delectus voluptates facilis harum optio natus sapiente
                sequi inventore, quaerat vero labore, facere id. Ullam fuga
              </Bounce>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto">
          <MyTimeline></MyTimeline>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default MySelf;
