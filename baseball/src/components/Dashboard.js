import React from 'react'

const Dashboard = props => {
  return (
    <div title='dashboard' className='dashboard'>
      <button title='ballButton' className='increaseBallCount' onClick = {props.ballAction}>Ball</button>
      <button title='strikeButton' className='increaseStrikes' onClick = {props.strikeAction}>Strike</button>
            <button title='foulButton' className='increaseFouls' onClick = {props.foulAction}>Foul</button>
            <button title='hitButton' className='HitButton' onClick = {props.hitAction}>HIT!</button>
    </div>
  );
};

export default Dashboard;
