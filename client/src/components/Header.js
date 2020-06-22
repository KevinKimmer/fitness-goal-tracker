import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Header extends Component {
  state = {
    quote: {},
  };
  componentDidMount() {
    axios.get("https://type.fit/api/quotes/").then((response) => {
      const res = response.data[Math.floor(Math.random() * 800) + 1];
      if (res.author === null) {
        res.author = "Anonymous";
      }
      this.setState({
        quote: res,
      });
    });
  }

  render() {
    return (
      <div className="header">
        <div className="header__container">
          <Link to="/fitness" className="header__container--link">
            <p className="header__container--tab">Fitness Goals</p>
          </Link>
          <Link to="/about" className="header__container--link">
            <p className="header__container--tab">About Me</p>
          </Link>
          <Link to="/contact" className="header__container--link">
            <p className="header__container--tab">Contact Us</p>
          </Link>
        </div>
        <p className="header__banner">"{this.state.quote.text}"</p>
        <p className="header__author">-{this.state.quote.author}</p>
      </div>
    );
  }
}
