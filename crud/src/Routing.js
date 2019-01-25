import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './component/Header';
import Adduser from './component/Adduser';
import Recordlist from './component/Recordlist';
import Edit from './component/Edit';

class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/" component={Recordlist} />
                            <Route exact path='/add' component={Adduser} />
                            <Route exact path='/edit/:id' component={Edit}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Routing;