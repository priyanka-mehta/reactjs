import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';

import Header from './component/Header';
import Addedit from './component/Addedit';
import Recordlist from './component/Recordlist';

class Routing extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Recordlist} />
              <Route exact path='/add' render={(props)=> <Addedit {...props} key="Addedit" />}/>
              <Route exact path='/user/:id' component={Addedit} />
              <Route exact path='/delete/:id' component={Recordlist} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routing;