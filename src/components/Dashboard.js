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

export const addBall = balls => balls === 3 ? 0 : balls + 1;
export const addStrike = strikes =>  strikes === 2 ? 0 : strikes + 1;
export const addFoul = fouls => fouls + 1;
export const addHit = hits => hits + 1;

function Dashboard({ 
    balls, 
    strikes, 
    fouls, 
    hits, 
    setBalls, 
    setStrikes, 
    setFouls, 
    setHits 
  }) {

  return (
    <div>
      <button
        onClick={()=> setBalls(addBall(balls))} 
        data-testid="ballbtn"
      >Ball
      </button>
      <button
        onClick={()=> setStrikes(addStrike(strikes))}
        data-testid="strikebtn"
      >Strike</button>
      <button 
        onClick={()=> {
          setFouls(addFoul(fouls, strikes))

          strikes >= 2 
            ? setStrikes(strikes)
            : setStrikes(addStrike(strikes))
        }}
        data-testid="foulbtn"
      >Foul</button>
      <button 
        onClick={()=> {
          setHits(addHit(hits))
          setBalls(0)
          setStrikes(0);
          setFouls(0);
        }}
        data-testid="hitbtn"
      >Hit</button>
    </div>
  )
}

export default Dashboard;
