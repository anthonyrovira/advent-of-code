import {
  convertRawPairIntoSuite,
  isContainingTheOtherPair,
  isOverlappingPair,
} from "./utils";

describe("utils", () => {
  test("should return a suite of number according to rawPair", () => {
    expect(convertRawPairIntoSuite("2-6")).toEqual([2, 3, 4, 5, 6]);
  });
  test("should return a single number suite", () => {
    expect(convertRawPairIntoSuite("6-6")).toEqual([6]);
  });
  test("should return true because a pair is containing the other", () => {
    expect(isContainingTheOtherPair([2, 3, 4, 5, 6], [3, 4])).toBeTruthy();
  });
  test("should return false beacause none of pairs are containing the other", () => {
    expect(isContainingTheOtherPair([2, 3, 4, 5, 6], [8, 9])).toBeFalsy();
  });
  test("should return true because a pair is containing the other (single element in the first pair)", () => {
    expect(isContainingTheOtherPair([6], [4, 6])).toBeTruthy();
  });
  test("should return true because a pair is containing the other (single element in the second pair)", () => {
    expect(isContainingTheOtherPair([4, 6], [6])).toBeTruthy();
  });
  test("should return true because the 7 is present in the two pairs", () => {
    expect(isOverlappingPair([5, 6, 7], [7, 8, 9])).toBeTruthy();
  });
  test("should return false because none elements are commons", () => {
    expect(isOverlappingPair([2, 3, 4], [5, 6, 7])).toBeFalsy();
  });
});
