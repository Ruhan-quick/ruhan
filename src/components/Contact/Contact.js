import React from "react";
import ClientSideEmail from "../Home/ClientSideEmail/ClientSideEmail";
import NavBar from "../Home/Header/NavBar/NavBar";

const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>This is contact page.</h1>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <ClientSideEmail></ClientSideEmail>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12"></div>
      </div>
    </div>
  );
};

export default Contact;
