import React from 'react';

//export const addBall = (balls, strikes) => {
//  if( balls === 4 || strikes === 3 ) {
//    return 0;
//  }
//  return balls + 1
//}

//export const addStrike = (balls, strikes) => {
//  if( balls === 4 || strikes === 3 ) {
//  }
//  return strikes + 1
//}

export const addBall = balls => balls + 1;
export const addStrike = strikes => strikes + 1;
export const addFoul = fouls => fouls + 1;
export const addHit = hits => hits + 1;

function Dashboard() {
  return (
    <div>
    </div>
  )
}

export default Dashboard;
