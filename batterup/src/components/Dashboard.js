import React from 'react';

const Dashboard = props =>{
    const { foulBtn, strikeBtn, ballBtn, resetBtn } = props;
    return(
        <div>
            <div>
                <button onClick={strikeBtn}>strike</button>
                <button onClick={ballBtn}>ball</button>
                <button onClick={foulBtn}>foul</button>
            </div>
            <div>
                <h2>Lets Play Ball</h2>
            </div>
        </div>
    )
}

export default Dashboard;