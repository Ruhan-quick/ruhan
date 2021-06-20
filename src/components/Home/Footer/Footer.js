import React from "react";
import ClientSideEmail from "../ClientSideEmail/ClientSideEmail";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div style={{ textAlign: "center" }} className="col mx-auto">
          <h1 style={{ color: "white", paddingTop: "30px" }}>
            <a href="https://github.com/Ruhan-quick" target="_blank">
              <FaGithub />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/ruhan-kabir/" target="_blank">
              <FaLinkedin />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.facebook.com/ruhanmdkr" target="_blank">
              <FaFacebook />
            </a>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mx-auto">
          <h5 style={{ textAlign: "center", color: "white", padding: "20px" }}>
            {" "}
            Designed and developed by S M Ruhan Kabir
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
