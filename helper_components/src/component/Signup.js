import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { SignupAction } from '../actions';
import { Input } from './CommonComponent/Input';

const initForm = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {}
}

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: _.cloneDeep(initForm)
    }
  }

  handleChange(path, value) {
    let data = this.state;
    _.set(data, path, value);
    this.setState({ ...data })
  }

  onSubmit() {
    this.props.dispatch(SignupAction(this.state.form))
    this.setState({ form: { ...initForm } })
  }

  render() {
    const { fname, lname, email, password, confirmPassword } = this.state.form;
    return (
      <div>
        <div className="container" style={{ border: '1px solid #cecece', width: '600px' }}>
          <div className="form-row">
            <Input
              name='fname'
              label="First Name"
              value={fname}
              onChange={(e) => this.handleChange('form.fname', e.target.value)}
            />
            <Input
              name='lname'
              label="Last Name"
              value={lname}
              onChange={(e) => this.handleChange('form.lname', e.target.value)}
            />
          </div>
          <div className="form-row">
            <Input
              label='Email'
              type='email'
              value={email}
              inputGroupClass='form-group col-md-12'
              onChange={(e) => this.handleChange('form.email', e.target.value)}
            />
          </div>
          <div className="form-row">
            <Input
              type='password'
              label='Password'
              value={password}
              onChange={(e) => this.handleChange('form.password', e.target.value)}
            />
            <Input
              type='confirmPassword'
              label='Confirm Password'
              value={confirmPassword}
              onChange={(e) => this.handleChange('form.confirmPassword', e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={() => this.onSubmit()}>Signup</button>
        </div>
      </div>
    )
  }
}
export default connect(SignupAction)(Signup);