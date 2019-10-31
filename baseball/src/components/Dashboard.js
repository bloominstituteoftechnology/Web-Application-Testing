import React from 'react';


const Dashboard = props => {
    return (
        <div>
            <button>Ball</button>
            <button onClick={props.strike}>Strike</button>
            <button>Foul</button>
            <button>Hit</button>
        </div>
    )
}
export default Dashboard;