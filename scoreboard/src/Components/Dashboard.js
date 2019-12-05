import React from 'react'

const Dashboard = (props) => {
    return (
        <div>
            <button onClick={props.strike} className="button">Strike</button>
            <button onClick={props.ball} className="button">Ball</button>
            <button onClick={props.hit} className="button" >Hit</button>
            <button onClick={props.foul} className="button" >Foul</button>
        </div>
    )
}

export default Dashboard