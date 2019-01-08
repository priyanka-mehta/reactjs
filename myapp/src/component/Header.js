import React, { Component } from 'react';
//import logo from './logo.svg';
import './../App.css';

class Header extends Component {
  render() {
    return (
      <div id="regLog">
        <div id="col-10">&#9787; Home</div>
        <div id="col-10">&#22291; About us</div>
        <div id="col-10">&#9775; Gallery</div>
        <div id="col-10">&#128214; Blog</div>
        <div id="col-10">&#9993; Career</div>
        <div id="col-10">&#9742; Contact us</div>
        <div id="col-10">&#9997; Register or Login</div>
      </div>
      );
    }
  }
  
  export default Header;