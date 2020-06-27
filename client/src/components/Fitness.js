import React, { Component } from "react";
import Charts from "./Charts";
import Instructions from "./Instructions";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import axios from "axios";
export default class Fitness extends Component {
  state = {
    workoutData: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/fitness/`).then((response) => {
      this.setState({
        workoutData: response.data,
      });
    });
  }

  render() {
    return (
      <div className="fitness">
        <div className="fitness__container">
          <Router>
            <Switch>
              <Route path="/fitness" exact>
                <Instructions />
              </Route>
              <Route path="/fitness/1">
                <Charts squatData={this.state.workoutData[0]} />
              </Route>
              <Route path="/fitness/2">
                <Charts deadlifttData={this.state.workoutData[1]} />
              </Route>
              <Route path="/fitness/3">
                <Charts benchpressData={this.state.workoutData[2]} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
