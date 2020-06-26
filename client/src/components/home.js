import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <form className="home__form">
          <input
            className="home__container--id"
            type="textarea"
            name="rep"
            placeholder="User Id:"
          />
          <input
            className="home__container--password"
            type="password"
            name="weight"
            placeholder="password"
          />
          <button className="home__container--btn" type="submit">
            <Link className="home__container--link" to="./fitness">
              Log in
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
