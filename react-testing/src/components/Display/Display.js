import React from 'react';

const Display = props => {
   const {balls, strikes } = props;
   return(
     <>
        <h1 data-testid='header'>Counts</h1>
        <div>
          <h1 data-testid='ball'> Balls:{balls}</h1>
          <h1 data-testid='strike'> Strikes:{strikes}</h1>
        </div>
     </>
   ); 
}

export default Display;
