import React, { Component } from 'react';

import { onSubmit } from './../submitValidation';
import { reValidation } from '../reValidation';

import CheckboxComponent from '../CheckboxComponent';
import InputComponent from '../InputComponent';
import TextareaComponent from '../TextareaComponent';
import RadioComponent from '../RadioComponent';

import { Button, Container, Row, Col } from 'reactstrap';

import { signup } from './style';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        gender: '',
        number: '',
        hobbies: [],
        country: [],
      },
      user: [],
      error: {},
      radio: [
        {
          id: 1,
          value: "female",
          name: "gender",
          label: "Female"
        },
        {
          id: 2,
          value: "male",
          name: "gender",
          label: "Male"
        }
      ],
      checkbox: [
        {
          id: 1,
          value: "singing",
          name: "hobbies",
          label: "Singing"
        },
        {
          id: 2,
          value: "dancing",
          name: "hobbies",
          label: "Dancing"
        },
      ],
      confirmPasswordErr: null,
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeHobbies = this.onChangeHobbies.bind(this);
    this.isValidation = this.isValidation.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.edit = this.edit.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
  }

  onChangeCountry(Country) {
    this.setState({ signup: { Country } });
  }

  onChange(name, value) {
    this.setState({ signup: { ...this.state.signup, [name]: value } });
  }

  onChangeHobbies(e) {
    let signup = { ...this.state.signup };
    signup[e.target.name] = [...this.state.signup.hobbies, e.target.value];
    this.setState({ signup });
  }

  isValidation(name, value) {
    let validation = reValidation(name, value)
    this.setState({ error: { ...this.state.error, [name]: validation } })
  }

  validateEmail() {
    let valid = true;
    for (let i = 0; i < this.state.user.length; i++) {
      if (this.state.user[i].email === this.state.signup.email) {
        valid = false;
      }
      else { valid = true }
    }
    return valid;
  }

  passwordCheck() {
    if (this.state.signup.password === this.state.signup.confirmPassword) {
      this.setState({ confirmPasswordErr: true })
    }
    else {
      this.setState({ confirmPasswordErr: false })
    }
  }

  onSubmit(e) {
    let errorFound = onSubmit(this.state.signup, this.state.error);
    if (errorFound) {
      this.setState({ error: errorFound });
    }
    else if (this.validateEmail()) {
      if (this.state.signup.password === this.state.signup.confirmPassword) {
        let array = this.state.user.concat(this.state.signup);
        this.setState({ user: array });
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

  edit() {
    this.setState({
      signup: {
        name: 'Priyanka',
        email: 'priyanka@gmail.com',
        password: 'Priyanka@123',
        confirmPassword: 'Priyanka@123',
        address: 'Gandhidham',
        gender: 'female',
        number: '9426521497',
        hobbies: 'singing',
      }
    })
    console.log(this.state.signup);
  }

  render() {
    const { name, number, email, password, confirmPassword, address } = this.state.signup;
    return (
      <div>
        <Container style={signup}>
          <Row>
            <Col><h1><u>Registration Form</u></h1></Col>
          </Row>
          <hr />
          <Row>
            <Col>Full Name</Col>
          </Row>
          <Row>
            <Col>
              <InputComponent
                type="text"
                className="signup"
                name="name"
                placeholder="Enter First Name"
                value={name}
                onBlur={(e) => this.isValidation(e.target.name, e.target.value)}
                onChange={(e) => this.onChange(e.target.name, e.target.value)}
              />
              {this.state.error.name ? <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>{this.state.error.name}</span></div> : null}
            </Col>
          </Row>

          <Row>
            <Col>Contact Number</Col>
          </Row>
          <Row>
            <Col>
              <InputComponent
                type="number"
                className="signup"
                name="number"
                placeholder="Enter Contact Number"
                value={number}
                onBlur={(e) => this.isValidation(e.target.name, e.target.value)}
                onChange={(e) => this.onChange(e.target.name, e.target.value)}
              />
              {this.state.error.number ? <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>{this.state.error.number}</span></div> : null}
            </Col>
          </Row>
          <Row>
            <Col>Address</Col>
          </Row>
          <Row>
            <Col>
              <TextareaComponent
                rows="4"
                cols="20"
                className="signup"
                name="address"
                placeholder="Enter Address"
                value={address}
                onChange={e => this.onChange(e.target.name, e.target.value)}
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>Email id</Col></Row><Row>
            <Col>
              <InputComponent
                type="email"
                className="signup"
                name="email"
                placeholder="Enter Email"
                value={email}
                onBlur={(e) => this.isValidation(e.target.name, e.target.value)}
                onChange={(e) => this.onChange(e.target.name, e.target.value)}
              />
              {this.state.error.email ? <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>{this.state.error.email}</span></div> : null}
            </Col>
          </Row>

          <Row>
            <Col>Password</Col>
          </Row>
          <Row>
            <Col>
              <InputComponent
                type="password"
                className="signup"
                name="password"
                placeholder="Enter Password"
                value={password}
                onBlur={(e) => this.isValidation(e.target.name, e.target.value)}
                onChange={(e) => this.onChange(e.target.name, e.target.value)}
              />
              {this.state.error.password ? <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>{this.state.error.password}</span></div> : null}
            </Col>
          </Row>

          <Row>
            <Col>Confirm Password</Col>
          </Row>
          <Row>
            <Col>
              <InputComponent
                type="password"
                className="signup"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onBlur={(e) => this.passwordCheck(e)}
                onChange={(e) => this.onChange(e.target.name, e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.confirmPasswordErr === false ? <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Password and confirm Password must match</span></div> : null}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>Gender</Col>
          </Row>
          <Row>
            <Col>
              <RadioComponent
                radio={this.state.radio}
                onBlur={(e) => this.isValidation(e.target.name, e.target.value)}
                onChange={e => this.onChange(e.target.name, e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.error.gender ? <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>{this.state.error.gender}</span></div> : null}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm='2'>Hobbies</Col>
          </Row>
          <Row>
            <Col>
              <CheckboxComponent
                checkbox={this.state.checkbox}
                onChange={e => this.onChangeHobbies(e)}
              />
            </Col>
            {this.state.error.hobbies ? <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>{this.state.error.hobbies}</span></div> : null}
          </Row>
          <hr />

          <Row>
            <Col sm='2'>
              <Button color='secondary' id="button" onClick={() => this.onSubmit()}>Signup</Button><br />
            </Col>
            <Col sm='2'>
              <Button color='secondary' id="edit" onClick={e => this.edit(e)}>Edit</Button><br />
            </Col>
          </Row>
          <hr />
        </Container>
      </div>
    );
  }
}
export default Signup;