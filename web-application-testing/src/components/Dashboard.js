import React, { useState } from 'react';
import Display from './Display';

export default function Dashboard () {

    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    return(
        <div>
            <h1>Dashboard</h1>
            <button>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button>hit</button>
            <Display balls={balls}
                     setBalls={setBalls}
                     strikes={strikes}
                     setStrikes={setStrikes} />
        </div>
    )
}