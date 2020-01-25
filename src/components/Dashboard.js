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
            <button data-testid='strike-btn' onClick={upStrikeCount}>Strike</button>
            <button data-testid='ball-btn' onClick={upBallCount}>Ball</button>
            <button data-testid='foul-btn' onClick={foulHandler}>Foul</button>
            <button data-testid='hit-btn' onClick={newBatter}>Hit</button>
         </div>
      </div>
   )
}

export default Dashboard;