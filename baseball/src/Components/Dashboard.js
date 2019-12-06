import React, {useState} from 'react';
import Display from './Display';
import {strikeCount} from '../utils/strike/strikeCount';
import {ballCount} from '../utils/balls/ballCount';
import {reset} from '../utils/reset/reset';

const Dashboard = () => {
    const [strike, setStrikes] = useState(0);
    const [ball, setBalls] = useState(0);

    const foulCount = () => {
        if(strike < 2) {
            setStrikes(foul => ++foul)
        }
    }

    return( 
        <div className='whole-thing'>
            <div className = 'counterCountainer'>
                <Display strike= {strike} ball = {ball}/>
            </div> 
            <div className = 'what-do'>
                <h2>Count the At Bat</h2>
            </div>
            <div className = 'btn-container'>
                <button title='counter-influencer' className = 'btn' onClick = {() => {setStrikes(strikeCount(strike))}}>Strike</button>
                <button title='counter-influencer' className = 'btn' onClick = {() => {setBalls(ballCount(ball))}} >Ball</button>
                <button title='counter-influencer' className = 'btn' onClick = {foulCount}>Foul</button>
                <button title='counter-influencer' className = 'btn' onClick = {() => (setStrikes(reset(strike)), setBalls(reset(ball)))}>Reset</button>
            </div>
        </div>

    )
    }

export default Dashboard;