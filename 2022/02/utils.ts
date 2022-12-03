export enum RPS {
  "Rocks" = "Rocks",
  "Paper" = "Paper",
  "Scissors" = "Scissors",
}

export enum PlayerOne {
  "A" = RPS.Rocks,
  "B" = RPS.Paper,
  "C" = RPS.Scissors,
}
export enum PlayerTwo {
  "X" = RPS.Rocks,
  "Y" = RPS.Paper,
  "Z" = RPS.Scissors,
}

export enum RoundResult {
  "Win" = "Win",
  "Draw" = "Draw",
  "Lose" = "Lose",
}

export type PlayersRound = {
  playerOne: PlayerOne;
  dynamicItem: PlayerTwo | RoundResult;
};

export const mapStringToEnum = (
  str: string,
  strategy: 1 | 2
): PlayerOne | PlayerTwo | RoundResult => {
  switch (str) {
    case "A":
      return PlayerOne.A;
    case "B":
      return PlayerOne.B;
    case "C":
      return PlayerOne.C;
    case "X":
      if (strategy === 1) {
        return PlayerTwo.X;
      } else {
        return RoundResult.Lose;
      }
    case "Y":
      if (strategy === 1) {
        return PlayerTwo.Y;
      } else {
        return RoundResult.Draw;
      }
    case "Z":
      if (strategy === 1) {
        return PlayerTwo.Z;
      } else {
        return RoundResult.Win;
      }

    default:
      return PlayerTwo.Z;
  }
};

export const mapPlayerTwoToPoints: Record<PlayerTwo, number> = {
  [PlayerTwo.X]: 1,
  [PlayerTwo.Y]: 2,
  [PlayerTwo.Z]: 3,
};

export const mapRoundResultToPoints: Record<RoundResult, number> = {
  [RoundResult.Win]: 6,
  [RoundResult.Draw]: 3,
  [RoundResult.Lose]: 0,
};

export const getResultOfRoundPoints = ({
  playerOne,
  dynamicItem,
}: PlayersRound): number => {
  switch (playerOne) {
    case PlayerOne.A:
      if (dynamicItem in PlayerTwo) {
        if (dynamicItem === PlayerTwo.X) {
          return mapRoundResultToPoints[RoundResult.Draw];
        } else if (dynamicItem === PlayerTwo.Y) {
          return mapRoundResultToPoints[RoundResult.Win];
        } else {
          return mapRoundResultToPoints[RoundResult.Lose];
        }
      } else {
        if (dynamicItem === RoundResult.Win) {
          return mapPlayerTwoToPoints[PlayerTwo.Y];
        } else if (dynamicItem === RoundResult.Draw) {
          return mapPlayerTwoToPoints[PlayerTwo.X];
        } else {
          return mapPlayerTwoToPoints[PlayerTwo.Z];
        }
      }
    case PlayerOne.B:
      if (dynamicItem in PlayerTwo) {
        if (dynamicItem === PlayerTwo.X) {
          return mapRoundResultToPoints[RoundResult.Lose];
        } else if (dynamicItem === PlayerTwo.Y) {
          return mapRoundResultToPoints[RoundResult.Draw];
        } else {
          return mapRoundResultToPoints[RoundResult.Win];
        }
      } else {
        if (dynamicItem === RoundResult.Win) {
          return mapPlayerTwoToPoints[PlayerTwo.Z];
        } else if (dynamicItem === RoundResult.Draw) {
          return mapPlayerTwoToPoints[PlayerTwo.Y];
        } else {
          return mapPlayerTwoToPoints[PlayerTwo.X];
        }
      }
    case PlayerOne.C:
      if (dynamicItem in PlayerTwo) {
        if (dynamicItem === PlayerTwo.X) {
          return mapRoundResultToPoints[RoundResult.Win];
        } else if (dynamicItem === PlayerTwo.Y) {
          return mapRoundResultToPoints[RoundResult.Lose];
        } else {
          return mapRoundResultToPoints[RoundResult.Draw];
        }
      } else {
        if (dynamicItem === RoundResult.Win) {
          return mapPlayerTwoToPoints[PlayerTwo.X];
        } else if (dynamicItem === RoundResult.Draw) {
          return mapPlayerTwoToPoints[PlayerTwo.Z];
        } else {
          return mapPlayerTwoToPoints[PlayerTwo.Y];
        }
      }

    default:
      return 0;
  }
};

export const getOverallScoreOfPlayerTwo = (
  playerOne: string,
  playerTwo: string
): number => {
  const p1 = mapStringToEnum(playerOne, 1) as PlayerOne;
  const p2 = mapStringToEnum(playerTwo, 1) as PlayerTwo;
  let score = mapPlayerTwoToPoints[p2] ?? 0;
  score += getResultOfRoundPoints({ playerOne: p1, dynamicItem: p2 });
  return score;
};

export const getOverallScore = (
  playerOne: string,
  roundResult: string
): number => {
  const p1 = mapStringToEnum(playerOne, 2) as PlayerOne;
  const result = mapStringToEnum(roundResult, 2) as RoundResult;
  let score = mapRoundResultToPoints[result];
  score += getResultOfRoundPoints({ playerOne: p1, dynamicItem: result });
  return score;
};
