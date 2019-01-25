import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Body from './component/body/Body';
import Notfound from './component/Notfound';
import Contact from './component/Contact';
import Home from './component/Home';


const routing = (
  <Router>
    <div>
      <div id='regLog'>
        <div id="col-10">
          <NavLink activeClassName="active" exact to='/'> Home</NavLink>
        </div>
        <div id="col-10">
          <NavLink activeClassName="active" to="/register">Register</NavLink>
        </div>
        <div id="col-10">
          <NavLink activeClassName="active" to="/login">Login</NavLink>
        </div>
        <div id="col-10">
          <NavLink activeClassName="active" to="/contact">Contact us</NavLink>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Body} />
        <Route exact path="/login" component={Body} />
        <Route exact path="/contact/:id?" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
