import React, { Component } from 'react';

class InputComponent extends Component {
  render() {
    return (
      <input
        style={this.props.style}
        type={this.props.type}
        className={this.props.className}
        name={this.props.name}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onBlur={this.props.onBlur}
        onChange={this.props.onChange}
        checked={this.props.checked}
      />
    );
  }
}

export default InputComponent;
