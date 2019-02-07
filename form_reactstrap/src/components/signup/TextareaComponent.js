import React, { Component } from 'react';

class TextareaComponent extends Component {
  render() {
    return (
      <textarea
        style={this.props.style}
        rows={this.props.rows}
        cols={this.props.cols}
        className={this.props.className}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}

      />
    );
  }
}

export default TextareaComponent;
