export const getPositionFromAlphabet = (letter: string): number => {
  if (typeof letter === "string") {
    if (letter === letter.toUpperCase()) {
      return letter.charCodeAt(0) - 64 + 26;
    } else {
      return letter.charCodeAt(0) - 96;
    }
  }
  return 0;
};

export const getHalves = (rucksack: string): string[] => {
  const halfIndex = Math.floor(rucksack.length / 2);
  const firstHalf = rucksack.slice(0, halfIndex);
  const secondHalf = rucksack.slice(halfIndex);
  return [firstHalf, secondHalf];
};

export const getSharedItem = (halves: string[]): string | undefined => {
  const arrayOfFirstHalf = halves[0].split("");
  const arrayOfSecondHalf = halves[1].split("");
  return arrayOfFirstHalf.find((letterOfFirstHalf) => {
    if (arrayOfSecondHalf.includes(letterOfFirstHalf)) return letterOfFirstHalf;
    return "";
  });
};
