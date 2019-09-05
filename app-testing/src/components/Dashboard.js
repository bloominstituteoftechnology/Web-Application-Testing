import React from 'react';

const Dashboard = props => {
    
    return(
        <div>
            <button onClick={props.addBall}>Ball</button>
            <button onClick={props.addStrike}>Strike</button>
            <button onClick={props.addFoul}>Foul</button>
            <button onClick={props.reset}>Hit</button>
            <button onClick={props.addOut}>Out</button>
            <button onClick={props.clear}>Clear all</button>
        </div>
    )
}

export default Dashboard;