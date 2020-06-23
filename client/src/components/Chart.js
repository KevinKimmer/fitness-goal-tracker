import { Bar, Line, Pie } from "react-chartjs-2";
import React, { Component } from "react";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [
          {
            label: "Trendline",
            type: "line",
            data: [20, 40, 60, 80, 90],

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
            data: [20, 40, 60, 80, 90],

            backgroundColor: "#71B37C",
            borderColor: "#71B37C",
            hoverBackgroundColor: "#71B37C",
            hoverBorderColor: "#71B37C",
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

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Brogress",
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}
export default Chart;
