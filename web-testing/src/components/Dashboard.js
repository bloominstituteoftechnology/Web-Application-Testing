import React, { useState } from "react";
import styled from "styled-components";

const CompCount = styled.div`
  margin: 20px;
  padding: 10px;
  border: 2px solid green;
  border-radius: 4px;
`;
const Bracket = styled.div`
  margin: 20px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 4px;
`;

// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

// return [count, increment, decrement];

export default function Counter({ hits }) {
  const [balls, changeBalls] = useState(0);
  const [strikes, changeStrike] = useState(0);

  const ballsCount = () => {
    if (balls === 4) {
      changeBalls(0);
      console.log(balls);
    } else {
      changeBalls(balls + 1);
    }
  };

  const strikeCount = () => {
    if (strikes === 3) {
      changeStrike(0);
      console.log(strikes);
    } else {
      changeStrike(strikes + 1);
    }
  };

  return (
    <CompCount>
      <Bracket>
        Balls : <span id="count">{balls}</span>
      </Bracket>
      <Bracket>
        Strike: <span id="count">{strikes}</span>
      </Bracket>

      <button onClick={e => ballsCount()}>Balls</button>
      <button onClick={e => strikeCount()}>Strike</button>
      <button>Foul</button>
      <button id="reset">Hit</button>
    </CompCount>
  );
}
