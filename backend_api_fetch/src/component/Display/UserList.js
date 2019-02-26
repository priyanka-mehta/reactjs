import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import history from '../../history';

import './UserList.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: false,
      searchResult: ''
    }
  }

  getRecord() {
    this.setState({ loading: true });
    axios.get('http://localhost:8080/api/students/list')
      .then(res => {
        return res.data;
      })
      .then(res => {
        this.setState({ userList: res.data || [], loading: false })
      })
  }
  componentDidMount() {
    this.getRecord();
  }

  deleteRecord(id) {
    axios.delete(`http://localhost:8080/api/students/delete/${id}`)
      .then(res => {
        this.setState({ delete: true }, () => this.getRecord());
        history.push('/');
      })
      .catch(function (error) {
        console.log("something went wrong");
      });
  }

  setValue(e) {
    this.setState({ searchResult: e.target.value })
  }

  searchRecord() {
    axios.get(`http://localhost:8080/api/students/list?search=` + this.state.searchResult)
      .then(res => {
        this.setState({ userList: res.data.data })
        return res;
      })
  }

  render() {
    return (
      <div className='App'>
        <hr />
        Search :
        <input
          type='search'
          name='search'
          value={this.state.searchResult}
          onChange={e => this.setValue(e)}
          onBlur={() => this.searchRecord()}
        />
        <hr />
        {this.state.loading ? <b>Loading...</b> : null}
        {this.state.userList.map((u, i) => {
          return <div key={i}>
            First Name : {u.fname}<br />
            Last Name : {u.lname}<br />
            Email : {u.email}<br />
            Age : {u.age} <br />
            Mobile : {u.mobile}<br />
            <NavLink to={`/edit/${u.id}`} className='link1'>Edit</NavLink><br />
            <NavLink to={`/delete/${u.id}`} onClick={() => this.deleteRecord(u.id)} className='link1'>Delete</NavLink>
            <hr />
            <hr />
          </div>
        })}
      </div>
    );
  }
}

export default UserList;