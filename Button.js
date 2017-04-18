import React, { Component } from 'react';

const style = {
  backgroundColor: '#ff5050',
  color: 'white',
  height: 40,
  fontFamily: 'arial',
  fontWeight: 'bold',
  fontSize: 15,
  margin: 10,
  border: 'none',
  minWidth: 50
}

const overStyle = Object.assign({}, style, {backgroundColor: '#cc0000'})

class Button extends Component {
  constructor() {
    super();
    this.state = { style }
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({style: overStyle});
  }

  mouseOut() {
    this.setState({ style });
  }

  render() {
    return <button
      style={this.state.style}
      onClick={this.props.onClick}
      onMouseOver={this.mouseOver}
      onMouseOut={this.mouseOut}>
      {this.props.text}
    </button>;
  }
}

export default Button;
