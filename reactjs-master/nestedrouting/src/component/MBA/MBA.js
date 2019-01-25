import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Marketing from './Marketing';
import Finance from './Finance';
import HR from './HR';
import './MBA.css';
import Businessmanagement from './Businessmanagement';
import Entrepreneurship from './Entrepreneurship';
import Economics from './Economics';

class MBA extends Component {
  render() {
    return (
     
        <div>
          <div>
            <hr></hr>
            <hr></hr>
            <center>
              <div id="col-10"><NavLink activeClassName="active" to="/mba/marketing">&#22291; Marketing</NavLink></div>
              <div id="col-10"><NavLink activeClassName="active" to="/mba/finance">&#22291; Finance</NavLink></div>
              <div id="col-10"><NavLink activeClassName="active" to="/mba/economics">&#22291;Economics</NavLink></div>
              <div id="col-10"><NavLink activeClassName="active" to="/mba/entrepreneurship">&#22291; Entrepreneurship</NavLink></div>
              <div id="col-10"><NavLink activeClassName="active" to="/mba/businessmanagement">&#22291;Business Management</NavLink></div>
              <div id="col-10"><NavLink activeClassName="active" to="/mba/hr">&#22291; Human Resource Management</NavLink></div>
            </center>
            <hr></hr>
            <hr></hr>
          </div>

          <Switch>
            <Route path='/mba/marketing' component={Marketing} />
            <Route path='/mba/finance' component={Finance} />
            <Route path='/mba/hr' component={HR} />
            <Route path='/mba/entrepreneurship' component={Entrepreneurship} />
            <Route path='/mba/businessmanagement' component={Businessmanagement} />
            <Route path='/mba/economics' component={Economics} />
          </Switch>
        </div>
      
    );
  }
}

export default MBA;