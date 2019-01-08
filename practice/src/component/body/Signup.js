import React, { Component } from 'react';
import './../../App.css';

class Signup extends Component {

  render() {
    return (
      <div id='form'>
          <h1>Sign up</h1>
          <p><input type="text" name="fname" placeholder="Enter First Name" onChange = {e=>this.props.setValue(e.target.value,'fname','form1')}></input></p>
          <p><input type="text" name="lname" placeholder="Enter Last Name" onChange = {e=>this.props.setValue(e.target.value,'lname','form1')}></input></p>
          <p><input type="email" name="email" placeholder="Enter Email" onChange = {e=>this.props.setValue(e.target.value,'email','form1')}></input></p>
          <p><input type="password" name="password" placeholder="Enter Password" onChange = {e=>this.props.setValue(e.target.value,'password','form1')}></input></p>
          <p><button onClick={e=>this.props.onClick(e)}>Signup</button></p>
      </div>
    );
  }
}

export default Signup;
