import { getHalves, getPositionFromAlphabet, getSharedItem } from "./utils";

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./input.txt");

try {
  const raw = fs.readFileSync(filePath, "utf8");
  const data: string[] = raw.toString().split("\r\n");
  let sumOfPriorities = 0;

  for (let i = 0; i < data.length; i++) {
    const halves = getHalves(data[i]);
    const sharedItem = getSharedItem(halves);
    if (!!sharedItem) {
      sumOfPriorities += getPositionFromAlphabet(sharedItem);
    }
  }

  console.log("Part one: ", sumOfPriorities);
} catch (error) {
  console.error(error);
}

try {
  const raw = fs.readFileSync(filePath, "utf8");
  const data: string[] = raw.toString().split("\r\n");
  let sumOfPriorities = 0;
  let setOfThree: string[] = [];
  for (let i = 0; i < data.length; i++) {
    setOfThree.push(data[i]);

    if (setOfThree.length === 3) {
      const arrayOfFirst = setOfThree[0].split("");
      const arrayOfSecond = setOfThree[1].split("");
      const arrayOfThird = setOfThree[2].split("");
      for (let j = 0; j < arrayOfFirst.length; j++) {
        if (
          arrayOfSecond.includes(arrayOfFirst[j]) &&
          arrayOfThird.includes(arrayOfFirst[j])
        ) {
          sumOfPriorities += getPositionFromAlphabet(arrayOfFirst[j]);
          break;
        }
      }
      setOfThree.length = 0;
    }
  }

  console.log("Part two: ", sumOfPriorities);
} catch (error) {
  console.error(error);
}

export default {};
