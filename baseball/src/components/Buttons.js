import React from 'react';


export default function Buttons(props) {
   const {balls, strikes, setBalls, setStrikes} = props;

   const addStrike = () => {
      if (strikes == 2) { 
         setStrikes(0);
         setBalls(0);
      }
      else
      {
         setStrikes(strikes+1);
      }
   }

   const addBall = () => {
      if (balls == 3) { 
         setStrikes(0);
         setBalls(0);
      }
      else
      {
         setBalls(balls+1);
      }
   }

   const addFoul = () => {
      if (strikes == 0 || strikes == 1) { 
         setStrikes(strikes+1);
      }
   }

   const addHit = () => {
      setStrikes(0);
      setBalls(0);
   }

   return (
      <section className="buttons">
         <button onClick={()=>addStrike()}  className="homeButtons__touchdown">STRIKE</button>
         <button onClick={()=>addBall()}  className="homeButtons__fieldGoal">BALL</button>
         <button onClick={()=>addFoul()}  className="awayButtons__touchdown">FOUL</button>
         <button onClick={()=>addHit()}  className="awayButtons__fieldGoal">HIT</button>
      </section>
   );

}