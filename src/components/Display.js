import React from 'react';

const Display = ({ balls, strikes, atBat }) => {
   return(
      <div>
         <div className='at-bat-data'>
            <h3>At Bat: {atBat}</h3>
            <p>Strikes: {strikes}</p>
            <p>Balls: {balls}</p>         
         </div>
      </div>
   )
}

export default Display;
