import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Header from './Header';

class Routing extends Component {

  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Header />
        </React.Fragment>
      </Router >
    );
  }
}

export default Routing;