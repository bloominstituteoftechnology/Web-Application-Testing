import React from 'react';

const Display = ({ balls, strikes, atBat }) => {
   return(
      <div>
         <div className='at-bat-data'>
            <h3>At Bat: #{atBat}</h3>
            <p data-testid='strike'>Strikes: {strikes}</p>
            <p data-testid='ball'>Balls: {balls}</p>         
         </div>
      </div>
   )
}

export default Display;
