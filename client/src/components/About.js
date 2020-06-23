import React, { Component, Profiler } from "react";
import profile from "../assets/selfimg.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <img className="about__container--pic" src={profile} />
        <p className="about__container--description">
          I will not be able to encapsulate my personality better than the
          following quote
        </p>
        <p className="about__quote">
          "A Web Developer by trade, a jokester by natue"
        </p>
        <p className="about__author">-A Wise and Handome Man Probably</p>
      </div>
    </div>
  );
}
