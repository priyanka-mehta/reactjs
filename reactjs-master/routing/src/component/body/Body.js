import React, { Component } from 'react';
import Signup from './Signup';
import './../../App.css';
import Signin from './Signin';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: {
        fname: '',
        lname: '',
        email: '',
        password: ''
      },
      user: [],
      signin: {
        email: '',
        password: ''
      }
    }
    this.getValues = this.getValues.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickAction = this.onClickAction.bind(this);
  }

  onClickAction() {
    let valid = '';
    for (let i = 0; i < this.state.user.length; i++) {
      if ((this.state.user[i].email === this.state.signin.email) && (this.state.user[i].password === this.state.signin.password)) {
        valid = 'Welcome User';
        break;
      }
      else {
        valid = 'Invalid Login Crendentials';
        break;
      }
    }
    alert(valid);
  }

  getValues() {
    if (this.validate()) {
      let array = this.state.user.concat(this.state.signup);
      this.setState({ user: array });
      alert('User Registered successfully');
    }
    else {
      alert('User already exists');
    }
  }

  validate() {
    let valid = true;
    for (let i = 0; i < this.state.user.length; i++) {
      if (this.state.user[i].email === this.state.signup.email) {
        valid = false;
      }
      else { valid = true }
    }
    return valid;
  }

  onChange(e) {
    const obj = { ...this.state[e.target.className], [e.target.name]: e.target.value };
    this.setState({ [e.target.className]: obj });
  }

  render() {
    return (
      <div id="App">
        <div id='left'>
          <Signup setValue={this.onChange} getValues={this.getValues} />
        </div>
        <div id='right'>
          <Signin setValue={this.onChange} onClickAction={this.onClickAction} />
        </div>
      </div>
    );
  }
}
export default Body;