import React, { Component } from "react";
import linkedin from "../assets/linkedin.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <a
          className="contact__container--link"
          href="https://www.linkedin.com/in/kevin-kimmer/"
        >
          <img className="contact__container--img" src={linkedin} /> linkedin
        </a>
        <p className="contact__container--email">
          <span className="contact__container--span">Email:</span>{" "}
          Kim.Kevin224@gmail.com
        </p>
        <form className="contact__form">
          <h2 className="contact__form--header">Contact Us</h2>
          <label className="contact__form--label">Email:</label>
          <input
            className="contact__form--email"
            type="textarea"
            name="email"
            placeholder="example: JohnDoe123@gmail.com"
          />
          <textarea
            className="contact__form--text"
            type="textarea"
            name="emailText"
            placeholder=""
          />
          <button className="contact__form--btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
