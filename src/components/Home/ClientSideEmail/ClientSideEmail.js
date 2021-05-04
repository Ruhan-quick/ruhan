import React from "react";
import emailjs from "emailjs-com";

const ClientSideEmail = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_nsshs0g",
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
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-10 text-info pt-2 form-group mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="col-10 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-10 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-10 form-group pt-2 mx-auto">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="form-control"
              ></textarea>
            </div>
            <div className="col-10 form-group pt-2 mx-auto">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-info"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientSideEmail;
