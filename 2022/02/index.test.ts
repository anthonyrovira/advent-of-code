import {
  getOverallScore,
  getOverallScoreOfPlayerTwo,
  getResultOfRoundPoints,
  PlayerOne,
  PlayerTwo,
  RoundResult,
} from ".";

describe("getScoreOfPlayerTwo", () => {
  test("should return sum of points won according to part one rules", () => {
    expect(getOverallScoreOfPlayerTwo("A", "X")).toEqual(4);
  });
  test("should return sum of points won according to part two rules", () => {
    expect(getOverallScore("A", "Y")).toEqual(4);
  });
  test("Part One rules ", () => {
    expect(
      getResultOfRoundPoints({
        playerOne: PlayerOne.A,
        dynamicItem: PlayerTwo.X,
      })
    ).toEqual(3);
  });
  test("Part Two rules", () => {
    expect(
      getResultOfRoundPoints({
        playerOne: PlayerOne.A,
        dynamicItem: RoundResult.Win,
      })
    ).toEqual(2);
  });
});
