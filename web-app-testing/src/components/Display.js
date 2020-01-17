import React from 'react';

import styled from 'styled-components';

function Display(props) {
  return(
  <div className="dashboard">
    <div className="strike">
      STRIKE: {props.strike}
    </div>

    <div className="ball">
      BALL: {props.ball}
    </div>

    <div className="foul">
      FOUL: {props.foul}
    </div>
  </div>
  )}

  export default Display;