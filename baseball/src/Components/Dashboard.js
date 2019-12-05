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

    return( 
        <div>
            <Display strike= {strike} ball = {ball}/> 
            <h2>Here's the buttons</h2>
            <button onClick = {() => (setStrikes(strikeCount(strike)))}>Strike</button>
        </div>

    )
    }

export default Dashboard;