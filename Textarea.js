import React from 'react';

const styles = {
  div: {
    marginLeft: 10
  },
  textarea: {
    borderWidth: 2,
    borderColor: '#ff5050',
    width: 250,
    height: 100,
    resize: 'none',
    textColor: '#14141f'
  }
}

function Textarea(props) {
  const { div, textarea } = styles
  return (
    <div style={div}>
      <textarea
        style={textarea}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}>
      </textarea>
    </div>
  );
}

export default Textarea;
