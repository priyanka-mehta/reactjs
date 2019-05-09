import React, { Component } from 'react';
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import ArrayShift from './Component/ArrayShift';
import Reactselect from './Component/Reactselect';
import Home from './Component/Home';
import Context from './Component/Context';
import Hooks from './Component/Hooks';
import InputFormat from './Component/InputFormat';

const url = [
  { to: '/', page: 'Home' },
  { to: '/arrayshift', page: 'Array Shift' },
  { to: '/react-select', page: 'React - Select' },
  { to: '/context', page: 'Context' },
  { to: '/hooks', page: 'Hooks' },
  { to: '/input-format', page: 'Input-Format' }
]

class App extends Component {
  render() {
    return (< Router >
      <div className='Main'>

        <div className='Header'>
          {url.map((i) =>
            <div id="col-10" key={i.to}>
              <NavLink activeClassName="active" exact to={i.to} > {i.page}</NavLink>
            </div >
          )}
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/arrayshift" component={ArrayShift} />
          <Route exact path="/react-select" component={Reactselect} />
          <Route exact path="/context" component={Context} />
          <Route exact path="/hooks" component={Hooks} />
          <Route exact path="/input-format" component={InputFormat} />
        </Switch>

      </div>
    </Router>
    )
  }
}

export default App;