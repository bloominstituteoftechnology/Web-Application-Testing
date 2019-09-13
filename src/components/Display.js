import React from 'react';

function Display({balls, strikes}) {
  return (
    <section>
      <h1>Baseball Tracker</h1>
      <div>
        <h3>Balls</h3>
        <h5>{balls}</h5>
      </div>
      <div>
        <h3>Strikes</h3>
        <h5>{strikes}</h5>
      </div>
    </section>
  )
}

export default Display;
