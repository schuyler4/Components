import React from 'react';

function Card(props) {
  const style = {
    width: props.width,
    minHeight: props.height,
    backgroundColor: '#d8d8d8',
    margin: 10
  }

  return (
    <div style={style} >
      {props.children}
    </div>
  );
}

export default Card;
