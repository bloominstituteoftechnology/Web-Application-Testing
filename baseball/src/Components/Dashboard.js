import React, {useState} from 'react';
import Display from './Display';

const Dashboard = () => {
    const [strikes, setStrikes] = useState();
    const [balls, setBalls] = useState();


    return( 
        <div>
            <Display /> 
            <h2>Here's the buttons</h2>
        </div>

    )
    }

export default Dashboard;