import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

class Delete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      delete: false,
      cancel: false,
    };
    this.deleteRecord = this.deleteRecord.bind(this);
    this.isDelete = this.isDelete.bind(this);
  }

  componentDidMount() {
    this.isDelete();
  }

  deleteRecord() {
    axios.delete(`https://reqres.in/api/users/${this.props.match.params.id}`)
      .then((res) => {
        console.log('User deleted : ', res);
        this.setState({ delete: true });
      }).catch((err) => {
        console.log("Error : ", err);
      });
  }

  isDelete() {
    console.log("dele");
    if (window.confirm('Are you sure you wish to delete this user?')) {
      this.deleteRecord();
    } else {
      this.setState({ cancel: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.delete ? <Redirect to='/' /> : null}
        {this.state.cancel ? <Redirect to='/' /> : null}
      </div>
    );
  }
}

Delete.propTypes = {
  match: PropTypes.object,
};

export default Delete;