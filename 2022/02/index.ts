import { getOverallScore, getOverallScoreOfPlayerTwo } from "./utils";

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./input.txt");

/* --P1-- */
//A => Rocks
//B => Paper
//C => Scissors

/* --P2-- */
//X => Rocks
//Y => Paper
//Z => Scissors

/* --Scores-- */
//Rocks => 1
//Paper => 2
//Scissors => 3
//defeat => 0
//draw => 3
//win => 6

try {
  const raw = fs.readFileSync(filePath, "utf8");
  const data: string[] = raw.toString().split("\r\n");
  let sumOfRounds = 0;
  for (let i = 0; i < data.length; i++) {
    const playerOne = data[i][0].toString();
    const playerTwo = data[i][2].toString();
    sumOfRounds += getOverallScoreOfPlayerTwo(playerOne, playerTwo);
  }
  console.log("Part one: ", sumOfRounds);
} catch (error) {
  console.error(error);
}

try {
  const raw = fs.readFileSync(filePath, "utf8");
  const data: string[] = raw.toString().split("\r\n");
  let sumOfRounds = 0;
  for (let i = 0; i < data.length; i++) {
    const playerOne = data[i][0].toString();
    const result = data[i][2].toString();
    sumOfRounds += getOverallScore(playerOne, result);
  }
  console.log("Part one: ", sumOfRounds);
} catch (error) {
  console.error(error);
}

export default {};
