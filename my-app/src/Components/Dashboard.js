import React from 'react';




const Dashboard = props => {

console.log(props);





    return (

        <>
   
        <button onClick ={props.strikeCheck}>strike</button>
      <button onClick = {props.hit}>Hit</button>

        </>
    )
}


export default Dashboard