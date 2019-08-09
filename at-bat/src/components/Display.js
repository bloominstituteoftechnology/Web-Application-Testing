import React from 'react';

 const Display = ({strikes, balls}) => {
  return (
    <div className="display">
      <div>Strikes: {strikes}</div>
      <div>Balls: {balls}</div>
    </div>
  );
};

 export default Display;