import React, { Fragment } from "react";

const display = props => {
  // console.log(props);
  return (
    <Fragment>
      <ul>
        <li>Strikes: {props.strike}</li>
        <li>Balls: {props.ball}</li>
        <li>Hits: {props.hit}</li>
      </ul>
    </Fragment>
  );
};

export default display;
