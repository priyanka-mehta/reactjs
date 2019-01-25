import React, { Component } from 'react';
import logo from './logo.gif';
import { NavLink } from 'react-router-dom';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div>
                <div id="regLog">
                    <div id="logo"> <img src={logo} className="AppLogo" alt="logo" /></div>
                    <div id="col-10"><NavLink activeClassName="active" to="/mca">&#22291; MCA</NavLink></div>
                    <div id="col-10"><NavLink activeClassName="active" to="/mba">&#22291; MBA</NavLink></div>
                </div>
            </div>
        );
    }
}

export default Header;
