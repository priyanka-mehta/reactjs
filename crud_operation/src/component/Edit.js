import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addData } from './Api';
import { getData } from './Api';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      avatar: '',
      loading: false,
    };
    this.getData = this.getData.bind(this);
    this.addData = this.addData.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  setValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addData() {
    this.setState({ loading: true });
    addData(this.state.fname, this.state.lname);
    this.setState({ loading: false });
  }

  getData() {
    this.setState({ loading: true });
    getData(this.props.match.params.id)
      .then(res => {
        this.setState(
          {
            loading: false,
            fname: res.data.data.first_name,
            lname: res.data.data.last_name,
            avatar: res.data.data.avatar,
          }
        );
      });
  }

  // cancel() {
  //   this.setState({ fname: this.state.fname });
  // }

  render() {
    return (
      <div>
        <b className='form'> Edit User</b><br /><br />
        <div className='form'>
          <p> Name : </p>
          <p>
            <input
              type='text'
              name='fname'
              value={this.state.fname}
              placeholder='Enter First Name'
              onChange={e => this.setValue(e)}
            />
          </p>
          <p> Job : </p>
          <p>
            <input
              type='text'
              name='lname'
              value={this.state.lname}
              placeholder='Enter Last Name'
              onChange={e => this.setValue(e)}
            />
          </p>
          <p>Avatar : </p>
          <p>
            <img src={this.state.avatar} alt="Profile" width="90px" height="90px" />
          </p>
          <p>
            <button className='submit' onClick={this.addData}> {this.state.loading ? 'Please wait...' : 'Edit'}</button>
            <button className='cancel'>Cancel</button>
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