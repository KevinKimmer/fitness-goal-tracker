import { Bar } from "react-chartjs-2";
import axios from "axios"; //imports axios
import React, { Component } from "react";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      rep: [0],
      goal: 0,
      temprep: 0,
      tempweight: 0,
      weight: [0],
      exercise: "",
      dataGoal: [0],
      dataDates: [0],
      chartData: {
        labels: this.dataDates,
        datasets: [
          {
            label: "Trendline",
            type: "line",
            data: [0],

            borderColor: "#EC932F",
            backgroundColor: "rgba(0,0,0,0)",
            pointBorderColor: "#EC932F",
            pointBackgroundColor: "#EC932F",
            pointHoverBackgroundColor: "#71B37C",
            pointHoverBorderColor: "#71B37C",
          },
          {
            label: "exercise",
            type: "bar",
            data: [0],

            backgroundColor: "#71B37C",
            borderColor: "#71B37C",
            hoverBackgroundColor: "#71B37C",
            hoverBorderColor: "#71B37C",
          },
          {
            label: "Goal",
            type: "bar",
            data: [0],

            backgroundColor: "#red",
            borderColor: "red",
            hoverBackgroundColor: "red",
            hoverBorderColor: "red",
          },
          {
            label: "Goal Progression Line",
            type: "line",
            data: [0],

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
    let idNum = this.state.id;
    const data = this.state;
    const workoutData = {
      rep: [...this.state.rep, Number(data.temprep)],
      weight: [...this.state.weight, Number(data.tempweight)],
      id: this.state.id,
      goal: this.state.goal,
      exercise: this.state.exercise,
    };
    axios
      .put(`http://localhost:5000/fitness/`, workoutData)
      .then((response) => {
        console.log(response.data);
        console.log(idNum);
        let tempData = response.data[idNum - 1];
        console.log(tempData);
        this.setState({
          id: tempData.id,
          rep: tempData.rep,
          goal: tempData.goal,
          weight: tempData.weight,
          exercise: tempData.exercise,
          dataGoal: goalData(tempData),
          dataDates: chartLength(goalData(tempData)),

          chartData: {
            labels: chartLength(goalData(tempData)),
            datasets: [
              {
                label: "Trendline",
                type: "line",
                data: tempData.weight,

                borderColor: "#EC932F",
                backgroundColor: "rgba(0,0,0,0)",
                pointBorderColor: "#EC932F",
                pointBackgroundColor: "#EC932F",
                pointHoverBackgroundColor: "#71B37C",
                pointHoverBorderColor: "#71B37C",
              },
              {
                label: tempData.exercise,
                type: "bar",
                data: tempData.weight,

                backgroundColor: "#71B37C",
                borderColor: "#71B37C",
                hoverBackgroundColor: "#71B37C",
                hoverBorderColor: "#71B37C",
              },
              {
                label: "Goal",
                type: "bar",
                data: goalData(tempData),

                backgroundColor: "#red",
                borderColor: "red",
                hoverBackgroundColor: "red",
                hoverBorderColor: "red",
              },
              {
                label: "Goal Progression Line",
                type: "line",
                data: goalData(tempData),

                borderColor: "red",
                backgroundColor: "rgba(0,0,0,0)",
                pointBorderColor: "red",
                pointBackgroundColor: "red",
                pointHoverBackgroundColor: "red",
                pointHoverBorderColor: "red",
              },
            ],
          },
        });
      });
  };

  inputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/fitness/`).then((response) => {
      let tempData = response.data[this.props.exerciseData];
      this.setState({
        id: tempData.id,
        rep: tempData.rep,
        goal: tempData.goal,
        weight: tempData.weight,
        exercise: tempData.exercise,
        dataGoal: goalData(tempData),
        dataDates: chartLength(goalData(tempData)),

        chartData: {
          labels: chartLength(goalData(tempData)),
          datasets: [
            {
              label: "Trendline",
              type: "line",
              data: tempData.weight,

              borderColor: "#EC932F",
              backgroundColor: "rgba(0,0,0,0)",
              pointBorderColor: "#EC932F",
              pointBackgroundColor: "#EC932F",
              pointHoverBackgroundColor: "#71B37C",
              pointHoverBorderColor: "#71B37C",
            },
            {
              label: tempData.exercise,
              type: "bar",
              data: tempData.weight,

              backgroundColor: "#71B37C",
              borderColor: "#71B37C",
              hoverBackgroundColor: "#71B37C",
              hoverBorderColor: "#71B37C",
            },
            {
              label: "Goal",
              type: "bar",
              data: goalData(tempData),

              backgroundColor: "#red",
              borderColor: "red",
              hoverBackgroundColor: "red",
              hoverBorderColor: "red",
            },
            {
              label: "Goal Progression Line",
              type: "line",
              data: goalData(tempData),

              borderColor: "red",
              backgroundColor: "rgba(0,0,0,0)",
              pointBorderColor: "red",
              pointBackgroundColor: "red",
              pointHoverBackgroundColor: "red",
              pointHoverBorderColor: "red",
            },
          ],
        },
      });
    });
  }

  render() {
    const { temprep } = this.state;
    const { tempweight } = this.state;

    return (
      <div className="chart">
        <h2 className="chart__title">{this.state.exercise.toUpperCase()}</h2>
        <div className="chart__container">
          <form className="chart__form">
            <h2 className="chart__form--header">Goal Calculator</h2>
            <input
              className="chart__form--box"
              type="number"
              min="1"
              name="temprep"
              placeholder="Repetitions"
              onChange={this.inputChange}
            />
            <input
              className="chart__form--box"
              type="number"
              min="1"
              name="tempweight"
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

function goalData(data) {
  let progress = [];
  for (let i = data.weight[0]; i <= data.goal + 2; i += 3) {
    progress.push(i);
  }

  return progress;
}
function chartLength(data) {
  let progress = [];
  for (let i = 0; i <= data.length; i++) {
    progress.push(i);
  }

  return progress;
}
