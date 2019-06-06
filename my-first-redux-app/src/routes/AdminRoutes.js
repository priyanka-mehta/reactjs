import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import UserList from '../components/users/UserList';
import AddEditUser from '../components/users/AddEditUser';
import { Dashboard } from '../components/dashboard/Dashboard';

export const AdminRoutes = (
  <div>
    <Router>
      <Route path='/' component={Dashboard} />
      <Switch>
        <Route path='/user-list/:id' component={AddEditUser} />
        <Route path='/user-list' component={UserList} />
      </Switch>
    </Router>
  </div>
)

