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
    const {searchResult,userList,loading}=this.state;
    return (
      <div className='App'>
        <hr />
        <div className='heading'>
          <div className='add'>
            <NavLink exact to='/add' className='link'><span>&#8853;</span></NavLink>
          </div>
          <div className='search'>
            Search :
          <input
              type='search'
              name='search'
              value={searchResult}
              onChange={e => this.setValue(e)}
              onBlur={() => this.searchRecord()}
            />
          </div>
        </div>
        <hr />
        {loading ? <b>Loading...</b> : null}
        <div className='mainTable bottomBorder leftBorder rightBorder'>
          <div className='headingBottom leftBorder topBorder headerData'>
            <div className='tableData rightBorder'>First Name</div>
            <div className='tableData rightBorder '>Last Name</div>
            <div className='tableData rightBorder '>Email</div>
            <div className='tableData rightBorder'>Age</div>
            <div className='tableData rightBorder'>Mobile</div>
            <div className='tableData'>Edit/Delete</div>
          </div>
        </div>
        {userList.map((u, i) => {
          return <div key={i} className='mainTable'>
            <div className='topBorder'>
              <div className='tableData rightBorder leftBorder'> {u.fname}</div>
              <div className='tableData rightBorder'>  {u.lname}</div>
              <div className='tableData rightBorder'> {u.email}</div>
              <div className='tableData rightBorder'> {u.age}</div>
              <div className='tableData rightBorder'> {u.mobile}</div>
              <div className='tableData rightBorder'>
                <NavLink to={`/edit/${u.id}`} className='link'>Edit</NavLink>/
              <NavLink to={`/delete/${u.id}`} onClick={() => this.deleteRecord(u.id)} className='link'>Delete</NavLink>
              </div>
            </div>
          </div>
        })}
      </div>
    );
  }
}

export default UserList;