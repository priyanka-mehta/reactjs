import React, { Component } from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Edit from './components/Edit';

class Routing extends Component {

  render() {
    return (
      <Router>
        <>
            <Route exact path="/" component={App} />
            <Route exact path='/Edit' component={Edit} />   
        </>
      </Router >
    );
  }
}

export default Routing;