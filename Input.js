import React from 'react';

const style = {
  margin: 10,
  width: 250,
  height: 30,
  borderSize: 5,
  borderRight: 'none',
  borderLeft: 'none',
  borderTop: 'none',
  borderColor: '#ff5050',
  fontSize: 25,
  userSelect: 'none',
  buttonFocus: 0,
  color: 'black'
}

function Input(props) {
  return (
    <input
      style={style}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value} />
  )
}

export default Input;
