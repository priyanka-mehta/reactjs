import React, { Component } from 'react';
import Input from './Input';

class Signin extends Component {
    render() {
        return (
            <div id="form">
            <h1>Login</h1>
                <p>
                    <Input
                        type="text"
                        className="signin"
                        name="email"
                        placeholder="Enter Email"
                        value={this.props.value}
                        onChange={e => this.props.setValue(e)}
                    />
                </p>
                <p>
                    <Input
                        type="text"
                        className="signin"
                        name="password"
                        placeholder="Enter Password"
                        value={this.props.value}
                        onChange={e => this.props.setValue(e)}
                    />
                </p>
                <p>
                    <button id="button" onClick={()=>this.props.onClickAction()}>Login</button>
                </p>
            </div>
        );
    }
}

export default Signin;