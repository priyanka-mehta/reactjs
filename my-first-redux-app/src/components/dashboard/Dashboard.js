import React from 'react';
import { NavLink } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Admin Panel</h1>
      <div><NavLink to='/user-list'>User List</NavLink></div>
    </div>
  )
}