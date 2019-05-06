import React, { Component } from 'react';
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'
import ArrayShift from './Component/ArrayShift';
import Reactselect from './Component/Reactselect';
import Home from './Component/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id='regLog'>
            <div id="col-10">
              <NavLink activeClassName="active" exact to='/'> Home</NavLink>
            </div>
            <div id="col-10">
              <NavLink activeClassName="active" to="/arrayshift">Array Shift</NavLink>
            </div>
            <div id="col-10">
              <NavLink activeClassName="active" to="/react-select">React-Select</NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/arrayshift" component={ArrayShift} />
            <Route exact path="/react-select" component={Reactselect} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

