import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Header extends Component {
  state = {
    auth: "",
    quo: "",
  };
  componentDidMount() {
    axios.get("https://type.fit/api/quotes/").then((response) => {
      const res = response.data[Math.floor(Math.random() * 800) + 1];

      if (res.author === null) {
        res.author = "Anonymous";
      }

      this.setState({
        auth: res.author,
        quo: res.text,
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
        <p className="header__banner">
          <span class="header__span">"</span>
          {spanThis(this.state.quo)}
          <span class="header__span">"</span>
        </p>
        <p className="header__author">
          <span class="header__span">-</span>
          {spanThis(this.state.auth)}
        </p>
      </div>
    );
  }
}

function spanThis(prop) {
  let value = [];
  console.log(prop);
  for (let i = 0; i < prop.length; i++) {
    if (prop.charAt(i) == " ") {
      value.push(
        <span class="header__span header__span--space">{prop.charAt(i)}</span>
      );
    }
    value.push(<span class="header__span">{prop.charAt(i)}</span>);
  }
  console.log(value);
  return value;
}
