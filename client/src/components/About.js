import React, { Component, Profiler } from "react";
import profile from "../assets/selfimg.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__pic">
          <img className="about__pic--profile" src={profile} />
        </div>
        <div className="about__description">
          <p className="about__description--text">
            I will not be able to encapsulate my personality better than the
            following quote:
          </p>
          <p className="about__description--quote">
            "A Web Developer by trade, a jokester by natue"
          </p>
          <p className="about__description--author">
            -A Wise and Handome Man Probably
          </p>
        </div>
      </div>
    </div>
  );
}
