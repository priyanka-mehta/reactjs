import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';

import UserList from './component/Display/UserList';
import Header from './component/Header/Header';
import Add from './component/Add/Add';

class Routing extends Component {

  render() {
    return (
      <div>
        <Router history={history}>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path='/' component={UserList} />
              <Route exact path='/add' render={(props) => <Add {...props} key="Add" />}/>
              <Route exact path='/edit/:id' component={Add} />
              <Route exact path='/delete/:id' component={UserList} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default Routing;