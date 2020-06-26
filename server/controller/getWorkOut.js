const fs = require("fs");
// returns id, title, channel, and image of all video data
const getWorkOut = () => {
  const workOutData = fs.readFileSync("./model/workout.json");

  const mappedWorkOutData = JSON.parse(workOutData).map((workOut) => {
    return {
      id: workOut.id,
      exercise: workOut.exercise,
      weight: workOut.weight,
      rep: workOut.rep,
      goal: workOut.goal,
    };
  });

  return mappedWorkOutData;
};

module.exports = getWorkOut;
