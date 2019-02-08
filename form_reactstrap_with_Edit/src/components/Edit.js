import React, { Component } from 'react';
import InputComponent from './signup/InputComponent';
import { Button, Container, Table, InputGroupAddon, InputGroup, FormGroup } from 'reactstrap';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      gender: '',
      number: '',
      hobbies: [],
    };
    this.setValue = this.setValue.bind(this);
  }

  onSubmit() {
    console.log(this.state);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      fname: nextProps.data.fname,
      lname: nextProps.data.lname,
      number: nextProps.data.number,
      email: nextProps.data.email,
      address: nextProps.data.address,
      gender: nextProps.data.gender,

    });
  }
  setValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // const { fname, email, number, lname, gender, address } = this.props.data;
    // console.log(this.props.data.fname);
    return (
      <div>
        <Container style={{ 'inlineSize': '40%', 'marginTop': '1%' }}>
          <Table bordered>
            <tbody>

              <tr>
                <th colSpan='2'><h4><center>Edit Form</center></h4></th>
              </tr>

              <tr>
                <td>
                  <InputComponent
                    style={{ 'inlineSize': '100%' }}
                    type="text"
                    className="signup"
                    name="fname"
                    placeholder="Enter First Name"
                    value={this.state.fname}
                    onChange={e => this.setValue(e)}
                  />
                </td>
                <td>
                  <InputComponent
                    style={{ 'inlineSize': '100%' }}
                    type="text"
                    className="signup"
                    name="lname"
                    placeholder="Enter Last Name"
                    value={this.state.lname}
                    onChange={e => this.setValue(e)}
                  />

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
                      value={this.state.number}
                      onChange={e => this.setValue(e)}
                    />

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
                      value={this.state.email}
                      onChange={e => this.setValue(e)}
                    />
                    <InputGroupAddon style={{ 'inlineSize': '30%' }} addonType="append">@gmail.com</InputGroupAddon>

                  </InputGroup>
                </td>
              </tr>

              <tr>
                <td colSpan='2'>
                  <textarea
                    style={{ 'inlineSize': '100%' }}
                    type="textarea"
                    rows="4"
                    cols="43"
                    className="signup"
                    name="address"
                    placeholder="Enter Address"
                    value={this.state.address}
                    onChange={e => this.setValue(e)}
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
                      value={this.state.gender}
                      onChange={e => this.setValue(e)}
                      checked={this.state.gender === 'male'}
                    />Male

                    <InputComponent
                      type="radio"
                      className="signup"
                      name="gender"
                      value={this.state.gender}
                      onChange={e => this.setValue(e)}
                      checked={this.state.gender === 'female'}
                    />Female
                  </FormGroup>
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
                    onChange={e => this.setValue(e)}
                  />Singing
                  <InputComponent
                    type="checkbox"
                    className="signup"
                    name="hobbies"
                    value="Dancing"
                    onChange={e => this.setValue(e)}
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

export default Edit;