import React, { Component } from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <input
          className="home__container--id"
          type="textarea"
          name="rep"
          placeholder="User Id:"
        />
        <input
          className="home__container--password"
          type="textarea"
          name="weight"
          placeholder="password"
        />
        <button className="home__container--btn" type="submit">
          Log in
        </button>
      </div>
    </div>
  );
}
