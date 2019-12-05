import { useState } from "react";

export function useCounter(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);

  const strike = event => setCount(count + step);
  const balls = event => setCount(count + step);
  const foul = event => setCount(count + step);
  const hit = event => setCount(count + step);

  return [count, strike, balls, foul, hit];
}
