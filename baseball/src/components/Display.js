import React from 'react';

export default function Display(props) {

   const {balls, strikes} = props;

   return (
      <div className="topRow">
         <div className="home">
            <h2 className="home__name">Balls</h2>
            <div className="home__score">{balls}</div>
         </div>

         <div className="away">
            <h2 className="away__name">Strikes</h2>
            <div className="away__score">{strikes}</div>
         </div>
      </div>
   );

}

