import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './../CssFiles/Header.css';

class Header extends Component {

  render() {
    return (
      <div>
        <p className='heading'>
          User CRUD Application
        </p>
        <p className='subheading'>
          <NavLink exact to='/' className='link'>Record List</NavLink>
          &nbsp;|&nbsp;
          <span>
            <NavLink exact to='/add' className='link'>Add Record</NavLink>
          </span>
        </p>
      </div>
    );
  }
}

export default Header;