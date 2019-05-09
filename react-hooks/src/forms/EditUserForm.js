import React, { useState } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form
        onSubmit={e => {
          props.updateUser(user.id, user, false)
        }}
      >
        <table border='2'>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type='text' name='name' value={user.name} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type='text' name='email' value={user.email} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td colSpan='2'>
                <button type='submit'>Edit User</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default EditUserForm;