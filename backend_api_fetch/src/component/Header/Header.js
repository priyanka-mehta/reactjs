import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Pdf from '../Pdf/Pdf';

class Header extends Component {

  render() {
    return (
      <div>
        <div className="Header ">
          Welcome to Bacancy Technology
          </div>
        <NavLink exact to='/'>Record List</NavLink><hr />
        <Pdf />
      </div>
    );
  }
}

export default Header;