import React, { Component } from 'react';
import { Route, NavLink} from 'react-router-dom';
import Reactjs from './Reactjs';
import Angular from './Angular';
import ROR from './ROR';
import './MCA.css';

const Sub = ({ match }) => <h1> {match.params.id}</h1>


class MCA extends Component {
  render() {
    return (
     
        <div>
          <div id='left'>
            <div><NavLink activeClassName="active" to="/mca/reactjs"> ReactJS</NavLink></div><br />
            <div><NavLink activeClassName="active" to="/mca/angular"> AngularJS</NavLink></div><br />
            <div><NavLink activeClassName="active" to="/mca/ror"> ROR</NavLink></div><br />
            <div><NavLink activeClassName="active" to="/mca/java"> Java</NavLink></div><br />
            <div><NavLink activeClassName="active" to="/mca/php"> PHP</NavLink></div><br />
            <div><NavLink activeClassName="active" to="/mca/python"> Python</NavLink></div><br />
            <div><NavLink activeClassName="active" to="/mca/html"> HTML</NavLink></div><br />
            <div><NavLink activeClassName="active" to="/mca/css"> CSS</NavLink></div>
          </div>
          <div id='right'>
            <hr></hr><center>
            <Route path='/mca/:id?' component={Sub} /></center>
            <hr></hr>
            <Route path='/mca/reactjs' component={Reactjs} />
            <Route path='/mca/angular' component={Angular} />
            <Route path='/mca/ror' component={ROR} />

          </div>
        </div>
     
    );
  }
}

export default MCA;
