import React, { useState, useEffect } from 'react';

import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'

const App = () => {
  const usersData = [
    { id: 1, name: 'Priyanka', email: 'priyanka@gmail.com' },
    { id: 2, name: 'Archita', email: 'archita@gmail.com' },
    { id: 3, name: 'Maitry', email: 'maitry@gmail.com' }
  ]

  const [users, setUsers] = useState(usersData)
  console.log('userlist', users);

  useEffect(() => {
    console.log('useEffect Called');
  }, [users.length]);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const [edit, setEdit] = useState(false)

  const initialStateEdit = { id: null, name: '', email: '' }

  const [currentUser, setCurrentUser] = useState(initialStateEdit)

  const editUser = (user) => {
    setEdit(true)
    setCurrentUser({ id: user.id, name: user.name, email: user.email })
  }

  const updateUser = (id, updateUser, bool) => {
    setEdit(bool)
    setUsers(users.map(user => user.id === id ? updateUser : user))
  }

  return (
    <div>
      <h1><center>CRUD Operation</center></h1>
      <div>
        <h3>User List</h3>
        <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>
      <div>
        {edit ?
          <div>
            <h3>Edit User</h3>
            <EditUserForm
              updateUser={updateUser}
              currentUser={currentUser}
              edit={edit}
              setEdit={setEdit}
            />
          </div>
          :
          <div>
            <h3>Add User</h3>
            <AddUserForm addUser={addUser} />
          </div>
        }
      </div>
    </div>
  )
}

export default App;