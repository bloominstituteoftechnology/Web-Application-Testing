import React from 'react';

const Display = props => {
   const {balls, strikes } = props;
   return(
     <>
        <h3>Counts</h3>
        <div>
           {balls} balls and {strikes} strikes
        </div>
     </>
   );
}

export default Display;
