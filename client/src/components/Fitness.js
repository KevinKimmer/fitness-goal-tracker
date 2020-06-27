import React, { Component } from "react";
import Charts from "./Charts";
import Instructions from "./Instructions";
import { withRouter } from "react-router";

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
              <Route
                exact
                path="/fitness"
                component={withRouter(Instructions)}
              />

              <Route path="/fitness/1">
                <Charts exerciseData={0} />
              </Route>
              <Route path="/fitness/2">
                <Charts exerciseData={1} />
              </Route>
              <Route path="/fitness/3">
                <Charts exerciseData={2} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
