import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addData } from '../API/UserApi';
import { getUser } from '../API/UserApi';

import history from '../history';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      avatar: '',
      loading: false,
    };
    this.getUser = this.getUser.bind(this);
    this.addData = this.addData.bind(this);
    this.setValue = this.setValue.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  setValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addData() {
    this.setState({ loading: true });
    addData(this.state.fname, this.state.lname);
    this.setState({ loading: false });
  }

  getUser() {
    getUser(this.props.match.params.id)
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

  cancel() {
    history.push('/');
  }

  render() {
    const { fname, lname, avatar, loading } = this.state;
    return (
      <div>
        <b className='form'> Edit User</b>
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
          <p>Avatar : </p>
          <p>
            <img src={avatar} alt="Profile" width="90px" height="90px" />
          </p>
          <p>
            <button className='submit' onClick={this.addData}> {loading ? 'Please wait...' : 'Edit'}</button>
            <button className='cancel' onClick={this.cancel}>Cancel</button>
          </p>
        </div>
      </div>
    );
  }
}

Edit.propTypes = {
  match: PropTypes.object,
};

export default Edit;