import React, { Component } from 'react';
import { addData } from './Api';

import history from '../history';

import './../CssFiles/Adduser.css';

class Adduser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      loading: false,
    };
    this.setValue = this.setValue.bind(this);
    this.addData = this.addData.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  setValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addData() {
    this.setState({ loading: true });
    addData(this.state.fname, this.state.lname);
    this.setState({ loading: false });
  }

  cancel() {
    this.setState({ fname: '', lname: '' });
    history.push('/');
  }

  render() {
    const { fname, lname } = this.state;
    return (
      <div>
        <b className='form'> Add User</b><br /><br />
        <div className='form'>
          <p> Name : </p>
          <p>
            <input type='text' name='fname' value={fname} placeholder='Enter First Name' onChange={e => this.setValue(e)} />
          </p>
          <p> Job : </p>
          <p>
            <input type='text' name='lname' value={lname} placeholder='Enter Last Name' onChange={e => this.setValue(e)} />
          </p>
          <p>
            <button className='submit' onClick={this.addData}>
              {this.state.loading ? 'Please wait...' : 'Submit'}
            </button>
            <button className='cancel' onClick={this.cancel}>cancel</button></p>
        </div>
      </div>
    );
  }
}
export default Adduser;