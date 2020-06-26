import React, { Component } from "react";
import Axios from "axios"; //imports axios
import { Link } from "react-router-dom";

export default class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      goal: 0,
      rep: 0,
      exercise: "",
    };
  }

  onClickButton = (event) => {
    event.preventDefault();
    const data = this.state;
    const workoutData = {
      id: `${Date.now()}`,
      workout: data.exercise,
      reps: data.rep,
      goals: data.goal,
      weight: data.weight,
    };
    // Axios.post(`http://localhost:5000/videos`, workoutData).then(function (
    //   response
    // ) {
    console.log(workoutData);
    //});
  };

  inputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { weight } = this.state;
    const { goal } = this.state;
    const { rep } = this.state;
    const { exercise } = this.state;
    return (
      <div className="fitness__top">
        <form className="fitness__inputs">
          <h2 className="fitness__inputs--header">Goal Calculator</h2>
          <select
            className="fitness__inputs--box"
            name="exercise"
            onChange={this.inputChange}
          >
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
            <Link className="fitness__inputs--link" to="./fitness/placeholder">
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
      </div>
    );
  }
}
