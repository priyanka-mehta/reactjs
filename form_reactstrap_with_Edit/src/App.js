import React, { Component } from 'react';
import Signup from './components/signup/Signup';
import { NavLink } from 'react-router-dom';
import Edit from './components/Edit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        gender: '',
        number: '',
        hobbies: [],
      },
      edit: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        gender: '',
        number: '',
        hobbies: [],
      },
      user: [],
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
    this.onChangeHobbies = this.onChangeHobbies.bind(this);
  }

  passwordCheck() {
    if (this.state.signup.password === this.state.signup.confirmPassword) {
      console.log("Password match");
    }
    else {
      alert("Password not match");
    }
  }

  onSubmit() {
    if (this.validate()) {
      if (this.state.signup.password === this.state.signup.confirmPassword) {
        let array = this.state.user.concat(this.state.signup);
        this.setState({ user: array });
        let edit = this.state.signup;
        this.setState({ edit: edit })
        alert('User Registered successfully');
       
      }
      else {
        alert('Password not match');
      }
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

  onChangeHobbies(e) {
    let signup = { ...this.state.signup };
    signup[e.target.name] = [...this.state.signup.hobbies, e.target.value];
    this.setState({ signup });
  }

  onChange(e) {
    const obj = { ...this.state[e.target.className], [e.target.name]: e.target.value };
    this.setState({ [e.target.className]: obj });
  }

  render() {
    return (
      <div>
        <Signup setValue={this.onChange} onSubmit={this.onSubmit} data={this.state.signup} passwordCheck={this.passwordCheck} onChangeHobbies={this.onChangeHobbies} />
        <NavLink to={`/Edit`} className='link1'>Edit</NavLink>
        <Edit data={this.state.edit} />
      </div>
    );
  }
}
export default App;