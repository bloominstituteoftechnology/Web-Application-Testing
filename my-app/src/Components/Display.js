import React from 'react';
import {useState} from 'react';
import Dashboard from './Dashboard';

const Display  = () => {
const [strike ,setStrike] = useState(0);



const strikeCheck = () => {
    if (strike > 2 ) {
        setStrike (0);
    }else{
        setStrike(strike+1)
    }
}

    const hit =() => {
      
        setStrike (0);

    } 


    return (
        <div>
        
            <h2>Strike: {strike}</h2>
            <Dashboard  strike = {strike} strikeCheck = {strikeCheck}  hit = {hit}/>
        
        
        </div>
    )
}

export default Display