import React from 'react';

const UserTable = props => {

  return (
    <table border='2' >
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user, key) => (
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button >Edit</button>
                <button onClick={() => props.deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) :
          <tr>
            <td colSpan='3'>User list is empty</td>
          </tr>
        }
      </tbody>
    </table >
  )
}

export default UserTable;