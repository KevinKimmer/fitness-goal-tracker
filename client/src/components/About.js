import React, { Component, Profiler } from "react";
import profile from "../assets/selfimg.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <img className="about__container--pic" src={profile} />
      </div>
    </div>
  );
}
