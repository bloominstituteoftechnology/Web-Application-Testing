import React from 'react';

const Dashboard = ({ balls, setBalls, strikes, setStrikes, atBat, setAtBat }) => {
   const newBatter = () => {
      setBalls(0);
      setStrikes(0);
      setAtBat(atBat + 1);
   }

   const upBallCount = () => {
      if (balls < 3) {
         setBalls(balls + 1);
      }
      else {
         newBatter();
      } 
   };

   const upStrikeCount = () => {
      if (strikes < 2) {
         setStrikes(strikes + 1);
      }
      else  {
         newBatter();
      }
   };

   const foulHandler = () => {
      if (strikes < 2) {
         setStrikes(strikes + 1);
      }
   }

   return(
      <div>
         <h3>Dashboard</h3>
         <div className='dash-buttons'>
            <button onClick={upStrikeCount}>Strike</button>
            <button onClick={upBallCount}>Ball</button>
            <button onClick={foulHandler}>Foul</button>
            <button onClick={newBatter}>Hit</button>
         </div>
      </div>
   )
}

export default Dashboard;