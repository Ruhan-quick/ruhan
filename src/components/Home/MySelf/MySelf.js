import React, { useEffect, useState } from 'react';
import './MySelf.css';
import MyTimeline from './MyTimeline/MyTimeline';
import { motion } from 'framer-motion';
import Bounce from 'react-reveal/Bounce';
import Typewriter from 'typewriter-effect';
const MySelf = () => {
  const [state] = useState({
    title: 'Hi',
    titleTwo: "I'm",
    titleThree: 'Code&Coding',
  });
  return (
    <div className="my-self" style={{ textAlign: 'center', color: 'white' }}>
      <div className="row">
        <div className="col-10 mx-auto glass-test">
          <div className="glass-body">
            <motion.h1
              style={{ padding: '20px' }}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2] }}
              transition={{
                type: 'tween',

                duration: 2,
                yoyo: Infinity,
              }}
              className="myself-head"
            >
              MY SELF
            </motion.h1>
            <div className="type-intro">
              <h3 id="myself-head-2" style={{ marginBottom: '20px' }}>
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
              style={{ fontSize: '20px', marginBottom: '60px' }}
            >
              <Bounce left opposite cascade>
                {/* My name is S M Ruhan Kabir. I am a student and I’m studying
                Computer Science & Engineering in Rajshahi University of Engineering & Technology since 2019.
                I am a MERN stack Developer. I have done more than 15 different projects on
                web development.I am currently working as a backend developer in a tech company since June 2021. Moreover, I am a tech enthusiastic person. I
                really like learning new creative skills. I love photography,
                videography, reading, writing, drawing, traveling, and many */}
                {/* more. */}
                I'm an experienced MERN stack developer with a passion for
                building innovative web applications. With 3 years of
                experience, I specialize in MongoDB, Express.js, React, and
                Node.js. I'm a problem-solver who values clean code and
                collaboration. I'm eager to learn and stay updated with the
                latest technologies. Let's create impactful projects together!
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
