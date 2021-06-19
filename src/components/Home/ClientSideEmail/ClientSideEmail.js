import React from "react";
import emailjs from "emailjs-com";

const ClientSideEmail = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bc9nrjq",
        "template_qn9jmqo",
        e.target,
        "user_C5lBmBeGsYCTZKESjgVjA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-10 form-group mx-auto">
              <label style={{ color: "white" }} htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                className="form-control bg-transparent text-white"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-10 text-info form-group mx-auto">
              <label style={{ color: "white" }} htmlFor="name">
                Email:
              </label>
              <input
                type="email"
                className="form-control bg-transparent text-white"
                placeholder="Enter email"
                name="email"
              />
            </div>

            <div className="col-10 form-group mx-auto">
              <label style={{ color: "white" }} htmlFor="name">
                Subject
              </label>
              <input
                type="text"
                className="form-control bg-transparent text-white"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-10 form-group mx-auto">
              <label style={{ color: "white" }} htmlFor="name">
                Message:
              </label>
              <textarea
                style={{ height: "80px" }}
                name="message"
                id=""
                cols="30"
                rows="10"
                className="form-control bg-transparent text-white"
              ></textarea>
            </div>
            <div className="col-10 form-group pt-2 mx-auto">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-info bg-transparent text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientSideEmail;
