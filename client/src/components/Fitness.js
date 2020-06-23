import React, { Component } from "react";
import Chart from "./Chart";

export default function Fitness() {
  return (
    <div className="fitness">
      <div className="fitness__container">
        <div className="fitness__top">
          <form className="fitness__inputs">
            <h2 className="fitness__inputs--header">Goal Calculator</h2>
            <select className="fitness__inputs--box">
              <option value="squat">Exercise</option>
              <option value="squat">Squat</option>
              <option value="squat">Deadlift</option>
              <option value="squat">Bench Press</option>
            </select>
            <input
              className="fitness__inputs--box"
              type="number"
              min="1"
              name="rep"
              placeholder="Repetitions"
            />
            <input
              className="fitness__inputs--box"
              type="number"
              min="1"
              name="weight"
              placeholder="Current Weight (lbs)"
            />
            <input
              className="fitness__inputs--box"
              type="number"
              min="1"
              name="goal"
              placeholder="Goal Weight (lbs)"
            />
            <button className="fitness__inputs--btn" type="submit">
              Calculate
            </button>
          </form>
          <div className="fitness__instruction">
            <h2 className="fitness__instruction--Header">Instructions</h2>
            <p className="fitness__instruction--description">
              1. Select one an exercise to track
            </p>
            <p className="fitness__instruction--description">
              2. Enter the current repetitions
            </p>
            <p className="fitness__instruction--description">
              3. Enter the current weight in lbs
            </p>
            <p className="fitness__instruction--description">
              4. Enter goal weight in lbs
            </p>
            <p className="fitness__instruction--description">
              5. Click Calculate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
