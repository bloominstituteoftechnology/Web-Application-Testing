import React from "react";

const buttonStyle = {
  width: '150px',
  height: '40px',
  background: '#03DAC6',
  borderRadius: '5px'
}

const Button = props => {

  console.log(props);
  return (
    <>
      <button onClick={props.function} style={buttonStyle}>Add {props.name}!</button>
    </>
  )
}

export default Button;