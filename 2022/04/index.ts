import {
  convertRawPairIntoSuite,
  isContainingTheOtherPair,
  isOverlappingPair,
} from "./utils";

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./input.txt");

try {
  const raw = fs.readFileSync(filePath, "utf8");
  const data: string[] = raw.toString().split("\r\n");
  let sumOfPairsContained: number = 0;
  for (let i = 0; i < data.length; i++) {
    const splittedPairs = data[i].split(",");
    const suitePairOne = convertRawPairIntoSuite(splittedPairs[0]);
    const suitePairTwo = convertRawPairIntoSuite(splittedPairs[1]);
    isContainingTheOtherPair(suitePairOne, suitePairTwo) &&
      sumOfPairsContained++;
  }

  console.log("Part one: ", sumOfPairsContained);
} catch (error) {
  console.error(error);
}

try {
  const raw = fs.readFileSync(filePath, "utf8");
  const data: string[] = raw.toString().split("\r\n");
  let sumOfPairsContained: number = 0;
  for (let i = 0; i < data.length; i++) {
    const splittedPairs = data[i].split(",");
    const suitePairOne = convertRawPairIntoSuite(splittedPairs[0]);
    const suitePairTwo = convertRawPairIntoSuite(splittedPairs[1]);
    isOverlappingPair(suitePairOne, suitePairTwo) && sumOfPairsContained++;
  }

  console.log("Part two: ", sumOfPairsContained);
} catch (error) {
  console.error(error);
}

export default {};
