import React from 'react';

const styles = {
  div: {
    width: '100%',
    backgroundColor: '#ff5050',
    fontFamily: 'arial',
    padding: 0,
    color: 'white'
  },
  h1: {
    marginLeft: 20
  }
}

function Header(props) {
  const { div, h1 } = styles
  return (
    <div style={div}>
      <h1 style={h1}>
        {props.title}
      </h1>
    </div>
  );
};


export default Header;
