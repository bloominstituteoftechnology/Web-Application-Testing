import React, {useState} from 'react';
import Display from './Display';

const Dashboard = () => {
    const [strike, setStrikes] = useState(0);
    const [ball, setBalls] = useState(0);

    const strikeCount = () => {
        if(strike < 3) {
            return strike + 1;
        } else {
            return strike - strike
        }
    }

    const ballCount = () => {
        if(ball < 4) {
            return ball + 1
        } else {
            return ball - ball
        }
    }

    const foulCount = () => {
        if(strike < 2) {
            setStrikes(foul => ++foul)
        }
    }

    const reset = (count) => {
        return (count = 0)
    }
    return( 
        <div>
            <Display strike= {strike} ball = {ball}/> 
            <h2>Here's the buttons</h2>
            <button onClick = {() => {setStrikes(strikeCount(strike))}}>Strike</button>
            <button onClick = {() => {setBalls(ballCount(ball))}} >Ball</button>
            <button onClick = {foulCount}>Foul</button>
            <button onClick = {() => (setStrikes(reset(strike)), setBalls(reset(ball)))}>Reset</button>
        </div>

    )
    }

export default Dashboard;