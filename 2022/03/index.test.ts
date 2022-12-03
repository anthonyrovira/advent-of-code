import { getHalves, getPositionFromAlphabet, getSharedItem } from "./utils";

describe("utils", () => {
  test("should return position of a letter in the alphabet", () => {
    expect(getPositionFromAlphabet("h")).toEqual(8);
  });

  test("should return two half of a given rucksack", () => {
    expect(getHalves("vJrwpWtwJgWrhcsFMMfFFhFp")).toEqual([
      "vJrwpWtwJgWr",
      "hcsFMMfFFhFp",
    ]);
  });

  test("should return the shared item amoung the two halves", () => {
    expect(getSharedItem(["vJrwpWtwJgWr", "hcsFMMfFFhFp"])).toEqual("p");
  });
});
