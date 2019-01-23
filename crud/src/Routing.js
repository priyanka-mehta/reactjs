import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Fetch from './component/Fetch';

class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Fetch />
                    <div>
                        <Switch>
                            {/* <Route exact path="/" component={Header} /> */}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Routing;