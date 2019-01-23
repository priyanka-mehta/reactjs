import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <p className='heading'>
          User CRUD Application
        </p>
        <p className='subheading'>
          Record List |<span className='subhead'>&nbsp;Add Record</span>
        </p>
      </div>
    );
  }
}

export default Header;
