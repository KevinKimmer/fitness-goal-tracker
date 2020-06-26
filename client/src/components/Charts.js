import { Bar } from "react-chartjs-2";

import React, { Component } from "react";
import Axios from "axios"; //imports axios

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      goal: 0,
      rep: 0,
      exercise: "",
    };

    this.state = {
      dataPt: [10],
      chartData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
          {
            label: "Trendline",
            type: "line",
            data: this.state.dataPt,

            borderColor: "#EC932F",
            backgroundColor: "rgba(0,0,0,0)",
            pointBorderColor: "#EC932F",
            pointBackgroundColor: "#EC932F",
            pointHoverBackgroundColor: "#71B37C",
            pointHoverBorderColor: "#71B37C",
          },
          {
            label: "Sqaut",
            type: "bar",
            data: this.state.dataPt,

            backgroundColor: "#71B37C",
            borderColor: "#71B37C",
            hoverBackgroundColor: "#71B37C",
            hoverBorderColor: "#71B37C",
          },
          {
            label: "Goal",
            type: "bar",
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50],

            backgroundColor: "#red",
            borderColor: "red",
            hoverBackgroundColor: "red",
            hoverBorderColor: "red",
          },
          {
            label: "Goal Progression Line",
            type: "line",
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50],

            borderColor: "red",
            backgroundColor: "rgba(0,0,0,0)",
            pointBorderColor: "red",
            pointBackgroundColor: "red",
            pointHoverBackgroundColor: "red",
            pointHoverBorderColor: "red",
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom",
  };

  onClickButton = (event) => {
    event.preventDefault();
    const data = this.state;
    const workoutData = {
      id: `${Date.now()}`,
      //workout: data.exercise,
      reps: data.rep,
      goals: data.weight,
    };
    // Axios.post(`http://localhost:5000/videos`, workoutData).then(function (
    //   response
    // ) {
    console.log(workoutData);
    //});
    this.setState({
      dataPt: [...this.state.dataPt, data.weight],
    });
  };

  inputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataPt === this.state.dataPt) {
    } else {
      this.setState({
        goal: 10,
      });
    }
  }

  render() {
    const { rep } = this.state;
    const { weight } = this.state;
    const { exercise } = this.state;
    console.log(this.state.dataPt);
    return (
      <div className="chart">
        <h2 className="chart__title">Squat</h2>
        <div className="chart__container">
          <form className="chart__form">
            <h2 className="chart__form--header">Goal Calculator</h2>
            <input
              className="chart__form--box"
              type="number"
              min="1"
              name="rep"
              placeholder="Repetitions"
              onChange={this.inputChange}
            />
            <input
              className="chart__form--box"
              type="number"
              min="1"
              name="weight"
              placeholder="Current Weight (lbs)"
              onChange={this.inputChange}
            />

            <button
              className="chart__form--btn"
              type="submit"
              onClick={this.onClickButton}
            >
              Submit
            </button>
          </form>
          <div className="chart__graph">
            <Bar
              className="chart__graph"
              data={this.state.chartData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: "Progress",
                },
                responsive: true,
                scales: {
                  xAxes: [
                    {
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: "Workout number",
                      },
                    },
                  ],
                  yAxes: [
                    {
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: "One Rep Max (lbs)",
                      },
                    },
                  ],
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Charts;
