import React, { Component } from 'react';
//import logo from './logo.svg';
import './../App.css';

class Header extends Component {
  render() {
    return (
      <div id="regLog">
        <div id="col-10"><span>&#9787;</span> Home</div>
        <div id="col-10"><span>&#22291;</span> About us</div>
        <div id="col-10"><span>&#9775;</span> Gallery</div>
        <div id="col-10"><span>&#128214;</span> Blog</div>
        <div id="col-10"><span>&#9993; </span>Career</div>
        <div id="col-10"><span>&#9742;</span> Contact us</div>
        <div id="col-10"><span>&#9997;</span> Register or Login</div>
      </div>
      );
    }
  }
  
  export default Header;