import React, { Component } from 'react';

class Input extends Component {

    render() {
        return (
            <input
                id={this.props.id}
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder || this.props.name}
                onChange={this.props.onChange}
            />
        );
    }
}

export default Input;