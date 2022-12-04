export const convertRawPairIntoSuite = (rawPair: string): number[] => {
  const twoEnds = rawPair.split("-");
  let suite: number[] = [];
  for (let i = parseInt(twoEnds[0]); i <= parseInt(twoEnds[1]); i++) {
    suite.push(i);
  }
  return suite;
};

export const isContainingTheOtherPair = (
  firstPair: number[],
  secondPair: number[]
): boolean => {
  const firstPairConditions =
    firstPair[0] <= secondPair[0] &&
    firstPair[firstPair.length - 1] >= secondPair[secondPair.length - 1];
  const secondPairConditions =
    secondPair[0] <= firstPair[0] &&
    secondPair[secondPair.length - 1] >= firstPair[firstPair.length - 1];
  if (firstPairConditions || secondPairConditions) {
    return true;
  } else {
    return false;
  }
};

export const isOverlappingPair = (
  firstPair: number[],
  secondPair: number[]
): boolean => {
  const firstPairConditions = firstPair.some((element) => {
    return secondPair.includes(element);
  });
  const secondPairConditions = secondPair.some((element) => {
    return firstPair.includes(element);
  });
  if (firstPairConditions || secondPairConditions) {
    return true;
  } else {
    return false;
  }
};
