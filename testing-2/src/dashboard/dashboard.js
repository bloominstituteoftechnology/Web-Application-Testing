import React from 'react';

const Dashboard = props => {
    return (
        <div className='dashboard'>
            <button className='ballIncrementButton' onClick = {props.ballAction}>Ball</button>
            <button className='strikeIncrementButton' onClick = {props.strikeAction}>Strike</button>
            <button className='foulIncrementButton' onClick = {props.foulAction}>Foul</button>
            <button className='HitButton' onClick = {props.hitAction}>HIT!</button>
        </div>
    );
};

export default Dashboard;