import React, { Component } from "react";
import Charts from "./Charts";
import Instructions from "./Instructions";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
export default class Fitness extends Component {
  render() {
    return (
      <div className="fitness">
        <div className="fitness__container">
          <Router>
            <Switch>
              <Route path="/fitness" exact>
                <Instructions />
              </Route>
              <Route path="/fitness/placeholder">
                <Charts />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
