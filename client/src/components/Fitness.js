import React, { Component } from "react";
import { Chart } from "react-charts";

export default function Fitness() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 10],
          [1, 20],
          [2, 40],
          [3, 50],
          [4, 55],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 10],
          [1, 15],
          [2, 20],
          [3, 40],
          [4, 50],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div className="fitness">
      <div className="fitness__container">
        <form className="fitness__inputs">
          <select>
            <option value="squat">Squat</option>
            <option value="squat">Deadlift</option>
            <option value="squat">Bench Press</option>
          </select>
          <input type="number" min="1" name="rep" placeholder="Repetitions" />
          <input
            type="number"
            min="1"
            name="weight"
            placeholder="Current Weight (lbs)"
          />
          <input
            type="number"
            min="1"
            name="goal"
            placeholder="Goal Weight (lbs)"
          />
          <button type="submit">Calculate</button>
        </form>
        <div className="fitness__graph">
          <Chart data={data} axes={axes} />
        </div>
      </div>
    </div>
  );
}
