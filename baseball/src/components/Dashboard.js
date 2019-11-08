import React from 'react';

export const Dashboard = (props) => {
    const handleBall = () => {
        if (props.balls < 3) {
            props.addBall()
        }
        if (props.balls === 3) {
            props.reset()
        }
    }

    const handleStrike = () => {
        if (props.strikes < 2) {
            props.addStrike()
        }
        if (props.strikes === 2) {
            props.reset()
        }
    }

    const handleFoul = () => {
        if (props.strikes < 2) {
            props.addStrike()
        }
    }

    const handleHit = () => {
        props.reset()
    }

    return(
        <div>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    )
}