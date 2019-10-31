import React from 'react';
import {useState} from 'react';
import Dashboard from './Dashboard';

const Display  = () => {
const [strike ,setStrike] = useState(0);
const [ball, setBall] = useState(0)


 const strikeCheck = () => {
    if (strike > 2 ) {
        setStrike (0);
        setBall (0);
    }else{
        setStrike(strike+1)
    }
}


  


const ballCheck = () => {
    if (ball > 3 ) {
        setStrike (0);
        setBall (0);
    }else{
        setBall(ball+1)
    }
}
    const hit =() => {
        
        setStrike (0);
        setBall (0);
    } 
const foul = () => {
    if (strike < 2) {
        setStrike(strike+1)
    }
}

    return (
        <div>
        
            <h2>Strike: {strike}</h2>
            <h2>Ball: {ball}</h2>
            <Dashboard  strike = {strike} strikeCheck = {strikeCheck}  hit = {hit} foul = {foul} ballCheck = {ballCheck}/>
        
        
        </div>
    )
}

export default Display