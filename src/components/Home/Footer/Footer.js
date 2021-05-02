import React from "react";
import ClientSideEmail from "../ClientSideEmail/ClientSideEmail";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div
        style={{
          textAlign: "center",
          textDecoration: "none",
          listStyle: "none",
        }}
        className="row"
      >
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ClientSideEmail></ClientSideEmail>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1>Your one message can help me a lot.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
