import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import MCA from './component/MCA/MCA';
import MBA from './component/MBA/MBA';
import Notfound from './component/Notfound';

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mca" component={MCA} />
              <Route path="/mba" component={MBA} />
              <Route component={Notfound} />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default Routing;