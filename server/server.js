//dependencies
const express = require("express");
const cors = require("cors");
const fs = require("fs");
//initializing variables
const getWorkOut = require("./controller/getWorkOut");
const workout = require("./model/workout.json");

const app = express();

// middleware make sure incoming req.body is formatted as JSON
app.use(express.json());
//middlesware to make connect express
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from express");
});

//chaining routes for /videos route to get, post, and put data
app
  .route("/fitness/")
  .get((req, res) => {
    res.json(getWorkOut());
  })
  .post((req, res) => {
    const newWorkOutList = [...workout, req.body];
    const fileName = "./model/workout.json";
    const file = require("./model/workout.json");

    fs.writeFile(fileName, JSON.stringify(newWorkOutList), function writeJSON(
      err
    ) {
      if (err) throw err;
    });
    res.json(newWorkOutList);
  })
  .put((req, res) => {
    const foundWorkOutIndex = workout.findIndex(
      (item) => item.id === req.body.id
    );
    let newWorkoutList = [...workout];
    if (foundWorkOutIndex >= 0) {
      newWorkoutList[foundWorkOutIndex] = req.body;
    }

    const fileName = "./model/workout.json";
    const file = require("./model/workout.json");

    fs.writeFile(fileName, JSON.stringify(newWorkoutList), function writeJSON(
      err
    ) {
      if (err) throw err;
    });
    res.json(newWorkoutList);
  });

//path for 404 error
app.get("/*", (req, res) => {
  res.send(
    `<h1>Page not found</h1>
    <img src="https://pyxis.nymag.com/v1/imgs/09c/923/65324bb3906b6865f904a72f8f8a908541-16-spongebob-explainer.rsquare.w700.jpg"/>`
  );
});
//port for server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("app is listening at: http://localhost:5000");
});
