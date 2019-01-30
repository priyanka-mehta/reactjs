import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addData } from './../API/UserApi';
import { getData } from './../API/UserApi';

import history from '../history';

import './../CssFiles/Addedit.css';

class Addedit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      loading: false,
      avatar: '',
    };
    this.setValue = this.setValue.bind(this);
    this.addData = this.addData.bind(this);
    this.cancel = this.cancel.bind(this);
    this.getData = this.getData.bind(this);
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
    history.push('/');
  }

  componentDidMount() {
    if (this.props.match.path === '/user/:id') {
      this.getData();
    }
  }
  getData() {
    getData(this.props.match.params.id)
      .then(res => {
        if (res.data || res.data.data || res.data.data.data) {
          this.setState(
            {
              loading: false,
              fname: res.data.data.first_name,
              lname: res.data.data.last_name,
              avatar: res.data.data.avatar,
            }
          );
        }
      });
  }

  render() {
    const { fname, lname, avatar, loading } = this.state;
    return (
      <div>
        {this.props.match.path === '/add' ? <b className='form'>Add user</b> :<b className='form'> Edit user</b>}
        <div className='form'>
          <p> Name : </p>
          <p>
            <input
              type='text'
              name='fname'
              value={fname}
              placeholder='Enter First Name'
              onChange={e => this.setValue(e)}
            />
          </p>
          <p> Job : </p>
          <p>
            <input
              type='text'
              name='lname'
              value={lname}
              placeholder='Enter Last Name'
              onChange={e => this.setValue(e)}
            />
          </p>
          <div hidden={this.props.match.path === '/add'}>
            <p >Avatar : </p>
            <p>
              <img src={avatar} alt="Profile" width="90px" height="90px" />
            </p>
          </div>
          <p>
            <button className='submit' onClick={this.addData}>
              {loading ? 'Please wait...' : 'Submit'}
            </button>
            <button className='cancel' onClick={this.cancel}>cancel</button></p>
        </div>
      </div >
    );
  }
}

Addedit.propTypes = {
  match: PropTypes.object,
};
export default Addedit;