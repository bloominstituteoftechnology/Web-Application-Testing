import { render } from "@testing-library/React";
import React from "react";
import Dashboard, {
  addAwayScore,
  addBall,
  addHits,
  addHomeScore,
  addStrike
} from "./Dashboard";

// export const addStrike = currentStrikes => {
//   return currentStrikes + 1;
// };

// export const addBall = currentBalls => {
//   return currentBalls + 1;
// };

// export const addHits = currentHits => {
//   return currentHits + 1;
// };

// export const addHomeScore = currentHomeScore => {
//   return currentHomeScore + 1;
// };

// export const addAwayScore = currentAwayScore => {
//   return currentAwayScore + 1;
// };

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
  });
});

describe("<Dashboard />", () => {
  it("addStrike will add one to the Strike", () => {
    expect(addStrike(1)).toBe(2);
  });
  it("addBall will add one to the Balls", () => {
    expect(addBall(1)).toBe(2);
  });
  it("addHits will add one to the Hits", () => {
    expect(addHits(1)).toBe(2);
  });
  it("addHomeScore will add one to the HomeScore", () => {
    expect(addHomeScore(1)).toBe(2);
  });
  it("addAwayScore will add one to the AwayScore", () => {
    expect(addAwayScore(1)).toBe(2);
  });
});
