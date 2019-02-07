import React, { Component } from 'react';
import InputComponent from './InputComponent';
import TextareaComponent from './TextareaComponent';
import { Button, Container, Table, InputGroupAddon, InputGroup, FormGroup } from 'reactstrap';
import './../css_files/Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidEmail: true,
      isValidNumber: true,
      isValidFname: true,
      isValidPassword: true,
      isValidLname: true,
      isValidGender: true
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validateNumber = this.validateNumber.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  validateEmail(e) {
    const email = e.target.value;
    let isValid = false;
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = re.test(String(email).toLowerCase());

    this.setState({ isValidEmail: isValid });
  }

  validateNumber(e) {
    const number = e.target.value;
    let isValid = false;
    var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    isValid = re.test(String(number).toLowerCase());
    this.setState({ isValidNumber: isValid });
  }

  validateName(e) {
    if (e.target.name === 'fname') {
      const name = e.target.value;
      let isValid = false;
      var fname = /^[a-z ,.'-]+$/i;
      isValid = fname.test(String(name).toLowerCase());
      this.setState({ isValidFname: isValid });
    }
    if (e.target.name === 'lname') {
      const name = e.target.value;
      let isValid = false;
      var lname = /^[a-z ,.'-]+$/i;
      isValid = lname.test(String(name).toLowerCase());
      this.setState({ isValidLname: isValid });
    }
  }

  validatePassword(e) {
    const password = e.target.value;
    let isValid = false;
    var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    isValid = re.test(String(password).toLowerCase());
    this.setState({ isValidPassword: isValid });
  }

  onSubmit(e) {
    const { fname, email, number, password, lname, gender } = this.props.data;
    if (fname === '') {
      this.setState({ isValidFname: false });
    }
    if (lname === '') {
      this.setState({ isValidLname: false });
    }
    if (email === '') {
      this.setState({ isValidEmail: false });
    }
    if (password === '') {
      this.setState({ isValidPassword: false });
    }
    if (number === '') {
      this.setState({ isValidNumber: false });
    }
    if (gender === '') {
      this.setState({ isValidGender: false })
    }
    else {
      this.props.onSubmit();
    }
  }

  render() {
    const { isValidEmail, isValidNumber, isValidFname, isValidPassword, isValidLname, isValidGender } = this.state;
    return (
      <div>
        <Container style={{ 'inlineSize': '40%', 'marginTop': '1%' }}>
          <Table bordered>
            <tbody>

              <tr>
                <th colSpan='2'><h1><b><center>Registration Form</center></b></h1></th>
              </tr>

              <tr>
                <td>
                  <InputComponent
                    style={{ 'inlineSize': '100%' }}
                    type="text"
                    className="signup"
                    name="fname"
                    placeholder="Enter First Name"
                    value={this.props.value}
                    onBlur={this.validateName}
                    onChange={e => this.props.setValue(e)}
                  />
                  {isValidFname ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter valid name</span><br /></div>}
                </td>
                <td>
                  <InputComponent
                    style={{ 'inlineSize': '100%' }}
                    type="text"
                    className="signup"
                    name="lname"
                    placeholder="Enter Last Name"
                    value={this.props.value}
                    onBlur={this.validateName}
                    onChange={e => this.props.setValue(e)}
                  />
                  {isValidLname ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter valid name</span><br /></div>}
                </td>
              </tr>

              <tr>
                <td colSpan='2'>
                  <InputGroup>
                    <InputComponent
                      style={{ 'inlineSize': '100%' }}
                      type="number"
                      className="signup"
                      name="number"
                      placeholder="Enter Contact Number"
                      value={this.props.value}
                      onBlur={this.validateNumber}
                      onChange={e => this.props.setValue(e)}
                    />
                    {isValidNumber ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter valid 10 digit Number</span><br /></div>}
                  </InputGroup>
                </td>
              </tr>

              <tr>
                <td colSpan='2'>
                  <InputGroup>
                    <InputComponent
                      style={{ 'inlineSize': '60%' }}
                      type="email"
                      className="signup"
                      name="email"
                      placeholder="Enter Email"
                      value={this.props.value}
                      onBlur={this.validateEmail}
                      onChange={e => this.props.setValue(e)}
                    />
                    <InputGroupAddon style={{ 'inlineSize': '30%' }} addonType="append">@gmail.com</InputGroupAddon>
                    {isValidEmail ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter valid email.</span><br /></div>}
                  </InputGroup>
                </td>
              </tr>

              <tr>
                <td>
                  <InputComponent
                    style={{ 'inlineSize': '100%' }}
                    type="password"
                    className="signup"
                    name="password"
                    placeholder="Enter Password"
                    value={this.props.value}
                    onBlur={this.validatePassword}
                    onChange={e => this.props.setValue(e)}
                  />
                  {isValidPassword ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Password must contain 6 characters,<br />1 number and 1 special character</span><br /></div>}
                </td>
                <td>
                  <InputComponent
                    style={{ 'inlineSize': '100%' }}
                    type="password"
                    className="signup"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={this.props.value}
                    onBlur={e => this.props.passwordCheck()}
                    onChange={e => this.props.setValue(e)}
                  />
                </td>
              </tr>

              <tr>
                <td colSpan='2'>
                  <TextareaComponent
                    style={{ 'inlineSize': '100%' }}
                    rows="4"
                    cols="43"
                    className="signup"
                    name="address"
                    placeholder="Enter Address"
                    value={this.props.value}
                    onChange={e => this.props.setValue(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>
                  <FormGroup>
                    <InputComponent
                      type="radio"
                      className="signup"
                      name="gender"
                      value="male"
                      onChange={e => this.props.setValue(e)}
                    />Male

                    <InputComponent
                      type="radio"
                      className="signup"
                      name="gender"
                      value="female"
                      onChange={e => this.props.setValue(e)}
                    />Female
                  </FormGroup>
                  {isValidGender ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please Select Gender</span><br /></div>}
                </td>

              </tr>

              <tr>
                <td>Hobbies</td>
                <td>
                  <InputComponent
                    type="checkbox"
                    className="signup"
                    name="hobbies"
                    value="Singing"
                    onChange={e => this.props.onChangeHobbies(e)}
                  />Singing
                  <InputComponent
                    type="checkbox"
                    className="signup"
                    name="hobbies"
                    value="Dancing"
                    onChange={e => this.props.onChangeHobbies(e)}
                  />Dancing
                </td>
              </tr>

              <tr>
                <td colSpan='2' align='center'>
                  <Button color='secondary' id="button" onClick={() => this.onSubmit()}>Signup</Button><br />
                </td>
              </tr>

            </tbody>

          </Table>
        </Container>
      </div>
    );
  }
}
export default Signup;