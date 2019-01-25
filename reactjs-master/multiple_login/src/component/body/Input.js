import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <input
                type={this.props.type}
                className={this.props.className}
                name={this.props.name}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
            />
        );
    }
}

export default Input;
