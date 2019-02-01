import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addUser } from './../API/UserApi';
import { getUser } from './../API/UserApi';
import { editUser } from './../API/UserApi';

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
    this.addUser = this.addUser.bind(this);
    this.cancel = this.cancel.bind(this);
    this.getUser = this.getUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id == true) {
      this.getUser();
    }
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

  setValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addUser() {
    this.setState({ loading: true });
    addUser(this.state.fname, this.state.lname)
      .then(res => {
        this.setState({ loading: false });
      });
  }

  editUser() {
    this.setState({ loading: true });
    editUser(this.state.fname, this.state.lname)
      .then(res => {
        this.setState({ loading: false });
      });
  }

  cancel() {
    history.push('/');
  }

  render() {
    const { fname, lname, avatar, loading } = this.state;
    return (
      <div>
        {this.props.match.path === '/add' ? <b className='form'>Add user</b> : <b className='form'> Edit user</b>}
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
          <div>
            <p>
              {this.props.match.path === '/add' ?
                <button className='submit' onClick={this.addUser}>
                  {loading ? 'Please wait...' : 'Add user'}
                </button>
                :
                <button className='submit' onClick={this.editUser}>
                  {loading ? 'Please wait...' : 'Edit'}
                </button>
              }
              <button className='cancel' onClick={this.cancel}>cancel</button>
            </p>
          </div>
        </div >
      </div>
    );
  }
}

Addedit.propTypes = {
  match: PropTypes.object,
};
export default Addedit;