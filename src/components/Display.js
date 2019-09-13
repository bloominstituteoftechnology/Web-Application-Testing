import React from 'react';

function Display({balls, strikes}) {
  return (
    <section>
      <h1>Baseball Tracker</h1>
      <div>
        <h3>Balls</h3>
        <h2 data-testid="ballsvalue">{balls}</h2>
      </div>
      <div>
        <h3>Strikes</h3>
        <h2 data-testid="strikesvalue">{strikes}</h2>
      </div>
    </section>
  )
}

export default Display;
