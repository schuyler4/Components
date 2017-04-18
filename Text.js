import React from 'react';

function Text(props) {
  const style = {
    fontFamily: 'arial',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    fontSize: props.size,
    wordWrap: 'break-word'
  }

  return <p style={style}>{props.value}</p>;
}

export default Text;
