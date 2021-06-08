import React from "react";
import ClientSideEmail from "../Home/ClientSideEmail/ClientSideEmail";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/Header/NavBar/NavBar";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <NavBar></NavBar>
      <h1 style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
        This is contact page.
      </h1>
      <div style={{ textAlign: "center" }} className="col mx-auto">
        <h1 style={{ color: "white", paddingTop: "30px" }}>
          <a href="https://github.com/Ruhan-quick" target="_blank">
            <FaGithub />
          </a>
          ........
          <a href="https://www.linkedin.com/in/ruhan-kabir/" target="_blank">
            <FaLinkedin />
          </a>
          ........
          <a href="https://www.facebook.com/ruhanmdkr" target="_blank">
            <FaFacebook />
          </a>
        </h1>
      </div>
      <div className="row" style={{ paddingBottom: "100px" }}>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <ClientSideEmail></ClientSideEmail>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img
            style={{ paddingTop: "40px" }}
            src="https://i.ibb.co/jHmzPVT/cle.png"
            alt=""
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
