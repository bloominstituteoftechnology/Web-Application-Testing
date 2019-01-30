import React from 'react';

const Dashboard = props => {
    return [
        <div>
            <button onClick = {props.strikeCounter}>Strike</button>
        </div>,
        <div>
            <button onClick = {props.ballCounter}>Ball</button>
        </div>,
        <div>
            <button onClick = {props.strikeCounter}>Foul</button>
        </div>,
        <div>
            <button onClick = {props.hitCounter}>Hits</button>
        </div>
    ]
}

export default Dashboard;