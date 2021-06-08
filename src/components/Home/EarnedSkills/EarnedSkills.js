import React from "react";
import ProgressBars from "./ProgressBars/ProgressBars";
import Bouncer from "react-reveal/Bounce";
import "./EarnedSkill.css";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";
const EarnedSkills = () => {
  const skills = [
    {
      sname: "Html",
      img: "https://i.ibb.co/9ggYtgp/html.png",
      imp: "",
    },
    {
      sname: "React",
      img: "https://i.ibb.co/pbYjwG3/react.png",
      imp: "",
    },
    {
      sname: "Bootstrap",
      img: "https://i.ibb.co/CH1C330/bootstrap.png",
      imp: "",
    },
    {
      sname: "JavaScript",
      img: "https://i.ibb.co/72J7RpZ/javascript.png",
      imp: "",
    },
    {
      sname: "SCSS",
      img: "https://i.ibb.co/pw0km56/scss.png",
      imp: "",
    },
    {
      sname: "Material-UI",
      img: "https://i.ibb.co/wLWN54v/logo.png",
      imp: "",
    },
  ];
  const skills2 = [
    {
      sname: "NodeJs",
      img:
        "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
      imp: "",
    },
    {
      sname: "CSS",
      img: "https://i.ibb.co/F4jFp3G/css.png",
      imp: "",
    },
    {
      sname: "MongoDB",
      img: "https://i.ibb.co/Pm9qQSG/mongodb-logo.png",
      imp: "",
    },
  ];
  return (
    <div className="earned-skills">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "white",
          marginTop: "40px",
        }}
      >
        EARNED SKILLS
      </h1>
      <Bounce left>
        <div style={{ textAlign: "center" }} className="row p-3">
          {skills.map((sk) => (
            <div className="col-lg-2 col-md-4, col-sm-6">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [10, -10] }}
                transition={{
                  type: "spring",
                  duration: 2,
                  yoyo: Infinity,
                  delay: 1,
                }}
              >
                <img
                  style={{ height: "100px", width: "100px" }}
                  src={sk.img}
                  alt=""
                />
                <h3 style={{ color: "white" }}>{sk.sname}</h3>
              </motion.div>
            </div>
          ))}
        </div>
      </Bounce>
      <div style={{ textAlign: "center" }} className="row p-3">
        {skills2.map((sk) => (
          <div className="col-lg-4">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [10, -10] }}
              transition={{ type: "spring", duration: 2, yoyo: Infinity }}
            >
              <img
                style={{ height: "100px", width: "120px" }}
                src={sk.img}
                alt=""
              />
              <h3 style={{ color: "white" }}>{sk.sname}</h3>
            </motion.div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default EarnedSkills;
