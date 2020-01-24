import React from 'react';

const Dashboard = ({ upBallCount, upStrikeCount }) => {
   return(
      <div>
         <h3>Dashboard</h3>
         <div className='dash-buttons'>
            <button onClick={upStrikeCount}>Strike</button>
            <button onClick={upBallCount}>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
         </div>
      </div>
   )
}

export default Dashboard;