import React from 'react';




const Dashboard = props => {

console.log(props);





    return (

        <>
   
        <button onClick ={props.strikeCheck}>strike</button>
        <button onClick = {props.hit}>Hit</button>
        <button onClick = {props.foul}>foul</button>
        <button onClick = {props.ballCheck}>Ball</button>
        </>
    )
}


export default Dashboard