import React, { Component } from 'react';

class Login extends Component {
   
    render(){

        return(
            <div id='signup'>
            <h1>Login</h1>
            <p><input type="email" name="email" placeholder="Enter email" onChange={e=>this.props.setValue(e.target.value,'email','form2')}></input></p>
            <p><input type="password" name="password" placeholder="Enter Password" onChange={e=>this.props.setValue(e.target.value,'password','form2')}></input> </p>
            <p><button onClick={e=>this.props.onClick(e)}>Login</button></p>
            </div>
            );
        }
    }
    export default Login;