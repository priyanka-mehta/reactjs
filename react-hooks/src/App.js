import React, { useState } from 'react';

import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

const App = () => {
  const usersData = [
    { id: 1, name: 'Priyanka', email: 'priyanka@gmail.com' },
    { id: 2, name: 'Archita', email: 'archita@gmail.com' },
    { id: 3, name: 'Maitry', email: 'maitry@gmail.com' }
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div>
      <h1><center>CRUD Operation</center></h1>
      <div>
        <h3>User List</h3>
        <UserTable users={users} deleteUser={deleteUser} />
      </div>
      <div>
        <h3>Add User</h3>
        <AddUserForm addUser={addUser} />
      </div>
    </div>
  )
}

export default App;