import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("should render pitch count", () => {
    const playersData = [
      { id: 1, name: "balls" },
      { id: 2, name: "strike" },
      { id: 3, name: "foul" }
    ];

    const comp = render(<Display players={playersData} />);

    const players = comp.getAllByTestId("player");

    expect(players).toHaveLength(playersData.length);
  });
});
