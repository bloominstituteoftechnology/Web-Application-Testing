import React from 'react';

const Dashboard =(props) =>{
    const {strikes, setStrikes, balls, setBalls,}= props;
    const handleStrike = e =>{
        e.preventDefault();
        console.log('STRIKE', strikes);
        if(strikes >= 2){
            setStrikes(0)
            setBalls(0)
            console.log('STRIKE 3 YOUR OUT')
        } else{
            setStrikes(strikes + 1)
        }
    }

   const handleBalls =e =>{
        e.preventDefault();
        console.log('ball', balls)
        if(balls >= 3){
            setStrikes(0)
            setBalls(0)
        }else{
            setBalls(balls + 1)
        }
    }

    const handleFouls = e =>{
        e.preventDefault();
        if(strikes < 2){
            setStrikes(strikes + 1);
        }
    }
    
    const handleHits = e =>{
        e.preventDefault();
        setStrikes(0);
        setBalls(0)
    }


    return(
        <div>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleBalls}>Ball</button>
            <button onClick={handleFouls}>Foul</button>
            <button onClick={handleHits}>Hit</button>
        </div>
    )
}
export default Dashboard;