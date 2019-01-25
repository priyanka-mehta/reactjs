import React, { Component } from 'react';
import './../../App.css';
import Input from './Input';

class Signup extends Component {

  render() {
    return (
      <div id='form'>
        <h1>Sign up</h1>
        <p><Input id="fname" type="text" name="fname" placeholder="Enter First Name" onChange={e => this.props.setValue('fname', e.target.value, 'form1')} /></p>
        <p><Input id="lname" type="text" name="lname" placeholder="Enter Last Name" onChange={e => this.props.setValue('lname', e.target.value, 'form1')} /></p>
        <p><Input id="Email" type="email" name="email" placeholder="Enter Email" onChange={e => this.props.setValue('email', e.target.value, 'form1')} /></p>
        <p><Input id="pwd" type="password" name="password" placeholder="Enter Password" onChange={e => this.props.setValue('password', e.target.value, 'form1')} /></p>
        <p><button onClick={e => this.props.onClick(e)}>Signup</button></p>
      </div>
    );
  }
}

export default Signup;
