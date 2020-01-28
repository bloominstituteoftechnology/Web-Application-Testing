import React from 'react';

const Dashboard = (props) => {

    return (
        <div className="Dashboard">
            <button onClick={() => props.handleStrike()}>strike</button>
            <button onClick={() => props.handleBall()}>ball</button>
            <button onClick={() => props.handleFoul()} >foul</button>
            <button onClick={() => props.handleHit()}>hit</button>
        </div> 
    );
};

export default Dashboard;