import React, { Component } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Fitness from "./components/Fitness";

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import "./styles/main.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/fitness">
              <Fitness />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
