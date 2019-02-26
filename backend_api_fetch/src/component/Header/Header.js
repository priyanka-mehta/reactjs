import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div>
        <div className="Header ">
          Welcome to Bacancy Technology
          </div>
        <NavLink exact to='/'>Record List</NavLink><br />
        <NavLink exact to='/add'>Add User</NavLink><hr />
      </div>
    );
  }
}

export default Header;