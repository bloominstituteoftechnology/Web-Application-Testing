import React, {useState} from 'react';


export const addStrikes = currentStrikes =>{
    if (currentStrikes >=2) {
        return 0;
    }
    else{
        return currentStrikes + 1;
    }
};

export const addBallCount = currentBall =>{
    if(currentBall>=3){
        return 0;
    }
    else{
        return currentBall + 1;
    }
};

export const addFouls = currentFouls =>{
    if(currentStrikes >= 2){
        return currentStrikes;
    }
    else{
        return currentStrikes + 1;
    }
};

export const hits = currentValue =>{
    return (currentValue = 0);
};

function Dashboard(){
    const [strikes, setStrikes]=useState(0);
    const [ball, setBall]=useState(0);
    return(
        <div>
            <button
            className='strike-button'
             onClick={()=>setStrikes(addStrikes(strikes))}>Strike</button>

            <button
            className='ballcount-button'
            onClick={()=>setBall(addBallCount(balls))}>Ball</button>

            <button
            className='foul-button'
            onClick={()=>setStrikes(addFouls(strikes))}>Foul</button>

            <button
            className='hit-button'
            onClick={hits(strikes), setBall(hit(ball))}>Hit</button>
        </div>
    );
}

export default Dashboard;