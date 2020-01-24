import React from 'react';

const Display = ({ balls, strikes }) => {
   return(
      <div>
         <h3>Display</h3>
         <div className='at-bat-data'>
            <p>Strikes: {strikes}</p>
            <p>Balls: {balls}</p>         
         </div>
      </div>
   )
}

export default Display;
