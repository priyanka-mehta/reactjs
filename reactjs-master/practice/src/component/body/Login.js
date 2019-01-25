import React, { Component } from 'react';
import Input from './Input';

class Login extends Component {

    render() {
        return (
            <div id='form'>
                <h1>Login</h1>
                <p><Input id="email" type="email" name="email" placeholder="Enter Email" onChange={e => this.props.setValue('email', e.target.value, 'form2')} /></p>
                <p><Input id="password" type="password" name="password" onChange={e => this.props.setValue('password', e.target.value, 'form2')} /> </p>
                <p><button onClick={e => this.props.onClick(e)}> Login </button></p>
            </div>
        );
    }
}
export default Login;