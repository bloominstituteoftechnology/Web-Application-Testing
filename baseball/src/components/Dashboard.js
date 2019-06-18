import React from 'react';

const Dashboard = (props) => {
    return (
        <>
            <button onClick={props.setStrike}>strike</button>
            <button onClick={props.setBall}>ball</button>
            <button onClick={props.setFoul}>foul</button>
            <button onClick={props.setHit}>hit</button>
        </>
    )
    
}

export default Dashboard;