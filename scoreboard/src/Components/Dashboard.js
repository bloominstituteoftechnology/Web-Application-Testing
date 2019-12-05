import React from 'react'

const Dashboard = (props) => {
    return (
        <div>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
            <button onClick={props.hit}>Hit</button>
            <button onClick={props.foul}>Foul</button>
        </div>
    )
}

export default Dashboard