const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./input.txt");

try {
  const raw = fs.readFileSync(filePath);
  const data = raw.toString().split("\r\n");
  let sumOfCalories = 0;
  let highest = 0;
  for (let i = 0; i < data.length; i++) {
    if (!!data[i]) {
      sumOfCalories += parseInt(data[i]);
      if (sumOfCalories > highest) {
        highest = sumOfCalories;
      }
    } else sumOfCalories = 0;
  }
  console.log("Part one: ", highest);
} catch (error) {
  console.error(error);
}

try {
  const raw = fs.readFileSync(filePath);
  const data = raw.toString().split("\r\n");
  let sumOfCalories = 0;
  let highests = [0, 0, 0];
  for (let i = 0; i < data.length; i++) {
    if (!!data[i]) {
      sumOfCalories += parseInt(data[i]);
    } else {
      let shouldReplace = false;
      for (let j = 0; j < highests.length; j++) {
        if (
          sumOfCalories > highests[j] &&
          !shouldReplace &&
          !highests.includes(sumOfCalories)
        ) {
          shouldReplace = true;
        }
        if (shouldReplace) {
          highests[j] = sumOfCalories;
          shouldReplace = false;
        }
      }

      highests.sort(function (a, b) {
        return a - b;
      });

      sumOfCalories = 0;
    }
  }
  const sum = highests.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  console.log("Part two: ", sum);
} catch (error) {
  console.error(error);
}

export {};
