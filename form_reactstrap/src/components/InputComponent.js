import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

class InputComponent extends Component {

  render() {
    return (
      <div>
        <Input
          style={this.props.style}
          type={this.props.type}
          className={this.props.className}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onBlur={this.props.onBlur}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

InputComponent.defaultProps = {
  type: 'text',
  placeholder: 'Please write text'
}

InputComponent.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
}

export default InputComponent;