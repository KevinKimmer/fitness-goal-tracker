import React, { Component } from "react";
import axios from "axios"; //imports axios
import { Link } from "react-router-dom";

export default class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      weight: [],
      goal: 0,
      rep: [],
      exercise: "",
    };
  }

  onClickButton = (event) => {
    event.preventDefault();
    const data = this.state;
    if (data.idnum === "1") {
      data.exercise = "squat";
    } else if (data.idnum === "2") {
      data.exercise = "deadlift";
    } else {
      data.exercise = "benchpress";
    }
    const workoutData = {
      id: Number(data.idnum),
      rep: [Number(data.rep)],
      goal: Number(data.goal),
      weight: [Number(data.weight)],
      exercise: data.exercise,
    };
    console.log(workoutData);
    axios
      .put(`http://localhost:5000/fitness/`, workoutData)
      .then(function (response) {
        console.log(response);
      });
  };

  inputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { idnum } = this.state;
    const { weight } = this.state;
    const { goal } = this.state;
    const { rep } = this.state;

    return (
      <div className="fitness__top">
        <form className="fitness__inputs">
          <h2 className="fitness__inputs--header">Goal Calculator</h2>
          <select
            className="fitness__inputs--box"
            name="idnum"
            onChange={this.inputChange}
          >
            <option value="" disabled selected>
              Exercise
            </option>
            <option value="1">Squat</option>
            <option value="2">Deadlift</option>
            <option value="3">Bench Press</option>
          </select>

          <input
            className="fitness__inputs--box"
            type="number"
            min="1"
            name="rep"
            placeholder="Repetitions"
            onChange={this.inputChange}
          />
          <input
            className="fitness__inputs--box"
            type="number"
            min="1"
            name="weight"
            placeholder="Current Weight (lbs)"
            onChange={this.inputChange}
          />
          <input
            className="fitness__inputs--box"
            type="number"
            min="1"
            name="goal"
            placeholder="Goal Weight (lbs)"
            onChange={this.inputChange}
          />

          <button
            className="fitness__inputs--btn"
            type="submit"
            onClick={this.onClickButton}
          >
            <Link className="fitness__inputs--link" to={`./fitness/${idnum}`}>
              Calculate
            </Link>
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
        <Link className="fitness__inputs--link" to="./fitness/1">
          Squat
        </Link>
        <Link className="fitness__inputs--link" to="./fitness/3">
          Bench Press
        </Link>
        <Link className="fitness__inputs--link" to="./fitness/2">
          Deadlift
        </Link>
      </div>
    );
  }
}
