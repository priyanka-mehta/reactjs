import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';

import Header from './component/Header';
import Adduser from './component/Adduser';
import Recordlist from './component/Recordlist';
import Edit from './component/Edit';

class Routing extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Recordlist} />
              <Route exact path='/add' component={Adduser} />
              <Route exact path='/user/:id' component={Edit} />
              <Route exact path='/delete/:id' component={Recordlist} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routing;