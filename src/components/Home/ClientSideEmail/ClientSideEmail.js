import React from "react";
import emailjs from "emailjs-com";

const ClientSideEmail = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
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
      <h1>Client Side Email</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label> <br />
        <input type="text" name="name" />
        <br />
        <label>Email</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label>Message</label>
        <br />
        <textarea name="message" />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ClientSideEmail;
